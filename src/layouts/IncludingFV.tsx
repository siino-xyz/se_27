import { pageFadein } from "../hooks/fadeIn";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FirstView from "../templates/firstView/FirstView";
import { sprinkles } from "@css-utils/sprinkles.css";

const IncludingFV = ({ children }) => {
  const { fadeTargetRef, domId } = pageFadein();
  return (
    <div
      className={sprinkles({
        position: "relative",
      })}
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
          //margin: 0 auto;
          // max-width: 1200px;
          // width: 98%;
        })}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default IncludingFV;
