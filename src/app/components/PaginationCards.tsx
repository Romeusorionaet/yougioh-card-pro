interface Props {
    pages: number;
    setCurrentPage(arg0: number): void;
    setValueToScroll(arg0: boolean): void;
}

import PaginationOfCards from '@mui/material/Pagination';

export function PaginationCards({pages, setCurrentPage, setValueToScroll}: Props) {
    return(
        <div>
            <PaginationOfCards 
            onChange={(E, P)=>{
              setCurrentPage(P - 1)
              setValueToScroll(true)
            }} 
            count={pages} 
            color='primary'
            ></PaginationOfCards>
        </div>
    )
}