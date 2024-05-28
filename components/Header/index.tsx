"use client";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Button from "../Button";

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const handleLogout = () => {
    // handle logout
  };
  return (
    <div
      className={`header-container
  h-fit
  bg-neutral-900
  px-6
  py-1
  ${className}`}
    >
      <div
        className="h-full
        mb-2
        mt-1
      flex
      items-center
      justify-between"
      >
        <div
          className="
        hidden
        md:flex
        gap-x-2
        items-center"
        >
          <button
            onClick={() => router.back()}
            className="rounded-full
          bg-black
          flex
          items-center
          justify-center
          hover:opacity-75
          transition"
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full
          bg-black
          flex
          items-center
          justify-center
          hover:opacity-75
          transition"
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div
          className="
        flex md:hidden gap-x-2 items-center
        "
        >
          <button
            className="
          rounded-full
          p-2
          bg-white
          flex
          items-center
          justify-center
          hover:opacity-75
          transition
          "
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            className="
          rounded-full
          p-2
          bg-white
          flex
          items-center
          justify-center
          hover:opacity-75
          transition
          "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div
          className="flex
        justify-between
        items-center
        gap-x-4"
        >
          <>
            <div>
              <Button
                className="
              bg-transparent
              text-neutral-300
              font-medium"
              >
                Sign Up
              </Button>
            </div>
            <div>
              <Button
                className="
                bg-slate-50
              font-medium
              px-8
              py-1
              "
              >
                Login
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
