export default async function ImageUpload(file) {
  const url = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", "qalkk6fn");

  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });

  return await res.json();
}
