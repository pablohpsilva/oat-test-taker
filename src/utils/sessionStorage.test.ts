import sessionStorageOr from './sessionStorage'

const userCredentials = { username: 'foo', password: 'bar' }

window.sessionStorage.setItem('db', JSON.stringify(userCredentials))

test('Test: sessionStorageOr - return default', async () => {
    expect(sessionStorageOr({}, 'item')).toStrictEqual({})
})

test('Test: sessionStorageOr - fetch from storage', async () => {
    expect(sessionStorageOr(null, 'db')).toStrictEqual(userCredentials)
})

afterAll(() => window.sessionStorage.removeItem('db'))