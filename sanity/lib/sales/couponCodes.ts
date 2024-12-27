export const COUPON_CODES = {
  BFRIDAY: "BFRIDAY",
  XMAS2025: "XMAS2025",
  NYEAR2025: "NYEAR2025",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
