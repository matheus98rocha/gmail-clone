import React, { useState } from 'react'
import styled from 'styled-components';

import { Checkbox } from '@material-ui/core/';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder'
import IconButton from '@material-ui/core/IconButton';
import LabelImportant from '@material-ui/icons/LabelImportant';
import LabelImportantSharp from '@material-ui/icons/LabelImportantSharp';

const EmailItem = ({ starred, important, from, message, subject, received, read }) => {

    const [star, setStar] = useState(starred);
    const [importantIcon, setimportantIcon] = useState(important);

    return (

        <Wrapper>
            <Checkbox />
            <IconButton onClick={() => star ? setStar(false) : setStar(true)} >
                {
                    star ?
                        <StarIcon htmlColor='#f7cb69' /> :
                        <StarBorderIcon />
                }



            </IconButton>
            <IconButton onClick={() => importantIcon ? setimportantIcon(false) : setimportantIcon(true)} >
                {
                    importantIcon ?
                        <LabelImportantSharp htmlColor='#f7cb69' /> :
                        <LabelImportant htmlColor='gray' />

                }

            </IconButton>

            <p className={!read && 'unread'} >{from}</p>

            <div>
                <p className={!read && 'unread'}>{subject}</p> - <span>{message}</span>
            </div>

            <p className={!read && 'unread'}>{received}</p>

        </Wrapper >
    )
}

export default EmailItem

const Wrapper = styled.div`
    padding-left: 20px;
    border-top: 1px solid lightgray;

    display: grid;
    grid-template-columns: min-content min-content min-content 120px auto min-content;
    align-items: center;
    cursor: pointer;
    padding-right: 20px;

    div{
        display: flex;
        
        span{
            color: darkgray;
        }
    }
    .unread{
        color: black;
        font-weight: bolder;
    }

`;

