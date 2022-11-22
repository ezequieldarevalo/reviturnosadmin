import React from 'react'

import I18n from '../../../components/common/I18n'
import useUser from '../../../hooks/usePostulant'
// import { getStringDate, getErrorDetails } from "../../../lib/commonFunctions";
import { getErrorDetails } from '../../../lib/commonFunctions'
import {
  IError,
  emptyError
} from '../../../contexts/PostulantContext'
import { MessageTitle } from '../styles/UtilsStyles'

// const SCHEDULED = "SCHEDULED";
// const BAD_REQUEST = "BAD_REQUEST";
// const INTERNAL_ERROR_SERVER = "INTERNAL_ERROR_SERVER";
// const DEFAULT_VALUE = "default";
// const UNKNOWN_ERROR = "UNKNOWN_ERROR";

const ErrorMessage = (): JSX.Element => {
  const { error } = useUser()

  const errorDetails: IError = getErrorDetails(
    error?.graphQLErrors[0]?.extensions.details || emptyError
  )
  return (
    <>
      <MessageTitle type="ERROR">
        <I18n
          id={`app.quotes.error.${errorDetails.reason}.title`}
        />
      </MessageTitle>

      <div style={{ color: '#b80000' }}>
        <I18n
          id={`app.quotes.error.${errorDetails.reason}.message`}
        />
      </div>
    </>
  )
}

export default ErrorMessage
