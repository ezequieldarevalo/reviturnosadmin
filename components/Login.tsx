import React, { useState } from 'react'
import styled from 'styled-components'
import useUser from '../hooks/useUser'
import plants from '../lib/config/plants'

const defaultSelect = 'Seleccione su planta'

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: grey;
    align-items: center;
`
const StyledForm = styled.form`
    padding: 30px;
    background-color: white;
    box-shadow: 5px 5px 10px;
`

const StyledInput = styled.input`
    margin: 15px 0 15px 0;
    font-size 20px;
`

const SelectInput = styled.select`
    margin: 15px 0 15px 0;
    font-size 20px;
`
const OptionInput = styled.option`
    margin: 15px 0 15px 0;
    font-size 20px;
`

const StyledButton = styled.button`
    font-size 20px;
    margin-top: 15px;
`

const Login = (): JSX.Element => {
    const { error, signIn } = useUser()
    const [email, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [plantId, setPlantId] = useState<string>('')

    const handleChangeUsername = (e: any): void => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e: any): void => {
        setPassword(e.target.value)
    }

    const handleChangeBackendUrl = (e: any): void => {
        setPlantId(e.target.value)
    }

    const handleSubmit = (e: any): void => {
        e.preventDefault()
        console.log(email, password, plantId)
        signIn(email, password, plantId)
    }

    return (
        <StyledMain>
            <StyledForm onSubmit={handleSubmit}>
                <StyledInput
                    type='text'
                    placeholder='Usuario'
                    value={email}
                    onChange={handleChangeUsername}></StyledInput>
                <br />
                <StyledInput
                    type='password'
                    placeholder='Contraseña'
                    value={password}
                    onChange={handleChangePassword}></StyledInput>
                <br />
                <SelectInput onChange={handleChangeBackendUrl}>
                    <OptionInput key={defaultSelect} value={plantId}>
                        {defaultSelect}
                    </OptionInput>
                    {
                        plants.map((plant) => (
                            <OptionInput key={plant.name} value={plant.id}>
                                {plant.name}
                            </OptionInput>
                        )
                        )
                    }
                </SelectInput>
                <br />
                <StyledButton type="submit">Ingresar</StyledButton>
                <br />
                {error && 'Error'}
            </StyledForm>
        </StyledMain>
    )
}

export default Login
