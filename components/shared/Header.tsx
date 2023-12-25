import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="w-36">
          <Image
            src={"/assets/images/logo.svg"}
            alt="Eventz Logo"
            width={144}
            height={38}
          />
        </Link>
        <div>
          <button>Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
