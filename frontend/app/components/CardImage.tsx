"use client";

const FALLBACK =
  "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=600&q=80";

type CardImageProps = {
  src: string;
  alt: string;
  className: string;
};

export function CardImage({ src, alt, className }: CardImageProps) {
  return (
    <div className={className}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={(event) => {
          const image = event.currentTarget;
          if (image.dataset.fallback === "1") return;
          image.dataset.fallback = "1";
          image.src = FALLBACK;
        }}
      />
    </div>
  );
}
