const pad2 = (n: number): string => n < 10 ? '0' + n : String(n);

export function formatDate(date: Date): string {
  return `${pad2(date.getMonth() + 1)}. ${pad2(date.getDate())} ${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
}