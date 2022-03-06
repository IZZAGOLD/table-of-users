import {useMemo} from 'react'

export const useSortedUsers = (users, sort, minMaxCategory) => {
    const newUsers = users.map(user => ({...user, registration_date: Number(new Date(user.registration_date))}))
    const sortedPosts = useMemo(() => {
        if(sort) {
            if (minMaxCategory) {
                return [...newUsers].sort((a, b) => a[sort] - b[sort])
            }
            return [...newUsers].sort((a, b) => b[sort] - a[sort])

        }
        return users
    }, [sort, users, minMaxCategory])

    return sortedPosts
}

export const useUsers = (users, sort, query, minMaxCategory) => {
    const _query = query.toLowerCase()
    const sortedPosts = useSortedUsers(users, sort, minMaxCategory)

    const sortedAndSearchedUsers = useMemo(() => {
        return sortedPosts.filter(user => {
            const {username, email} = user
            return username.toLowerCase().includes(_query) || email.toLowerCase().includes(_query)})
    }, [query, sortedPosts])

    return sortedAndSearchedUsers
}