import Link from "next/link";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
}

const TextLink = ({ href, children}: TextLinkProps) => {
  return (
    <Link
      href={href}
      className='font-bold bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text animate-gradient md:animate-none hover:animate-gradient bg-300% underline underline-offset-4 decoration-primary'
    >
      {children}
    </Link>
  )
}

export default TextLink;