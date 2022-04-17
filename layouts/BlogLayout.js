import styles from '../styles/layouts/blog-layout.module.scss'
import Footer from '../components/Footer'
import BlogHeader from '../components/blogHeader'

export function BlogContainer ({children , categories}) {
  return (
    <>
    <div className={styles.container}>
      {/* <BlogHeader
       categories={categories}
      /> */}
      <div>
        {children}
      </div>
      <Footer />
    </div>
    </>
  )
}

export default BlogContainer;