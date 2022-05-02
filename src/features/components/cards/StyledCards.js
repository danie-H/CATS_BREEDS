import styled from 'styled-components';

export const StyledCardComponent = styled.div`
    & .card {
        height: auto;
        & .cardArea {
            height: 15em;
        }
    }
`

export default StyledCardComponent;