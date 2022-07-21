import { pageFadein } from "../hooks/fadeIn";
import { sprinkles } from "@css-utils";
import { GlobalStyle } from "../styles/layouts.css";
import { Header, Footer, FirstView } from "@components";

export const IncludingFV = ({ children }) => {
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
