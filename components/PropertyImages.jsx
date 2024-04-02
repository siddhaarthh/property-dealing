"use client";

import React from "react";
import ImageGallery from "react-image-gallery";

function PropertyImages({ property }) {
  return (
    <>
      <div className="mb-5 w-full">
        <ImageGallery
          items={property?.propertyImages.map((image) => ({
            original: image,
            thumbnail: image,
          }))}
          showPlayButton={false}
          showFullscreenButton={true}
          showNav={true}
          showThumbnails={false}
          showBullets={true}
          infinite={true}
          autoPlay={true}
          slideDuration={500}
        />
      </div>
    </>
  );
}

export default PropertyImages;
