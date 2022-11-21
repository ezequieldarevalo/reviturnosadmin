import React from 'react'

import I18n from '../../../components/common/I18n'
import usePostulant from '../../../hooks/usePostulant'
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

function ErrorMessage(): JSX.Element {
  const { error } = usePostulant()

  const errorDetails: IError = getErrorDetails(
    error?.graphQLErrors[0]?.extensions.details || emptyError
  )
  return (
    <>
      <MessageTitle type="ERROR">
        <I18n
          id={`app.quoteObtaining.error.${errorDetails.reason}.title`}
        />
      </MessageTitle>

      <div>
        <I18n
          id={`app.quoteObtaining.error.${errorDetails.reason}.message`}
        />
      </div>
      <br />
    </>
  )
}

export default ErrorMessage
