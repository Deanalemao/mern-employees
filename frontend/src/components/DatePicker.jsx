import React, { useEffect, useMemo, useRef, useState } from 'react';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const parseIsoDate = (value) => {
  if (!value) return null;
  const parsed = new Date(`${value}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const formatIsoDate = (value) => {
  if (!value) return '';
  return value;
};

const clampDate = (date, min, max) => {
  if (!date) return null;
  if (min && date < parseIsoDate(min)) return parseIsoDate(min);
  if (max && date > parseIsoDate(max)) return parseIsoDate(max);
  return date;
};

const DatePicker = ({
  label,
  name,
  value,
  onChange,
  min = '1900-01-01',
  max = new Date().toISOString().slice(0, 10),
}) => {
  const [open, setOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(() => {
    const parsed = parseIsoDate(value);
    return parsed || new Date();
  });
  const wrapperRef = useRef(null);

  useEffect(() => {
    const parsed = parseIsoDate(value);
    if (parsed) {
      setCurrentMonth(parsed);
    }
  }, [value]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open]);

  const selectedDate = useMemo(() => parseIsoDate(value), [value]);
  const monthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const monthStartDay = monthStart.getDay();

  const goPrevMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goNextMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const selectDay = (day) => {
    const nextDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const clamped = clampDate(nextDate, min, max);
    if (!clamped) return;
    const iso = clamped.toISOString().slice(0, 10);
    onChange(name, iso);
    setOpen(false);
  };

  const isDisabled = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (min && date < parseIsoDate(min)) return true;
    if (max && date > parseIsoDate(max)) return true;
    return false;
  };

  return (
    <div ref={wrapperRef} className="relative">
      <label className="block text-sm font-semibold text-slate-200 mb-2">{label}</label>
      <button
        type="button"
        className="w-full text-left rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 pr-12 text-slate-100 placeholder-slate-500 transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className={value ? 'text-slate-100' : 'text-slate-500'}>
          {value ? formatIsoDate(value) : 'Select date of joining'}
        </span>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="absolute z-20 mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950/95 p-4 shadow-2xl shadow-slate-950/40">
          <div className="flex items-center justify-between pb-4">
            <button
              type="button"
              onClick={goPrevMonth}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200 hover:bg-slate-800"
            >
              ←
            </button>
            <div className="text-sm font-semibold text-slate-100">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </div>
            <button
              type="button"
              onClick={goNextMonth}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200 hover:bg-slate-800"
            >
              →
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold uppercase text-slate-500">
            {dayNames.map((day) => (
              <div key={day} className="py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 pt-2">
            {Array.from({ length: monthStartDay }).map((_, index) => (
              <div key={`blank-${index}`} className="h-10" />
            ))}

            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const disabled = isDisabled(day);
              const selected = selectedDate &&
                selectedDate.getFullYear() === currentMonth.getFullYear() &&
                selectedDate.getMonth() === currentMonth.getMonth() &&
                selectedDate.getDate() === day;

              return (
                <button
                  key={day}
                  type="button"
                  disabled={disabled}
                  onClick={() => selectDay(day)}
                  className={`h-10 rounded-2xl text-sm transition ${
                    disabled
                      ? 'cursor-not-allowed bg-slate-900 text-slate-500'
                      : selected
                      ? 'bg-cyan-500 text-slate-950'
                      : 'bg-slate-900 text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
