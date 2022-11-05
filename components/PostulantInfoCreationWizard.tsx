import React from 'react'
import usePostulant from '../hooks/usePostulant'
import ViewWrapper from './layout/structure/ViewWrapper'
import Message from './layout/Message'
import ErrorMessage from './common/error/ErrorMessage'
// import SelectVehicleType from '../commonViews/SelectVehicleType'
// import SelectPaymentMethod from './views/SelectPaymentMethod'
// import GivePersonalInfo from './views/GivePersonalInfo'
// import Summary from './views/Summary'
import {
  emptyError,
  IError
} from '../contexts/PostulantContext'
import { getErrorDetails } from '../lib/commonFunctions'
import GivePersonalData from './layout/operations/commonViews/GivePersonalData'
import GiveStudiesData from './layout/operations/commonViews/GiveStudiesData'
import GiveJobsData from './layout/operations/commonViews/GiveJobsData'
import I18n from './common/I18n'
import Summary from './layout/operations/commonViews/Summary'
import Done from './layout/operations/commonViews/Done'

const EXISTS_QUOTE_DOMAIN = 'EXISTS_QUOTE_DOMAIN'
const INVALID_EMAIL = 'INVALID_EMAIL'

const PostulantInfoCreationWizard = (): JSX.Element => {
  const { error, personalDataCompleted, studiesDataCompleted, jobsDataCompleted } = usePostulant()

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

  if (!personalDataCompleted) {
    return (
          <ViewWrapper name={<I18n id={'app.name'} />}>
            <GivePersonalData />
          </ViewWrapper>
        )
}

if (personalDataCompleted && !studiesDataCompleted) {
  return (
        <ViewWrapper name={<I18n id={'app.name'} />}>
          <GiveStudiesData />
        </ViewWrapper>
      )
}

if (personalDataCompleted && studiesDataCompleted && !jobsDataCompleted) {
  return (
        <ViewWrapper name={<I18n id={'app.name'} />}>
          <GiveJobsData />
        </ViewWrapper>
      )
}

if (personalDataCompleted && studiesDataCompleted && jobsDataCompleted) {
  return (
        <ViewWrapper name={<I18n id={'app.name'} />}>
          <Summary />
        </ViewWrapper>
      )
}

return (
  <ViewWrapper>
    <Done />
  </ViewWrapper>
)
}

export default PostulantInfoCreationWizard
