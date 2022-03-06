import React from 'react'
import UserItem from '../UserItem/UserItem'
import cl from './UsersList.module.css'

const UsersList = ({users}) => {
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
            {users.map((user, index) =>
                <UserItem
                    key={user.id}
                    index={index + 1}
                    user={user}/>)}
        </div>
    )
}

export default UsersList