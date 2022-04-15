import Router from 'next/router'
import Link from 'next/link'
import styles from '../styles/components/pagination.module.scss'

import ReactPaginate from 'react-paginate'
import { useEffect, useState } from 'react';


export const Pagination = ({ totalCount }) => {

  const [ offset, setOffset ] = useState(0)
  const PER_PAGE = 5
  const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  const handlePageChange = (data) => {
    let page_number = data['selected']; // クリックした部分のページ数が{selected: 2}のような形で返ってくる
    setOffset(page_number*perPage); // offsetを変更し、表示開始するアイテムの番号を変更
  }

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


