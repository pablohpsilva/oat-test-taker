import React from 'react'
import styled from 'styled-components/macro'
import { connect } from 'react-redux'
import { includes } from 'lodash-es'

import { readCSVFile, readJSONFile } from '@/utils/file'
import { loadUsersAction } from '@/entities/user/actions'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 var(--dim-gutter);
`

const StyledH1 = styled.h1`
    font-size: calc(1.5 * var(--font-size-x-large));
    text-align: center;
    margin-bottom: calc(2 * var(--dim-gutter));
`

const StyledP = styled.p`
    text-align: center;
    margin-bottom: var(--dim-gutter);
`

const StyledFakeButton = styled.label`
    border-radius: calc(1 * var(--s));
    border: var(--s) solid var(--color-dark-1-30);
    color: var(--color-dark-1);
    background: var(--color-light-0);
    width: fit-content;
    padding: var(--dim-gutter) calc(1.5 * var(--dim-gutter));
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
        border: var(--s) solid var(--color-dark-1-30);
        background: var(--color-dark-1-30);
        color: var(--color-light-0);
    }
`

const StyledFakeButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
        reader.onload = e => (includes(type, 'csv') ? readCSVFile : readJSONFile)(e).then(resolve)

        // Read in the image file as a data URL.
        reader.readAsText(file)
    })
}

const Import = ({ loadUsersAction }) => {
    const handleOnChange = async event => {
        const data = await readFile(event)
        // @ts-ignore
        if (data && data.length) {
            loadUsersAction(data)
            alert('Import successful.')
            return
        }

        alert('Could not import. Please check the file content.')
    }

    return (
        <StyledWrapper>
            <StyledH1>Import users</StyledH1>
            <StyledP>Please, select your .json or .csv file using the button below.</StyledP>

            <StyledFakeButtonWrapper>
                <StyledFakeButton htmlFor="inputfile">
                    Click here to select file
                    <input
                        id="inputfile"
                        type="file"
                        onChange={handleOnChange}
                        accept=".json,.csv"
                        multiple={false}
                        size={1e7}
                        hidden
                    />
                </StyledFakeButton>
            </StyledFakeButtonWrapper>
        </StyledWrapper>
    )
}

const mapDispatchToProps = dispatch => ({
    loadUsersAction: users => loadUsersAction(dispatch, users)
})

export default connect(
    null,
    mapDispatchToProps
)(Import)
