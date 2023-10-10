import Image from "next/image";

type CustomBlogImageProps = {
  src: string;
  alt: string;
  priority?: string;
}

function CustomBlogImage({ src, alt, priority }: CustomBlogImageProps) {
  const prty = priority ? true : false;

  return (
    <div className="w-full h-full">
      <Image
        className="rounded-lg mx-auto"
        src={src}
        alt={alt}
        width={650} //Really is max width & height as Next.js handles aspect
        height={650}
        priority={prty}
      />
    </div>
  )
}

export default CustomBlogImage;