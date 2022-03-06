import React, {useEffect, useMemo, useState} from 'react'
import {useActions} from '../../hooks/useActions'
import UsersList from '../UsersList/UsersList'
import {useSelector} from 'react-redux'
import Paginator from '../Paginator/Paginator'
import UsersFilter from '../UsersFilter/UsersFilter'
import {useUsers} from '../../hooks/useUsers'
import cl from './Users.module.css'
import {useTableData} from "../../hooks/useTableData";

const Users = () => {
    const {
        totalCountUsers,
        users,
        isUsersLoading,
        pageSize
    } = useSelector(state => state.users)

    const {getUsers} = useActions()

    const [filter, setFilter] = useState({sort: '', query: '', state: false})
    const [currentPage, setCurrentPage] = useState(1)

    const sortedAndSearchedUsers = useUsers(users, filter.sort, filter.query, filter.minMaxCategory)
    const currentTableData = useTableData(currentPage, pageSize, sortedAndSearchedUsers)

    useEffect(() => getUsers(), [])

    return <>
        <div>
            <h1
                className={cl.title}>
                Список пользователей
            </h1>
            <UsersFilter
                filter={filter}
                setFilter={setFilter}
            />
            {!isUsersLoading &&
                <>
                    <UsersList
                        sortedAndSearchedUsers={sortedAndSearchedUsers}
                        filter={filter}
                        users={currentTableData}
                    />
                    {!filter.query.length &&
                        <Paginator
                            totalCount={totalCountUsers}
                            currentPage={currentPage}
                            pageSize={pageSize}
                            setCurrentPage={setCurrentPage}
                        />}
                </>
            }
        </div>
    </>
}

export default Users