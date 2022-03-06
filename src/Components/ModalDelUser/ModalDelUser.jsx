import React from 'react'
import cl from './ModalDelUser.module.css'

const ModalDelUser = ({isModalVisible, setIsModalVisible, removeUser}) => {
    const rootClasses = [cl.container]

    if (isModalVisible) {
        rootClasses.push(cl.active)
    }

    return (
        <div
            onClick={() => setIsModalVisible(false)}
            className={rootClasses.join(' ')}>
        <div
            onClick={(e) => e.stopPropagation()}
            className={cl.content}>
            <div
                className={cl.title}>
                Вы уверены, что хотите удалить пользователя?
            </div>
            <div className={cl.button_group}>
                <button
                    onClick={removeUser}
                    className={cl.button}>
                    <span>
                        Да
                    </span>
                </button>
                <button
                    onClick={() => setIsModalVisible(false)}
                    className={cl.button}>
                    <span>
                        Нет
                    </span>
                </button>
            </div>
        </div>
        </div>
    )
}

export default ModalDelUser