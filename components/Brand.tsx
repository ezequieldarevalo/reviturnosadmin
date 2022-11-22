import React from 'react'
import styled from 'styled-components'
import Truck from './common/icons/Truck'

const BrandContainer = styled.div`
    float: left;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 32px;
    font-weight: bold;
`

const Brand = (): JSX.Element => {
  return (
    <BrandContainer>
      <Truck />
      &nbsp;
      REVITURNOS
    </BrandContainer>
  )
}

export default Brand
