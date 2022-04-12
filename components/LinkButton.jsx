import Link from 'next/link'

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