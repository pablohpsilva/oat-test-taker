export const normalizeUser = user =>
    Object.keys(user).reduce((acc, curr) => ({ ...acc, [`${curr}`.toLowerCase()]: user[curr] }), {})

export default normalizeUser
