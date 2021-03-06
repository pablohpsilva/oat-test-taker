import csv from 'csvtojson'

import { TFunction, IUser } from '@/types'

const readFile = (func: TFunction) => ({ currentTarget: { result } }): PromiseLike<IUser[]> => {
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
