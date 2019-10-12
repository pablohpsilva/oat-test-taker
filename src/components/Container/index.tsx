import styled from 'styled-components/macro'

export default styled.div`
    max-width: var(--dim-site-width);
    padding: 0 var(--dim-site-offset);
    width: 100%;
    position: relative;

    @media screen and (max-width: 1200px) {
        padding: 0;
    }
`