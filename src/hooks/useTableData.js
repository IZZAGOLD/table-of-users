import {useMemo} from 'react'

export const useTableData = (currentPage, pageSize, sortedUsers) => {
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize
        const lastPageIndex = firstPageIndex + pageSize
        return sortedUsers.slice(firstPageIndex, lastPageIndex)
    }, [currentPage, sortedUsers])

    return currentTableData
}