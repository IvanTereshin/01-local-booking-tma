type TelegramWebApp = {
  ready?: () => void;
  expand?: () => void;
  colorScheme?: 'light' | 'dark';
  themeParams?: Record<string, string>;
};

declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }
}

export const initTelegramShell = () => {
  const webApp = window.Telegram?.WebApp;
  webApp?.ready?.();
  webApp?.expand?.();

  const theme = webApp?.themeParams;
  if (!theme) return;

  const root = document.documentElement;
  if (theme.bg_color) root.style.setProperty('--tg-bg', theme.bg_color);
  if (theme.text_color) root.style.setProperty('--tg-text', theme.text_color);
  if (theme.hint_color) root.style.setProperty('--tg-muted', theme.hint_color);
  if (theme.button_color) root.style.setProperty('--tg-accent', theme.button_color);
};
