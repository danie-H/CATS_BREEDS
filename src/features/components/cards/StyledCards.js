import styled from 'styled-components';

export const StyledCardComponent = styled.div`
    & .card {
        height: auto;
        & .cardArea {
            height: 15em;
            background-color: #a5e0d4;
        }
    }
`

export default StyledCardComponent;