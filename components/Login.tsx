import React, { useState } from 'react'
import styled from 'styled-components'
import useUser from '../hooks/useUser'
import plants from '../lib/config/plants'
import { Alert, Button, Form, Card } from 'react-bootstrap'
import ErrorMessage from './common/error/ErrorMessage'
import LogIn from './common/icons/LogIn'

const defaultSelect = 'Seleccione su planta'

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: #111831;
    align-items: center;
`

const Login = (): JSX.Element => {
    const { error, signIn, loading, doRestartError } = useUser()
    const [email, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [plantId, setPlantId] = useState<string>('')

    const handleChangeUsername = (e: any): void => {
        doRestartError()
        setUsername(e.target.value)
    }

    const handleChangePassword = (e: any): void => {
        doRestartError()
        setPassword(e.target.value)
    }

    const handleChangeBackendUrl = (e: any): void => {
        doRestartError()
        setPlantId(e.target.value)
    }

    const handleSubmit = (e: any): void => {
        e.preventDefault()
        signIn(email, password, plantId)
    }

    return (
        <StyledMain>
            <Card>

                <Card.Body>
                    <Card.Title>REVITURNOS - Inicio de sesión</Card.Title>
                    <Card.Text>
                        <Form onSubmit={handleSubmit}>
                            {/* <Input
                    type='text'
                    placeholder='Usuario'
                    value={email}
                    onChange={handleChangeUsername}></Input>
                <br /> */}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control onChange={handleChangeUsername} value={email} type="email" placeholder="Ingrese usuario" />
                            </Form.Group>
                            {/* <StyledInput
                    type='password'
                    placeholder='Contraseña'
                    value={password}
                    onChange={handleChangePassword}></StyledInput> */}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control onChange={handleChangePassword} value={password} type="password" placeholder="Ingrese contraseña" />
                            </Form.Group>
                            <hr />
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Select onChange={handleChangeBackendUrl}>
                                    <option key={defaultSelect} value={plantId}>
                                        {defaultSelect}
                                    </option>
                                    {
                                        plants.map((plant) => (
                                            <option key={plant.name} value={plant.id}>
                                                {plant.name}
                                            </option>
                                        )
                                        )
                                    }
                                </Form.Select>
                            </Form.Group>
                            <div style={{ textAlign: 'center' }}>
                                <Button
                                    type="submit"
                                    variant={'outline-dark'}
                                    disabled={loading}>
                                    Ingresar
                                    &nbsp;
                                    <LogIn />
                                </Button>
                            </div>

                            {error && <>
                                <br />
                                <Alert key={'danger'} variant={'danger'}>
                                    <ErrorMessage />
                                </Alert>
                            </>}
                        </Form>
                    </Card.Text>

                </Card.Body>

            </Card>

        </StyledMain >
    )
}

export default Login
