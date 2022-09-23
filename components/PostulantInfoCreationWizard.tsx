import React from 'react'
import usePostulant from '../hooks/usePostulant'
import ViewWrapper from './layout/structure/ViewWrapper'
import Message from './layout/Message'
import ErrorMessage from './common/error/ErrorMessage'
import SelectDate from './layout/operations/commonViews/SelectDate'
// import SelectVehicleType from '../commonViews/SelectVehicleType'
// import SelectPaymentMethod from './views/SelectPaymentMethod'
// import GivePersonalInfo from './views/GivePersonalInfo'
// import Summary from './views/Summary'
import {
  emptyError,
  IError
} from '../contexts/PostulantContext'
import { getErrorDetails } from '../lib/commonFunctions'
import Done from './layout/operations/commonViews/Done'

const EXISTS_QUOTE_DOMAIN = 'EXISTS_QUOTE_DOMAIN'
const INVALID_EMAIL = 'INVALID_EMAIL'

const PostulantInfoCreationWizard = (): JSX.Element => {
  const { state, error } = usePostulant()

  console.log(state)

  if (error) {
    const errorDetails: IError = getErrorDetails(
      error?.graphQLErrors[0]?.extensions.details || emptyError
    )

    if (
      errorDetails.reason !== EXISTS_QUOTE_DOMAIN &&
      errorDetails.reason !== INVALID_EMAIL
    ) {
      return (
        <ViewWrapper>
          <Message type="ERROR">
            <ErrorMessage />
          </Message>
        </ViewWrapper>
      )
    }
  }

  if (state) {
    return (
          <ViewWrapper>
            <SelectDate />
          </ViewWrapper>
        )
}

  if (state === 'pepe') {
    return (
            <ViewWrapper>
              <Done />
            </ViewWrapper>
          )
  }
  return <div></div>
}

export default PostulantInfoCreationWizard
