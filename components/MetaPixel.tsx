"use client";

import Script from "next/script";

const PIXEL_ID = "1587912655294119";

/**
 * Meta (Facebook) Pixel — carrega o pixel base + PageView em toda página.
 * Opcionalmente dispara um evento extra (ex: Purchase na página de obrigado).
 */
export default function MetaPixel({
  track,
}: {
  track?: { event: string; params?: Record<string, unknown> };
}) {
  const extra = track
    ? `fbq('track', ${JSON.stringify(track.event)}${
        track.params ? `, ${JSON.stringify(track.params)}` : ""
      });`
    : "";

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');${extra}`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
