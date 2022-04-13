import Link from 'next/link'
import styles from '../styles/components/linkbutton.module.scss'


export default function LinkButton(props) {
  return ( 
    <div>
      <Link href={`/${props.url}`} passHref>
        <div>
            {props.button}
        </div>
      </Link>
    </div>
  )
}