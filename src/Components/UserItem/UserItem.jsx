import React, {useState} from 'react'
import cl from './UserItem.module.css'
import cancel from './../../assets/icons/cancel.svg'
import ModalDelUser from '../ModalDelUser/ModalDelUser'
import {useSelector} from 'react-redux'
import {useActions} from '../../hooks/useActions'

const UserItem = ({user}) => {
    const {users} = useSelector(state => state.users)
    const {setUsers} = useActions()
    const [isModalVisible, setIsModalVisible] = useState(false)

    const removeUser = () => {
        setUsers(users.filter(el => el.id !== user.id))
    }

    const getDate = (date) => {
        return new Date(date)
            .toLocaleDateString('pl', {day: 'numeric', month: 'numeric', year: '2-digit'})
    }

    const registrationDate = getDate(user.registration_date)

    return (
        <div className={cl.content}>
            <div
                className={cl.username}>
                {user.username}
            </div>
            <div
                className={cl.email}>
                {user.email}
            </div>
            <div
                className={cl.registration}>
                {registrationDate}
            </div>
            <div
                className={cl.rating}>
                <div>
                    {user.rating}
                </div>
                <img
                    onClick={() => setIsModalVisible(true)}
                    className={cl.cancel_icon}
                    src={cancel}
                    alt='delete_user'/>
            </div>
            <ModalDelUser
                removeUser={removeUser}
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
            />
        </div>
    )
}

export default UserItem