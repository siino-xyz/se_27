import Link from 'next/link'
import styles from '../styles/components/linkbutton.module.scss'


export default function LinkButton(props) {
  return ( 
    <Link href={`/${props.url}`} passHref>
      <a>
        <div className={styles.linkBtnWrapper}>
              {props.button}
        </div>
      </a>
    </Link>
  )
}