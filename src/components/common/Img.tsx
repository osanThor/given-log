import Image, { ImageProps } from "next/image";

export default function Img({ src, alt, ...props }: ImageProps) {
  return <Image src={src} alt={alt} {...props} />;
}
