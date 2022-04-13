import styles from '../styles/layouts/inner-layout.module.scss'

export default function InnerLayout ({children}) {
  return (
    <>
      <div>
        {children}
      </div>
    </>
  )
}