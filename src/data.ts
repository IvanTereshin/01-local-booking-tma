import type { BlockedSlot, Booking, Service, Specialist } from './types';

export const services: Service[] = [
  {
    id: 'haircut-style',
    title: 'Стрижка и укладка',
    description: 'Форма, мытье головы и финальная укладка',
    price: 2900,
    durationMin: 60,
    category: 'Hair',
  },
  {
    id: 'color-consult',
    title: 'Консультация по окрашиванию',
    description: 'Подбор оттенка, тест пряди и план ухода',
    price: 1800,
    durationMin: 45,
    category: 'Color',
  },
  {
    id: 'spa-care',
    title: 'Восстановление волос',
    description: 'Уход с диагностикой кожи головы',
    price: 3600,
    durationMin: 75,
    category: 'Care',
  },
  {
    id: 'express-makeup',
    title: 'Экспресс-макияж',
    description: 'Легкий образ для встречи или съемки',
    price: 3200,
    durationMin: 50,
    category: 'Makeup',
  },
];

export const specialists: Specialist[] = [
  {
    id: 'anna',
    name: 'Анна Лебедева',
    role: 'Стилист-колорист',
    rating: 4.9,
    reviewCount: 128,
    image: '/assets/specialist-anna.png',
    serviceIds: ['haircut-style', 'color-consult', 'spa-care'],
    slots: ['10:00', '11:15', '13:00', '15:30', '17:00'],
    initials: 'АЛ',
    accent: 'linear-gradient(135deg, #d7eee4, #9fd4c5)',
  },
  {
    id: 'maksim',
    name: 'Максим Орлов',
    role: 'Барбер и hair-эксперт',
    rating: 4.8,
    reviewCount: 96,
    image: '/assets/specialist-maksim.png',
    serviceIds: ['haircut-style', 'spa-care'],
    slots: ['09:30', '10:45', '12:30', '14:00', '16:45'],
    initials: 'МО',
    accent: 'linear-gradient(135deg, #dce7f8, #a9bfe8)',
  },
  {
    id: 'sofia',
    name: 'София Романова',
    role: 'Визажист',
    rating: 5,
    reviewCount: 74,
    image: '/assets/specialist-sofia.png',
    serviceIds: ['express-makeup', 'color-consult'],
    slots: ['11:00', '12:15', '14:30', '16:00', '18:15'],
    initials: 'СР',
    accent: 'linear-gradient(135deg, #f4ddd4, #edb9a8)',
  },
];

const toLocalDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const dateOffset = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return toLocalDateKey(date);
};

export const demoDates = Array.from({ length: 7 }, (_, index) => dateOffset(index));

export const seedBookings: Booking[] = [
  {
    id: 'seed-1',
    serviceId: 'haircut-style',
    specialistId: 'anna',
    date: dateOffset(0),
    time: '11:15',
    clientName: 'Иван Терешин',
    clientPhone: '+7 900 120-44-18',
    note: 'Нужна аккуратная деловая укладка',
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'seed-2',
    serviceId: 'express-makeup',
    specialistId: 'sofia',
    date: dateOffset(0),
    time: '14:30',
    clientName: 'Мария Кузнецова',
    clientPhone: '+7 913 222-31-09',
    status: 'pending',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'seed-3',
    serviceId: 'spa-care',
    specialistId: 'maksim',
    date: dateOffset(1),
    time: '12:30',
    clientName: 'Алексей Миронов',
    clientPhone: '+7 923 800-14-88',
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'seed-4',
    serviceId: 'color-consult',
    specialistId: 'anna',
    date: dateOffset(-4),
    time: '15:30',
    clientName: 'Иван Терешин',
    clientPhone: '+7 900 120-44-18',
    status: 'completed',
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const seedBlockedSlots: BlockedSlot[] = [
  {
    id: 'blocked-1',
    specialistId: 'anna',
    date: dateOffset(0),
    time: '15:30',
    reason: 'Личный перерыв',
  },
  {
    id: 'blocked-2',
    specialistId: 'sofia',
    date: dateOffset(1),
    time: '16:00',
    reason: 'Выездная съемка',
  },
];
