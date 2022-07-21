import { pageFadein } from "@hooks";
import { sprinkles } from "@css-utils";
import { GlobalStyle } from "../styles/layouts.css";
import { Header, Footer } from "@components";

export const WithoutFV = ({ children }) => {
  const { fadeTargetRef, domId } = pageFadein();
  return (
    <div
      className={GlobalStyle}
      ref={fadeTargetRef}
      id={domId}
      style={{ opacity: 0 }}
    >
      <Header />
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
