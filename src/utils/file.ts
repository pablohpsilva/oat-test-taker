import csv from 'csvtojson'

import { TFunction } from '@/types'

const readFile = (func: TFunction) => ({ currentTarget: { result } }): PromiseLike<JSON> => {
    return new Promise((resolve, reject) => {
        try {
            return func(resolve, result)
        } catch (error) {
            reject(error)
        }
    })
}

export const readCSVFile = readFile(
           (resolve: TFunction, result: TFunction): PromiseLike<string> =>
               csv({ output: 'json' })
                   .fromString(result)
                   .then(resolve)
       )

export const readJSONFile = readFile(
           (resolve: TFunction, result: TFunction): PromiseLike<string> => resolve(JSON.parse(result))
       )

export default readFile
