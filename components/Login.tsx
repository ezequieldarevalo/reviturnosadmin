import React, { useState } from 'react'
import styled from 'styled-components'
import useUser from '../hooks/useUser'
import plants from '../lib/config/plants'
import { Alert, Button, Form, Card, InputGroup } from 'react-bootstrap'
import ErrorMessage from './common/error/ErrorMessage'
import LogIn from './common/icons/LogIn'
import Person from './common/icons/Person'
import Key from './common/icons/Key'
import Truck from './common/icons/Truck'

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
        // e.preventDefault()
        signIn(email, password, plantId)
    }

    return (
        <StyledMain>
            <Card>
                <Card.Header style={{ fontSize: '28px' }}><Truck />&nbsp;&nbsp;REVITURNOS&nbsp;&nbsp;<span style={{ fontSize: '20px' }}>Admin</span></Card.Header>
                <Card.Body>
                    <Card.Title>Inicio de sesión</Card.Title>
                    <Card.Text>
                        <Form >
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><Person /></InputGroup.Text>
                                <Form.Control
                                    onChange={handleChangeUsername}
                                    value={email}
                                    placeholder="Usuario"
                                    aria-label="Usuario"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><Key /></InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    onChange={handleChangePassword}
                                    value={password}
                                    placeholder="Contraseña"
                                    aria-label="Contraseña"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
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
                                    type="button"
                                    variant={'outline-dark'}
                                    onClick={handleSubmit}
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
