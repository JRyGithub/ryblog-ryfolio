import Link from "next/link";
import Image, { ImageProps } from 'next/image'

type ImageWithLink = {
  link: string;
}

const ImageWithLink = ({ link, ...nextImageProps }: ImageWithLink & ImageProps) => {

  return (
    <a href={link} rel="noopener noreferrer"  target="_blank" className="flex flex-col justify-center">
      <Image {...nextImageProps} />
    </a>
  )
}

export default ImageWithLink;