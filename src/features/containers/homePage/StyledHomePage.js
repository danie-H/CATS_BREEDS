import styled from 'styled-components';

export const StyledHomePage = styled.div`
    & .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    & .paginationStack {
        margin-top: 2rem;
        align-items: center;
    }
    & .appBar{
        Background-color: #03241d;
    }
`

export default StyledHomePage;