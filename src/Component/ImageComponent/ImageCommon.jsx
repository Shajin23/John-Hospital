import Image from "next/image";
import React from "react";
const imageLoader = ({ src, width, quality }) => {
  return "https://media.graphassets.com/1bKpf5ihQpyEeRWXn8cg";
};
export default function ImageCommon({
  src,
  aspectRatio = "",
  width = "100%",
  height = "",
  objectFit = "cover",
  original = false,
  priority = false,
}) {
  return (
    <>
      <div
        style={{
          aspectRatio: aspectRatio,
          width: width,
          height: height,
          position:"relative"
        }}
      >
        {!original ? (
          <Image
            fill
            src={src}
            loading={priority ? "eager" : "lazy"}
            priority={priority}
            sizes="100vw"
            style={{ objectFit: objectFit }}
            unoptimized={true}
            alt="img"
          />
        ) : (
          <Image
            src={src}
            unoptimized={true}
            width={0}
            height={0}
            sizes="100vw"
            loading={priority ? "eager" : "lazy"}
            priority={priority}
            style={{ width: "100%", height: "100%", objectFit: objectFit }}
            alt="img"
          />
        )}
      </div>
    </>
  );
}
