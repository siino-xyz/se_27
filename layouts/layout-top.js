import Header from "../components/Header";
import Footer from "../components/Footer";
import FirstView from '../sections/FirstView'


export default function topPageLayout({children}) {
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