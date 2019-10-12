const localStorageOr = (identity, localStorageItem) => {
    const item = window.localStorage.getItem(localStorageItem)
    return item ? JSON.parse(item) : identity
}

export default localStorageOr