import { readCSVFile, readJSONFile } from './file'
import testTakerCSV from '@/assets/dummy/testtakers-csv'
import testTakerJSON from '../assets/dummy/testtakers-json'

const mockCSV = { currentTarget: { result: testTakerCSV } }
const mockJSON = { currentTarget: { result: testTakerJSON } }

test('Test: readCSVFile', async () => {
    const data = await readCSVFile(mockCSV)
    const csvLogins = ['howardnicholas', 'fordhannah', 'cartergenesis']
    expect(data.length).toBe(100)
    expect(data.filter(d => csvLogins.find(l => l === d.login)).length).toBe(3)
})

test('Test: readJSONFile', async () => {
    const data = await readJSONFile(mockJSON)
    const csvLogins = ['jonescandice', 'griffindylan', 'allenjessica']
    expect(data.length).toBe(100)
    expect(data.filter(d => csvLogins.find(l => l === d.login)).length).toBe(3)
})
