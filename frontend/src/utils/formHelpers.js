export const departments = [
  'IT',
  'HR',
  'Finance',
  'Civil',
  'Marketing',
  'Sales',
  'Operations',
  'Support',
  'Design',
];

export const minimumAge = 18;

export const formFieldClass =
  'w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20';

export const isValidName = (name) => {
  const trimmed = String(name).trim();
  return trimmed.length >= 3 && /^[A-Za-z ]+$/.test(trimmed);
};

export const isValidPhone = (phone) => {
  const digits = String(phone).replace(/\D/g, '');
  return digits.length === 10;
};

export const isValidEmail = (email) => {
  const trimmed = String(email).trim().toLowerCase();
  return /^[a-z0-9._%+-]+@gmail\.com$/.test(trimmed);
};

export const isValidAge = (age) => {
  const numeric = Number(age);
  return Number.isFinite(numeric) && numeric >= minimumAge;
};
