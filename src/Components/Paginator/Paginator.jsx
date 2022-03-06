import React from 'react'
import {Pagination} from 'antd'
import './Paginator.css'

const Paginator = ({currentPage, setCurrentPage, totalCount, pageSize}) => {

    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    return (
        <div
            className={'paginator__container'}>
            <Pagination
                defaultPageSize={pageSize}
                current={currentPage}
                onChange={onPageChange}
                defaultCurrent={1}
                total={totalCount}/>
        </div>
    )
}

export default Paginator