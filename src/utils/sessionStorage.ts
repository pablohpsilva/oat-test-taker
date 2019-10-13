const sessionStorageOr = <T>(identity: T, sessionStorageItem: string): T => {
    const item = window.sessionStorage.getItem(sessionStorageItem)
    return item ? JSON.parse(item) : identity
}

export default sessionStorageOr