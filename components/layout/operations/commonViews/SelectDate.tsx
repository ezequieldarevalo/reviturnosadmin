import React from 'react'
// import usePostulant from '../../../../hooks/usePostulant'
// import Message from '../../../../components/layout/Message'
// import I18n from '../../../../components/common/I18n'
import styled from 'styled-components'
import StepTitle from '../../../../components/common/StepTitle'
// import Calendar from '../../../../components/common/Calendar'
// import { getStringDate, getStringTime } from '../../../../lib/commonFunctions'
import GreyStepBox from '../../../../components/common/GreyStepBox'

// const MessageTitle = styled.p`
//   color: #d68227;
//   font-family: Nunito-Bold;
//   font-size: 18px;
// `

// const MessageContent = styled.div`
//   padding-top: 10px;
//   padding-bottom: 20px;
//   font-family: Nunito-Regular;
//   font-size: 15px;
// `
const DateSelected = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.69;
  letter-spacing: -0.24px;
  color: #000000;
`

// interface IMessagesList {
//   id: number
//   content: string
// }

// const getChooseQuoteMessages = (plant: string): IMessagesList[] => {
//   if (plant === 'sanmartin') { return [{ id: 1, content: 'app.quoteObtaining.warning.sanmartin.chooseQuote.message1' }] }
//   return [
//     { id: 1, content: `app.quoteObtaining.warning.${plant}.chooseQuote.message1` },
//     { id: 2, content: `app.quoteObtaining.warning.${plant}.chooseQuote.message2` },
//     { id: 3, content: `app.quoteObtaining.warning.${plant}.chooseQuote.message3` }
//   ]
// }

// const chooseQuoteMessages_sanmartin = [
//   { id: 1, content: 'app.quoteObtaining.warning.chooseQuote.message1' },
//   { id: 2, content: 'app.quoteObtaining.warning.chooseQuote.message2' },
//   { id: 3, content: 'app.quoteObtaining.warning.chooseQuote.message3' }
// ]

// const changeDateMessages = [
//   { id: 1, content: 'app.quoteObtaining.warning.changeDate.message1' }
// ]

const SelectDate = (): JSX.Element => {
//   const { } = usePostulant()

//   const getWarningLinesByOperation = (operation: string): IMessagesList[] => {
//     if (operation === 'chooseQuote') return getChooseQuoteMessages(plant)
//     else return changeDateMessages
//   }

//   const warningLines = getWarningLinesByOperation(operation)

  return (
    <>
      {/* <Message type={"WARNING"}>
        <MessageTitle>
          <I18n id="app.quoteObtaining.warning.title" />
        </MessageTitle>
        <MessageContent>
          {operation === "changeDate" && (
            <p>
              <I18n id="app.quoteObtaining.warning.chooseQuotes.quoteDate" />
              <b>{" " + getStringDate(quotes.fecha)}</b>
              {" "}
              <I18n id="app.quoteObtaining.warning.chooseQuotes.atTime" />
              {" "}
              <b>{getStringTime(quotes.hora) + "hs."}</b>
            </p>
          )}
          {warningLines.map((line: IMessagesList) => {
            return (
              <p key={line.id}>
                <I18n id={line.content} />
              </p>
            );
          })}
        </MessageContent>
      </Message> */}
      <StepTitle stepNumber={1} checked noMargin>
        {/* <I18n id="app.quoteObtaining.schedule.calendar.step1.title" /> */}
        pepe1
      </StepTitle>
      <GreyStepBox withModify={true} modifyFunction={() => ({})}>
        <DateSelected>
          Pepe
        </DateSelected>
      </GreyStepBox>
      <StepTitle stepNumber={2}>
        {/* <I18n id="app.quoteObtaining.schedule.calendar.step2.title" /> */}
        pepe2
      </StepTitle>
      {/* <Calendar /> */}
    </>
  )
}

export default SelectDate
