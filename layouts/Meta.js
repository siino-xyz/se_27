import NextOgp from "../components/NextOgp";
import useAsPath from "../hooks/useAsPath";
export default function Meta({ children }) {
  const { path } = useAsPath();
  return (
    <>
      <NextOgp
        pagedescription={"Jamstack専門のホームページ制作 SE-27（せつな）"}
        pagepath={path}
      />

      <div>{children}</div>
    </>
  );
}
