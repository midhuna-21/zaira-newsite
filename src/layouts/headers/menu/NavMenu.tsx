import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Business", link: "/business" },
  { id: 3, title: "US", link: "/us" },
  { id: 4, title: "Enterprise", link: "/enterprise" },
  { id: 5, title: "Investing", link: "/investing" },
  { id: 6, title: "Innovation", link: "/innovation" },
];

const NavMenu = () => {
  const currentRoute = usePathname();

  return (
    <ul className="navigation">
      {menuItems.map((menu) => (
        <li
          key={menu.id}
          className={currentRoute === menu.link ? "active" : ""}
        >
          <Link href={menu.link}>{menu.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
