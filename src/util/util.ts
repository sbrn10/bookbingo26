export function isValidMimeType(file: File) {
  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/avif",
  ];
  return allowedMimeTypes.includes(file.type);
}
