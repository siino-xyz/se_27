import { sprinkles } from "@css-utils/sprinkles.css";
import Link from "next/link";
import { menuItems } from "@libs/headerMenuItems";

export const HeaderNav = () => {
  return (
    <nav
      className={sprinkles({
        display: "flex",
        flexDirection: { mobile: "column", desktop: "row" },
        justifyContent: { mobile: "flex-start", desktop: "space-between" },
        alignItems: { mobile: "flex-start", desktop: "center" },
        gap: "size-6",
        paddingX: { mobile: "size-4", desktop: "none" },
      })}
    >
      {menuItems.map((item) => (
        <Link href={item.href} key={item.id}>
          <a
            className={sprinkles({
              borderRadius: "size-0.5",
              paddingX: "size-4",
              paddingY: "size-1",
              background: { lightMode: "black", darkMode: "white" },
              color: { lightMode: "white", darkMode: "black" },
              fontSize: { mobile: "2xl", desktop: "base" },
              fontWeight: "bold",
              textDecoration: "none",
            })}
          >
            {item.title}
          </a>
        </Link>
      ))}
    </nav>
  );
};
