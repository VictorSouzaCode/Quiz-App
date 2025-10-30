// A safe and consistent way to format dates across your app.

export function formatDate(date: string | number | Date, locale = 'en-US') {
  const d = new Date(date);
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

// Example usage:
// formatDate('2025-10-28'); // "Oct 28, 2025"