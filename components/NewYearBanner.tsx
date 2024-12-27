import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";

async function NewYearBanner() {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.NYEAR2025);

  if (!sale?.isActive) {
    return null;
  }

  return <div>New Year Banner</div>;
}

export default NewYearBanner;
