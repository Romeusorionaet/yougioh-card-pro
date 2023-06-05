import * as React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { ContentForPaginationCards } from './ContentForPaginationCards'

export interface CardsProps {
  pages?: number
  setCurrentPage(arg0: number): void
  setValueToScroll(arg0: boolean): void
  currentPage: number
}

export function PaginationCards({
  pages,
  setCurrentPage,
  setValueToScroll,
  currentPage,
}: CardsProps) {
  return (
    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <Routes>
        <Route
          path="*"
          element={
            <ContentForPaginationCards
              setValueToScroll={setValueToScroll}
              setCurrentPage={setCurrentPage}
              pages={pages}
              currentPage={currentPage}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  )
}
