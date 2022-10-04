export function getFormattedDate(date) {
  return new Date(date).toUTCString().slice(0, 16);
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
