import { sprinkles } from "@css-utils/sprinkles.css";
import Link from "next/link";
import { menuItems } from "libs/headerMenuItems";

const HeaderNav = () => {
  return (
    <nav
      className={sprinkles({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "size-6",
      })}
    >
      {menuItems.map((item) => (
        <Link href={item.href} key={item.id} className={sprinkles({})}>
          <a
            className={sprinkles({
              borderRadius: "size-1",
              paddingX: "size-4",
              paddingY: "size-1",
              background: "white",
              color: "black",
              fontSize: "base",
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

export default HeaderNav;
