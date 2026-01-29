"use client";

import { useEffect, useState } from "react";

export function SignedImage({ imageKey }: { imageKey: string }) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/image-url?key=${encodeURIComponent(imageKey)}`)
      .then((res) => res.json())
      .then((data) => setUrl(data.url));
  }, [imageKey]);

  if (!url) {
    return (
      <div className="h-48 w-full bg-gray-800 animate-pulse rounded-md" />
    );
  }

  return (
    <img
      src={url}
      alt=""
      className="rounded-lg object-cover"
    />
  );
}
