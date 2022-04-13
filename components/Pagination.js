import Router from 'next/router'
import Link from 'next/link'
import styles from '../styles/components/pagination.module.scss'


export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 5
  const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  return(
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={ `/articles/page/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Pagination