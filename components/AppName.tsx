import React from 'react'
import styled from 'styled-components'

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
        Administración
    </NavContainer>
    )
}

export default AppName
