import { getLog } from "@/services/boards_service";
import { ImageResponse } from "next/og";

interface Props {
  params: { id: string };
}
// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "이미지 프로필";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params: { id } }: Props) {
  const { thumbnail, title } = await getLog(id);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "630px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={thumbnail || `/assets/images/op_image.png`}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: "100%",
            objectFit: "cover",
            filter: "blur(10px)",
          }}
          alt="ogImage"
        />
        <p
          style={{
            position: "absolute",
            top: "254px",
            fontSize: "3rem",
            fontWeight: "900",
            color: "white",
          }}
        >
          {title}
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
