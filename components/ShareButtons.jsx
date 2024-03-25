"use client";
import React from "react";
import {
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareButton,
} from "react-share";

function ShareButtons({ property }) {
  const shareUrl = `${process.env.APP_URL || "http://localhost:3000"}/properties/${property?._id}`;
  return (
    <div className="flex items-center justify-center gap-3">
      <FacebookShareButton
        url={shareUrl}
        quote={property?.name}
        hashtag={`#${property?.details?.propertyCategory}ForSale`}
        className="rounded-lg bg-neutral-200"
      >
        <FacebookIcon size={35} className="rounded-lg" />
      </FacebookShareButton>

      <TwitterShareButton
        url={shareUrl}
        title={property?.name}
        hashtags={[`#${property?.details?.propertyCategory}ForSale`]}
      >
        <TwitterIcon size={35} className="rounded-lg" />
      </TwitterShareButton>

      <WhatsappShareButton
        url={shareUrl}
        title={property?.name}
        separator=":: "
      >
        <WhatsappIcon size={35} className="rounded-lg" />
      </WhatsappShareButton>
    </div>
  );
}

export default ShareButtons;
