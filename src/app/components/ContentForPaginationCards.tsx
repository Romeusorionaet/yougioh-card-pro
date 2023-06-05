import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'

import { CardsProps } from './PaginationCards'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function ContentForPaginationCards({
  pages,
  setCurrentPage,
  setValueToScroll,
  currentPage,
}: CardsProps) {
  const [gettingLocalCurrentPageSaved, setGettingLocalCurrentPageSaved] =
    useState<number>(0)

  const handleCurrentPage = (P: number) => {
    localStorage.setItem('@yougiohLocalCurrentPage', String(P))
    setGettingLocalCurrentPageSaved(P)
  }

  useEffect(() => {
    const current = localStorage.getItem('@yougiohLocalCurrentPage')
    setGettingLocalCurrentPageSaved(Number(current))
    setCurrentPage(Number(current) - 1)
  }, [currentPage, setCurrentPage])

  return (
    <Pagination
      page={gettingLocalCurrentPageSaved}
      count={pages}
      onChange={(E, P) => {
        handleCurrentPage(P)
        setCurrentPage(P - 1)
        setValueToScroll(true)
      }}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/inbox${item.page === 0 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  )
}
