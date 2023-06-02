import { Pagination } from '@mui/material'

interface Props {
  pages?: number
  setCurrentPage(arg0: number): void
  setValueToScroll(arg0: boolean): void
}

export function PaginationCards({
  pages,
  setCurrentPage,
  setValueToScroll,
}: Props) {
  return (
    <div>
      <Pagination
        onChange={(E, P) => {
          setCurrentPage(P)
          setValueToScroll(true)
        }}
        count={pages || 0}
        color="primary"
      ></Pagination>
    </div>
  )
}
