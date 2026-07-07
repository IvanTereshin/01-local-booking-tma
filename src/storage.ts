import { seedBlockedSlots, seedBookings } from './data';
import type { BlockedSlot, Booking } from './types';

const BOOKINGS_KEY = 'local-booking-tma:bookings';
const BLOCKED_KEY = 'local-booking-tma:blocked-slots';

const readJson = <T>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
};

const writeJson = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const bookingStore = {
  getBookings: () => readJson<Booking[]>(BOOKINGS_KEY, seedBookings),
  setBookings: (bookings: Booking[]) => writeJson(BOOKINGS_KEY, bookings),
  getBlockedSlots: () => readJson<BlockedSlot[]>(BLOCKED_KEY, seedBlockedSlots),
  setBlockedSlots: (slots: BlockedSlot[]) => writeJson(BLOCKED_KEY, slots),
};
