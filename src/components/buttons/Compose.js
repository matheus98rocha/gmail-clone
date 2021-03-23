import React from 'react'
import styled from 'styled-components';

import AddIcon from '@material-ui/icons/Add';

const Compose = () => {
    return (
        <Wrapper>
            <AddIcon fontSize='large' />
            <p>Compor</p>
        </Wrapper>
    )
}

export default Compose

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 35% auto;
    width: auto;
    align-items: center;
    padding: 6px 32px 6px 8px;
    border-radius: 50px;
    box-shadow: 0 1px 2px 0 rgba(60,64,67, 0.305), 0 1px 3px 1px rgba(60,64,67,0.149);
    cursor: pointer;
    color: #3c4043;
    font-weight: 500;
    font-size: 0.875rem;
    transition: 0.2s;

    :hover{
        box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.49);
    -webkit-box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.49);
    -moz-box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.49);
    }

    p{
        margin: 0px 0px 0px 10px;
        color: #3c4043;
    }

`;
