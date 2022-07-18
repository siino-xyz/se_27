import HeaderLogo from "@components/headerLogo/HeaderLogo";
import HeaderNav from "@components/headerNav/HeaderNav";
import { DesktopHeaderContainer } from "./DesktopHeader.css";

const DesktopHeader = () => {
  return (
    <div className={DesktopHeaderContainer}>
      <HeaderLogo
        href="/"
        src="/global/se-27-logo-latest.svg"
        alt="logo"
        width={184}
        height={43}
        layout="intrinsic"
      />
      <HeaderNav />
    </div>
  );
};

export default DesktopHeader;
