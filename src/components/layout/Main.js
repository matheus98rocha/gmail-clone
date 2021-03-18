import React from 'react'
import styled from 'styled-components';

import EmailsView from './EmailsView';
import Sidebar from './Sidebar';
import SideIcons from './SideIcons';


function Main() {
    return (
        <Wrapper>
            <Sidebar />
            <EmailsView />
            <SideIcons />

        </Wrapper>
    )
}

export default Main

const Wrapper = styled.div`
    /* display: grid;
    grid-template-columns: 25% auto 15%; */
`;


