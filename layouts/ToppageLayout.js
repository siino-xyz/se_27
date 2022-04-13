import Header from "../components/Header";
import Footer from "../components/Footer";
import FirstView from '../sections/FirstView'


export default function ToppageLayout({children}) {
  return (
    <>
      <Header />
      <FirstView />
        <main>
          {children}
        </main>
      <Footer />
    </>
  )
}