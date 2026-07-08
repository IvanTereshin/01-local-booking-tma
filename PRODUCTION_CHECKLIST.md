# Production checklist

## Payment architecture

- Keep `TELEGRAM_BOT_TOKEN`, `YOOKASSA_SHOP_ID` and `YOOKASSA_SECRET_KEY` only on the backend.
- Mini App should request a payment session from the backend and receive only an invoice link or `confirmation_url`.
- Telegram Stars flow: backend creates an invoice in currency `XTR`, handles `pre_checkout_query`, stores `successful_payment.telegram_payment_charge_id`, then confirms the booking.
- YooKassa flow: backend creates a payment, redirects the user to confirmation, then marks the booking paid only from YooKassa webhook.
- SBP flow: use YooKassa payment method type `sbp`; the user confirms payment in a bank app through redirect.

## Required backend endpoints

- `POST /api/payments/telegram-stars/invoice`
- `POST /api/payments/yookassa/checkout`
- `POST /api/payments/yookassa/sbp`
- `POST /api/payments/webhook/yookassa`
- `POST /api/telegram/pre-checkout`

## Launch checks

- Validate Telegram init data on every backend request.
- Use idempotency keys for YooKassa payment creation.
- Store booking payment status separately from booking status.
- Add `/paysupport` handling in the bot for payment disputes.
- Test mobile widths: 320, 360, 390 and 430 px.

## References

- Telegram Stars payments: https://core.telegram.org/bots/payments-stars
- Telegram Mini Apps: https://core.telegram.org/bots/webapps
- YooKassa API: https://yookassa.ru/developers/api
- YooKassa SBP: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/sbp
