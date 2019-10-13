import uuid from './uuid'

test('Test: uuid - Generating 2000 uuids', async () => {
    const base = Array(1000)
        .fill(0)
        .map(() => uuid())
    const proof = Array(1000)
        .fill(0)
        .map(() => uuid())
    const match = proof.filter(p => !base.find(b => b !== p))

    expect(match.length).toBe(0)
})