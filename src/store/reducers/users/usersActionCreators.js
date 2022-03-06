import UsersAPI from '../../../API/UsersAPI'
import {
    SET_USERS,
    SET_IS_USERS_LOADING,
    SET_TOTAL_PAGES_COUNT,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS,
} from './consts'

export const UsersActionCreators = {
    setIsUsersIsLoading: (payload) => ({type: SET_IS_USERS_LOADING, payload}),
    setUsers: (users) => ({type: SET_USERS, payload: users}),
    setCurrentPage: (page) => ({type: SET_CURRENT_PAGE, payload: page}),
    setTotalUsers: (totalCount) => ({type: SET_TOTAL_USERS, payload: totalCount}),
    setTotalPagesCount: (count) => ({type: SET_TOTAL_PAGES_COUNT, payload: count}),
    getUsers: () => async (dispatch) => {
        dispatch(UsersActionCreators.setIsUsersIsLoading(true))
        try {
            dispatch(UsersActionCreators.setIsUsersIsLoading(true))
            const response = await UsersAPI.getAll()
            dispatch(UsersActionCreators.setUsers(response.data))
            const totalCount = response.data.length
            dispatch(UsersActionCreators.setTotalUsers(totalCount))
        } catch (error) {
            alert(error.message)
        }
    }
}