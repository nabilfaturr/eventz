"use client";

import { usePathname } from "next/navigation";

import { headerLinks } from "@/constants/index";
import Link from "next/link";

const NavItems = () => {
  const currentPath = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link, idx) => (
        <li
          key={idx}
          className={`${
            currentPath === link.route && "text-primary-500"
          } flex-center p-medium-16 whitespace-nowrap`}
        >
          <Link href={link.route}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
