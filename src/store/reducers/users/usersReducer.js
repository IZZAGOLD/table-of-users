import {
    SET_USERS,
    SET_IS_USERS_LOADING,
    SET_TOTAL_PAGES_COUNT,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS,
} from './consts'

const initialState = {
    isUsersLoading: false,
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalCountUsers: 0,
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.payload, isUsersLoading: false, totalCountUsers: action.payload.length}
        case SET_IS_USERS_LOADING:
            return {...state, isUsersLoading: action.payload}
        case SET_TOTAL_PAGES_COUNT:
            return {...state, totalPagesCount: action.payload}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case SET_TOTAL_USERS:
            return {...state, totalCountUsers: action.payload}
        default:
            return state;
    }
}