import Script from "next/script";

export const UmamiAnalytics = () => {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  if (!websiteId) {
    console.log("No website ID here because we devving!");
    return <></>;
  }
  return (
    <Script
      async
      src="https://cloud.umami.is/script.js"
      data-website-id={websiteId}
      data-auto-track="true"
      strategy="beforeInteractive"
    />
  );
};
