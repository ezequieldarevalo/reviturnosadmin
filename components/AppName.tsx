import React from 'react'
import styled from 'styled-components'
import { getPlantName } from '../helpers/ls-auth'

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    float: left;
    height: 100%;
    margin-left: 30px;
    div{
        display: inline;
    }
    font-size: 18px;
`

const AppName = (): JSX.Element => {
    return (<NavContainer>
        Administración {' ' + getPlantName()}
    </NavContainer>
    )
}

export default AppName
