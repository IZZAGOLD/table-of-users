import React, {useState} from 'react';
import cl from './UsersFilter.module.css'
import searchIcon from './../../assets/icons/source_icons_search 1.svg'
import cleanIcon from './../../assets/icons/clean.svg'

const UsersFilter = ({filter, setFilter}) => {
    const [minMaxCategory, setMinMaxCategory] = useState(false)
    const showClearFiltersButton = filter.sort || filter.query
    const activeBtnDate = filter.sort === 'registration_date'
    const activeBtnRating = filter.sort === 'rating'

    const clearFilters = () => {
        setFilter({...filter, query: '', sort: '', minMaxCategory: false})
    }

    const handleChangeCategory = (e) => {
        setMinMaxCategory(!minMaxCategory)
        setFilter({...filter, sort: e.target.value, minMaxCategory: minMaxCategory})
    }

    const handleChangeInput = (event) => {
        setFilter({...filter, query: event.target.value})
    }

    return (
        <div>
            <div className={cl.search}>
                <div className={cl.input_container}>
                    <input
                        className={cl.input}
                        type="text"
                        placeholder={'Поиск по имени или e-mail'}
                        value={filter.query}
                        onChange={handleChangeInput}
                    />
                    <img className={cl.input_icon}
                         src={searchIcon}
                         alt="search_icon"/>

                    {showClearFiltersButton &&
                        <div className={cl.clean_group}>
                            <img
                                className={cl.clean_icon}
                                src={cleanIcon}
                                alt="clean"/>
                            <button
                                className={cl.clean_button}
                                onClick={clearFilters}>
                                <span>Очистить фильтр</span>
                            </button>
                        </div>
                    }
                </div>
            </div>
            <div className={cl.sorted_group}>
                <div>Сортировка:</div>
                <button
                    onClick={handleChangeCategory}
                    value='registration_date'
                    className={activeBtnDate ? cl.registration_active : cl.registration}>
                    Дата регистрации
                </button>
                <button
                    onClick={handleChangeCategory}
                    value='rating'
                    className={activeBtnRating ? cl.rating_active : cl.rating}>
                    Рейтинг
                </button>
            </div>
        </div>
    );
};

export default UsersFilter;