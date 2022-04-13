import styles from '../styles/layouts/blog-layout.module.scss'


export function BlogContainer ({children}) {
  return (
    <>
      <div>
        {children}
      </div>
    </>
  )
}