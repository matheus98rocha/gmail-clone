import React from 'react'
import styled from 'styled-components';
import Compose from '../buttons/Compose';
import { sideBarButtomItems } from '../data/SidebarButtomItems';
import { bottomIcons } from '../data/BottomIconsData';


import VideoCamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AccoutCircleIcon from '@material-ui/icons/AccountCircle';



const Sidebar = () => {
    return (
        <Wrapper>
            <TopSectionWrapper>
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
            </TopSectionWrapper>

            <BottomSectionWrapper>
                <SidebarSectionWrapper>
                    <Title>Meet</Title>
                    <p><VideoCamIcon /> Nova Reunião</p>
                    <p><KeyboardIcon /> Participar em reunião</p>
                </SidebarSectionWrapper>

                <SidebarSectionWrapper>
                    <Title>Meet</Title>
                    <p><AccoutCircleIcon /> Matheus Gonçalves</p>
                </SidebarSectionWrapper>

                <BottomIconsWrapper>
                    {
                        bottomIcons.map(icon => (
                            <>
                                {icon}
                            </>
                        ))
                    }
                </BottomIconsWrapper>
            </BottomSectionWrapper>

        </Wrapper >
    )
}

export default Sidebar;

const Wrapper = styled.div`
    border-right: 1px solid lightgray;
    height: calc(100vh - 70px);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TopSectionWrapper = styled.div`
`;

const BottomSectionWrapper = styled.div`
    margin-bottom: 30px;
`;

const ComposeWrapper = styled.div`
    display: grid;
    place-items: start;
    padding: 10px 20px;
`;

const SideButtonsWrapper = styled.div``;

const SidebarSectionWrapper = styled.div`
    border-top: 1px solid lightgray;

    p{
        color: gray;
        display: grid;
        grid-template-columns: 14% auto;
        height: 30px;
        align-items: center;
        padding-left: 25px;
    }
`;

const Title = styled.h4`
    color: #202124;
    padding-left: 25px;
    margin-bottom: 3px;
    margin-top: 4px;
`;

const BottomIconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-self: flex-end;
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