import Link from "next/link";
import React from "react";
interface SidebarItemsProps {
  icon?: any;
  label: string;
  active?: boolean;
  href: string;
  key: any;
}

const SidebarItems: React.FC<SidebarItemsProps> = ({
  icon: Icon,
  label,
  active,
  href,
  key,
}) => {
  return (
    <Link
      key={key}
      href={href}
      className={`
    flex
    flex-row
    h-auto
    items-center
    w-full
    gap-x-4
    text-md
    font-medium
    cursor-pointer
    hover:text-white
    transition
    text-neutral-400
    py-1

    ${active && "text-white"}
    `}
    >
      {Icon && <Icon size={26} />}
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItems;
