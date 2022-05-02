import NextOgp from "../components/NextOgp";
import useAsPath from "../hooks/useAsPath";
export default function Meta({ children }) {
  const { path } = useAsPath();
  return (
    <>
      <NextOgp
        pagetitle={"SE-27 | Jamstack専門のホームページ制作"}
        pagedescription={"Jamstack専門のホームページ制作"}
        pagepath={path}
      />

      <div>{children}</div>
    </>
  );
}
