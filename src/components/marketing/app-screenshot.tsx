import Image, { type ImageProps } from "next/image";
import { ANDROID_IMAGES, type AndroidImageKey } from "@/lib/constants";
import { cn } from "@/lib/utils";

type AppScreenshotProps = {
  image: AndroidImageKey;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  fill?: boolean;
};

export function AppScreenshot({
  image,
  priority = false,
  className,
  containerClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill = false,
}: AppScreenshotProps) {
  const asset = ANDROID_IMAGES[image];

  const imageProps: ImageProps = {
    src: asset.src,
    alt: asset.alt,
    priority,
    loading: priority ? undefined : "lazy",
    sizes,
    className: cn("h-auto w-full", className),
  };

  if (fill) {
    return (
      <div className={cn("relative overflow-hidden", containerClassName)}>
        <Image
          {...imageProps}
          fill
          className={cn("object-contain object-center", className)}
        />
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      <Image
        {...imageProps}
        width={asset.width}
        height={asset.height}
      />
    </div>
  );
}
