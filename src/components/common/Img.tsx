"use client";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

interface ImageBoxProps {
  src: string | StaticImageData;
  alt: string;
  $islogo?: boolean;
}

const ImageLoader = ({ src }: { src: string }) => {
  const imageSrc = `${src}`;
  return imageSrc;
};

export default function Img({ src, alt, ...props }: ImageProps) {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className="relative items-center justify-center felx">
      <Image
        className="!relative !h-auto"
        loader={ImageLoader}
        src={src}
        alt={alt}
        onLoadingComplete={() => setLoading(false)}
        layout="fill"
        {...props}
      />
      {loading && <Skeleton height={500} />}
    </div>
  );
}
