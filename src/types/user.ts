export interface IUserCompact {
    userId: string
    lastName: string
    firstName: string
}

export interface IUser extends IUserCompact {
    login?: string
    password?: string
    title?: string
    gender?: string
    email?: string
    picture?: string
    address?: string
}
