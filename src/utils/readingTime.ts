/** 한국어 기준 분당 약 500자로 읽는 시간(분)을 계산 */
export function readingTime(body: string): number {
  const chars = body.replace(/\s/g, '').length;
  return Math.max(1, Math.round(chars / 500));
}
