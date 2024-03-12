"use client";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

const ImageLoader = ({ src }: { src: string }) => {
  const imageSrc = `${src}`;
  return imageSrc;
};

export default function Img({ src, alt, ...props }: ImageProps) {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className="relative items-center justify-center felx">
      <Image
        className="!relative !h-auto object-cover"
        loader={ImageLoader}
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        fill
        {...props}
      />
      {loading && <Skeleton height={500} />}
    </div>
  );
}
