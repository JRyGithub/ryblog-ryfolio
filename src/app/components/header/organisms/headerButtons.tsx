import Link from "next/link";
import ThemeToggle from "../molecules/themeToggle";

const HeaderButtons = () => {
  return (
    <>
      <ThemeToggle />
      <Link href="/notCreated">
        <button className="btn-sm rounded-full text-neutral-content hover:text-primary-content
                hover:bg-primary hover:border-primary transition hover:scale-110 duration-700 hover:ease-in-out">
          Login
        </button>
      </Link>

    </>
  )
}

export default HeaderButtons;
