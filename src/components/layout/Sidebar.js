import React from 'react'
import styled from 'styled-components';
import Compose from '../buttons/Compose';
import { sideBarButtomItems } from '../data/SidebarButtomItems';

const Sidebar = () => {
    return (
        <Wrapper>

            <ComposeWrapper>
                <Compose />
            </ComposeWrapper>

            <SideButtonsWrapper>
                {
                    sideBarButtomItems.map(item => (
                        <SidebarButtomItem>{item.icon} {item.text}</SidebarButtomItem>
                    ))
                }
            </SideButtonsWrapper>

            <MeetWrapper>

            </MeetWrapper>

            <HangoutsWrapper>

            </HangoutsWrapper>

            <BottomIconsWrapper>

            </BottomIconsWrapper>

        </Wrapper >
    )
}

export default Sidebar;

const Wrapper = styled.div`
    border-right: 1px solid lightgray;
    height: 100vh;

`;

const ComposeWrapper = styled.div`
    display: grid;
    place-items: start;
    padding: 10px 20px;
`;

const SideButtonsWrapper = styled.div`

`;

const MeetWrapper = styled.div`

`;

const HangoutsWrapper = styled.div`

`;

const BottomIconsWrapper = styled.div`

`;

const SidebarButtomItem = styled.div`
    display: grid;
    grid-template-columns: 14% auto;
    color: gray;
    padding: 5px 25px;
    border-radius: 0 100px 100px 0;
    cursor: pointer;
    margin-right: 4px;

    :hover{
        background-color:#dde4e4;
    }
`;