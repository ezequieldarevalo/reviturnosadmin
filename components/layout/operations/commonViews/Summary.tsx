import React from 'react'
import usePostulant from '../../../../hooks/usePostulant'
import StepTitle from '../../../common/StepTitle'
import GreyStepBox from '../../../common/GreyStepBox'
import I18n from '../../../common/I18n'

const Summary = (): JSX.Element => {
  const { personalData, onModifyPersonalData, studiesData, onModifyStudiesData, jobsData, onModifyJobsData } = usePostulant()
  return (<>
            <StepTitle checked noMargin stepNumber={1}>
        {/* <I18n id="app.quoteObtaining.schedule.calendar.step1.title" /> */}
        <I18n id="app.postulant.personalData.title1" />
      </StepTitle>

      <GreyStepBox withModify={true} modifyFunction={onModifyPersonalData}>
        <div>
          <b><I18n id={'app.postulant.personalData.name.subtitle'} /></b>{' '}
          {personalData.name}
          <br />
          <b><I18n id={'app.postulant.personalData.nationality.subtitle'} /></b>
          <I18n id={`app.postulant.personalData.nationality.${personalData.nationality}.${personalData.gender}`} />
          <br />
          <b><I18n id={'app.postulant.personalData.mobilePhone.subtitle'} /></b>{' '}
          {personalData.mobilePhone}
          <br />
          <b><I18n id={'app.postulant.personalData.maritalStatus.subtitle'} /></b>
          <I18n id={`app.postulant.personalData.maritalStatus.${personalData.maritalStatus}.${personalData.gender}`} />
          <br />
          <b><I18n id={'app.postulant.personalData.gender.subtitle'} /></b>{' '}
          <I18n id={`app.postulant.personalData.gender.${personalData.gender}`} />
        </div>
      </GreyStepBox>
      <StepTitle checked stepNumber={2}>
        {/* <I18n id="app.quoteObtaining.schedule.calendar.step1.title" /> */}
        <I18n id="app.postulant.personalData.title2" />
      </StepTitle>
      <GreyStepBox withModify={true} modifyFunction={onModifyStudiesData}>
        <div>
          STUDIES DATA
        </div>
      </GreyStepBox>
      <StepTitle checked stepNumber={3}>
        {/* <I18n id="app.quoteObtaining.schedule.calendar.step1.title" /> */}
        <I18n id="app.postulant.personalData.title2" />
      </StepTitle>
      <GreyStepBox withModify={true} modifyFunction={onModifyJobsData}>
        <div>
          JOBS DATA
        </div>
      </GreyStepBox>
      <br></br>
      <button>Enviar</button>
  </>

  )
}

export default Summary
