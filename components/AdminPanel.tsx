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
    border-bottom: ${(props: IMenuItem) => props.active ? '4px solid #122463' : 'none'};
    border-top: ${(props: IMenuItem) => props.active ? '4px solid transparent' : 'none'};
    padding: 15px 0 15px 0;
    height: 100%;
    font-size: 17px;
    font-weight: ${(props: IMenuItem) => props.active ? 'bold' : 'normal'};
    margin-right: 70px;
    ${(props: IMenuItem) => props.active ? '' : 'cursor: pointer;'}
    line-height: unset;
`

const AdminPanel = (): JSX.Element => {
    const { activeSection, setNewActiveSection } = useNavigation()
    return (
        <NavContainer>
            <MenuItem
                active={activeSection === 'todayQuotes'}
                onClick={() => setNewActiveSection('todayQuotes')}
            >
                HOY
            </MenuItem>
            <MenuItem
                active={activeSection === 'findQuotes'}
                onClick={() => setNewActiveSection('findQuotes')}
            >
                BUSCAR
            </MenuItem>
            <MenuItem
                active={activeSection === 'newQuote'}
                onClick={() => setNewActiveSection('newQuote')}
            >
                NUEVO
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
