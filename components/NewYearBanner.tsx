async function NewYearBanner() {
  const sale = await getActiveSaleByCouponCode("NYEAR2025");
  return <div>New Year Banner</div>;
}

export default NewYearBanner;
