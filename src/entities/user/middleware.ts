import { USER_CONCAT_USER_LIST, USER_RESET } from './actions'

const saveLocalStorage = store => next => action => {
    const settingsActions = [USER_CONCAT_USER_LIST, USER_RESET]

    const result = next(action)
    if (settingsActions.find(el => el === action.type)) {
        window.localStorage.setItem('users', JSON.stringify(store.getState().users))
    }
    return result
}

export default saveLocalStorage
