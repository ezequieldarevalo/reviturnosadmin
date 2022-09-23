import React from 'react'
import {
  MainContainer,
  MainFlexContainer,
  MainTitle,
  ScheduleContainer
} from '../../common/styles/MainStyles'

interface ViewWrapperProps {
  children: JSX.Element
  name?: JSX.Element
}

function ViewWrapper ({ children, name }: ViewWrapperProps): JSX.Element {
  return (
    <MainContainer>
      <MainTitle>
        {name}
      </MainTitle>
      <MainFlexContainer>
        <ScheduleContainer>{children}</ScheduleContainer>
      </MainFlexContainer>
    </MainContainer>
  )
}

export default ViewWrapper
