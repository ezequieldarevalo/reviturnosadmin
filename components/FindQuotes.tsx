import React, { useState } from 'react'
import styled from 'styled-components'
import useQuotes from '../hooks/useQuotes'
import Spinner from 'react-bootstrap/Spinner'
import Table from './Table'
import { fieldsForSearch } from '../lib/constants'

interface IAdminPageContainer {
    isWaiting?: boolean
}

const AdminPageContainer = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  clear:both;
  float: left;
  ${(props: IAdminPageContainer) => props.isWaiting ? 'text-align:center;' : ''}
  width: 100%;
`

const StyledSelect = styled.select`
  height: 35px;
  background: #122463;
  color: white;
  border-radius: 5px 0 0 5px;
  border: 1px solid white;
  outline: 0;
  width: 100px;
`

const StyledInput1 = styled.input`
  height: 35px;
  width: 170px;
  border-radius: 0 5px 5px 0;
  border: 1px solid black;
  outline: 0;
`

const StyledButton1 = styled.button`
  height: 36.5px;
  color: #122463;
  border: 1px solid #122463;
  background: white;
  border-radius: 5px;
  padding: 5px;
  margin-left: 15px;
`

const FindQuotes = (): JSX.Element => {
    const {
        quotes, loading, inputType, inputText,
        onInputTypeChange, onInputTextChange
    } = useQuotes()
    const [localInputText, setLocalInputText] = useState<string>(inputText)
    const [localInputType, setLocalInputType] = useState<string>(inputType)
    const [lastTimeoutId, setLastTimeoutId] = useState<any>(null)

    const handleInputChange = (e: any): void => {
        setLocalInputText(e.target.value)
        clearTimeout(lastTimeoutId)
        setLastTimeoutId(setTimeout(() => {
            onInputTypeChange(localInputType)
            onInputTextChange(e.target.value)
        }, 1000))
    }

    const handleSelect = (e: any): void => {
        setLocalInputType(e.target.value)
    }
    if (quotes) {
        return (
            <AdminPageContainer>
                <StyledSelect value={localInputType} onChange={handleSelect}>
                    {
                        fieldsForSearch.map((fieldForSearch) =>
                            <option
                                key={fieldForSearch.id}
                                value={fieldForSearch.value}
                                selected={fieldForSearch.value === localInputType}
                            >
                                {fieldForSearch.text}
                            </option>
                        )
                    }
                </StyledSelect>
                <StyledInput1
                    onChange={handleInputChange}
                    value={localInputText}
                />
                <StyledButton1 className='newQuoteButton'>
                    Nuevo turno
                </StyledButton1>

                <Table quotes={quotes} />
            </AdminPageContainer>
        )
    }
    if (loading) {
        return (<AdminPageContainer isWaiting><Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner></AdminPageContainer>)
    }
    return <div></div>
}

export default FindQuotes
