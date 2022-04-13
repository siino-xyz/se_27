import Header from "../components/Header";
import Footer from "../components/Footer";

export default function UnderpageLayout({children}) {
  return (
    <>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </>
  )
}