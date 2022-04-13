import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from '../styles/layouts/underpage-layout.module.scss'


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