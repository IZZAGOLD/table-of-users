import React from 'react'
import UserItem from '../UserItem/UserItem'
import cl from './UsersList.module.css'

const UsersList = ({users, filter, sortedAndSearchedUsers}) => {
    return (
        <div
            className={cl.container}>
            <div
                className={cl.labels}>
                <div>Имя пользователя</div>
                <div>E-mail</div>
                <div>Дата регистрации</div>
                <div>Рейтинг</div>
            </div>
            {filter.query.length ?
                sortedAndSearchedUsers.map(user =>
                    <UserItem
                        key={user.id}
                        user={user}/>)
                :
                users.map(user =>
                    <UserItem
                        key={user.id}
                        user={user}/>)
            }
        </div>
    )
}

export default UsersList