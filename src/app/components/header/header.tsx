import AllHeaderItems from "./organisms/headerItems";
import HeaderButtons from "./organisms/headerButtons";
import Link from "next/link";

const Header = () => {
    return (
        <div className="navbar bg-neutral font-mono text-neutral-content sticky top-0 left-0 max-h-10 z-50">
            {/* Small Screens */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <AllHeaderItems horizontal={true} />
                    </ul>
                </div>
                <Link href='/' className="btn btn-ghost normal-case text-xl">jRyland</Link>
            </div>
            {/* Medium to Large Screens */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <AllHeaderItems horizontal={false} />
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <HeaderButtons/>
            </div>
        </div>
    )
}

export default Header;
