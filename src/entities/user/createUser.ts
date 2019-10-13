import IUser from '@/types'
import uuid from '@/utils/uuid'

export const createUser = (user: Partial<IUser>) => {
    const keys = Object.keys(user)
    const nUser = { ...user }

    if (keys.includes('userid')) {
        nUser.userId = user.userid
    } else if (!keys.includes('userId')) {
        nUser.userId = uuid()
    }

    if (keys.includes('lastname')) {
        nUser.lastName = user.lastname
    }
    if (keys.includes('firstname')) {
        nUser.firstName = user.firstname
    }

    return nUser !== {} ? nUser : user
}

export default createUser
