import React, { useReducer } from 'react'
import styled from 'styled-components/macro'
import { includes } from 'lodash-es'

import userReducer from '@/entities/user/reducers'
import { readCSVFile, readJSONFile } from '@/utils/file'
import { loadUsersAction } from '@/entities/user/actions'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const readFile = ({ target: { files } }) => {
    return new Promise(resolve => {
        // Loop through the FileList and render image files as thumbnails.
        if (!files || !files.length) {
            return
        }

        const file = files[0]
        const { type } = file
        const reader = new FileReader()

        // @ts-ignore
        reader.onload = e => (includes(type, 'csv') ? readCSVFile : readJSONFile)(e)
            .then(resolve)

        // Read in the image file as a data URL.
        reader.readAsText(file)
    })
}

const Import = () => {
    const [, dispatch] = useReducer(userReducer, [])
    const handleOnChange = async (event) => {
        const data = await readFile(event)
        loadUsersAction(dispatch, data)
    }

    return (
        <div>
            <h1>Please find below the methods we support to import test takers</h1>
            <StyledWrapper>
                <h1>Import file</h1>
                <p>Click on the button below to import a file</p>
                <input type="file" onChange={handleOnChange} accept=".json,.csv" multiple={false} size={1e7} />
                <button type="button">Start importing</button>
            </StyledWrapper>
        </div>
    )
}

export default Import
