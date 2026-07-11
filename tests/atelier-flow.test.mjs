import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const appSource = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8');
const stylesSource = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8');

test('booking flow keeps the five required product stages', () => {
  const flowOrder = ['Услуга', 'Мастер', 'Дата', 'Время', 'Готово'];
  const positions = flowOrder.map((label) => appSource.indexOf(`'${label}'`));

  assert.ok(positions.every((position) => position >= 0), 'all five stages must be visible in the UI');
  assert.deepEqual([...positions].sort((a, b) => a - b), positions, 'stages must stay in booking order');
});

test('slot system exposes every decision state to sighted and screen-reader users', () => {
  for (const state of ['free', 'selected', 'occupied', 'waitlisted', 'conflict']) {
    assert.match(appSource + stylesSource, new RegExp(`\\b${state}\\b`));
  }

  assert.match(appSource, /aria-label=\{`\$\{slot\}:/);
  assert.match(appSource, /лист ожидания/);
  assert.match(appSource, /конфликт записи/);
});

test('successful booking pays off with a branded pass', () => {
  assert.match(appSource, /function BookingPass/);
  assert.match(appSource, /className="booking-pass"/);
  assert.match(appSource, /Atelier Vera/);
  assert.match(appSource, /Мои записи →/);
  assert.match(stylesSource, /\.booking-pass/);
});

test('reduced-motion fallback remains explicit', () => {
  assert.match(stylesSource, /@media \(prefers-reduced-motion: reduce\)/);
});
