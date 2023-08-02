import Link from "next/link";
import ThemeToggle from "../molecules/themeToggle";

const HeaderButtons = () => {
  return (
    <>
      <ThemeToggle />
      <Link href="/notCreated">
        <button className="rounded-full box-border p-1 px-2  bg-accent border-accent text-primary-content
                hover:bg-primary hover:border-primary">
          Login
        </button>
      </Link>

    </>
  )
}

export default HeaderButtons;
