import { pageFadein } from "../hooks/fadeIn";
import Header from "../components/organisms/header/Header";
import Footer from "../components/organisms/footer/Footer";
import FirstView from "../components/templates/firstView/FirstView";
import { sprinkles } from "@css-utils/sprinkles.css";
import { GlobalStyle } from "../styles/layouts.css";

const IncludingFV = ({ children }) => {
  const { fadeTargetRef, domId } = pageFadein();
  return (
    <div
      className={GlobalStyle}
      ref={fadeTargetRef}
      id={domId}
      style={{ opacity: 0 }}
    >
      <Header />
      <FirstView />
      <main
        className={sprinkles({
          width: "size-0.9",
          marginX: "size-auto",
          marginY: "size-12",
        })}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default IncludingFV;
