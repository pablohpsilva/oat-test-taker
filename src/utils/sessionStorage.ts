const sessionStorageOr = (identity, sessionStorageItem) => {
    const item = window.sessionStorage.getItem(sessionStorageItem)
    return item ? JSON.parse(item) : identity
}

export default sessionStorageOr