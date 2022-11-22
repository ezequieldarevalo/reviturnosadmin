import React from 'react'
import styled from 'styled-components'
import useNavigation from '../hooks/useNavigation'

const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    clear:both;
    height: 60px;
    padding-left: 50px;
    padding-right: 30px;
`

interface IMenuItem {
    active: boolean
}

const MenuItem = styled.button`
    text-decoration: none;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    border-bottom: ${(props: IMenuItem) => props.active ? '4px solid #111831' : 'none'};
    padding: 15px 0 15px 0;
    height: 100%;
    font-size: ${(props: IMenuItem) => props.active ? '17px' : '16px'};
    font-weight: ${(props: IMenuItem) => props.active ? 'bold' : 'normal'};
    margin-right: 70px;
    ${(props: IMenuItem) => props.active ? '' : 'cursor: pointer;'}
`

const AdminPanel = (): JSX.Element => {
    const { activeSection, setNewActiveSection } = useNavigation()
    return (
        <NavContainer>
            <MenuItem
                active={activeSection === 'turnos'}
                onClick={() => setNewActiveSection('turnos')}
            >
                TURNOS
            </MenuItem>
            <MenuItem
                active={activeSection === 'parametros'}
                onClick={() => setNewActiveSection('parametros')}
            >
                PARAMETROS
            </MenuItem>
        </NavContainer>
    )
}

export default AdminPanel
