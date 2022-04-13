import Header from "../components/Header";
import Footer from "../components/Footer";
import FirstView from '../sections/FirstView'
import styles from '../styles/layouts/toppage-layout.module.scss'


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