"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function ProductImages({ images }: { images: string[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[currentImageIndex]}
        alt="product image"
        height={1000}
        width={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "cursor-pointer border mr-1 hover:border-orange-600 rounded-sm overflow-hidden",
              currentImageIndex === index && "border-orange-600",
            )}
            onClick={() => setCurrentImageIndex(index)}
          >
            <Image
              src={image}
              alt={`product image-${index + 1}`}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
