import React, { useState } from 'react'
import I18n from '../../../common/I18n'
import GreyStepBox from '../../../common/GreyStepBox'
import StepTitle from '../../../common/StepTitle'
// import { capitalizeFirstChar, getStringDate } from '../../../../lib/commonFunctions'
import styled from 'styled-components'
import usePostulant from '../../../../hooks/usePostulant'
import { IJobData } from '../../../../contexts/PostulantContext'

// const RadioSection = styled.div`
//   display: inline-block;
//   margin-right: 20px;
//   font-family: Nunito-SemiBold;
// `

const exampleJob: IJobData = {
  instance: 'primary',
  instituteName: 'Escuela nro. 4',
  degree: 'pepe',
  dateFrom: 'pepe',
  dateTo: 'pepe'
}

const AddJob = styled.div`
`

const EditJob = styled.div`
`

// const RadioSectionLabel = styled.label`
//   margin-right: 4px;
//   display: inline;
//   font-family: Nunito-SemiBold;
// `

// const InputSection = styled.div`
//   display: inline-block;
//   margin-bottom: 10px;
//   margin-left: 10px;
//   :fist-of-type{
//     margin:left: 0;
//   }
//   @media (max-width: 996px) {
//     margin:left: 0;
//   }
// `

// const InputLabel = styled.div`
//   font-family: Nunito-SemiBold;
//   display: inline;
//   margin-right: 10px;
//   font-size: 15px;
// `

// const DateSelected = styled.div`
//   position: relative;
//   font-size: 16px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.69;
//   letter-spacing: -0.24px;
//   color: #000000;
// `

// const ImgContainer = styled.div`
//   margin: 0 auto;
//   border-radius: 8px;
// `

const BtnContainer = styled.div`
  text-align: right;
  font-family: Nunito-SemiBold;
  margin-top: 22px;
  @media (max-width: 996px) {
    margin-top: 33px;
  }
`

const Btn = styled.button`
  padding: 15px 28px 14px 27px;
  border-radius: 2px;
  background-color: '#052c33';
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.15px;
  text-align: center;
  color: #ffffff;
  @media (max-width: 996px) {
    width: 100%;
  }
  :disabled {
    background: grey;
  }
`

const ChooseMessage = styled.div`
  position: relative;
  font-family: Nunito-SemiBold;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: -0.29px;
  color: #000000;
`

// interface TextInputProps {
//   fullWidth?: boolean
//   width?: number
//   boxHeight?: number
//   marginTop?: number
// }

// const TextInput = styled.input`
//   width: ${(props: TextInputProps) =>
//     props.fullWidth ? '100%' : `${props.width ?? 0}px`};
//   font-size: 15px;
//   height: ${(props: TextInputProps) =>
//     props.boxHeight ? `${props.boxHeight}px` : '40px'};
//   border-radius: 2px;
//   border: solid 1px #cccccc;
//   background-color: #ffffff;
//   padding-left: 8px;
// `

function GiveJobsData (): JSX.Element {
  const { studiesData, onModifyStudiesData, personalData, onModifyPersonalData, jobsData, onSubmitJobsData } = usePostulant()

  const [jobsDataList, setJobsDataList] = useState<IJobData[]>(jobsData)
  const [visibleSection, setVisibleSection] = useState<string>('')

  const addJob = (Job: IJobData): void => {
    const newJobList = [...jobsDataList, Job]
    setJobsDataList(newJobList)
  }

  const removeJob = (JobIndex: number): void => {
    const newJobList = [...jobsDataList]
    newJobList.splice(JobIndex, 1)
    setJobsDataList(newJobList)
  }

  const updateJob = (JobIndex: number, JobData: IJobData): void => {
    const newJobList = [...jobsDataList]
    newJobList[JobIndex] = JobData
    setJobsDataList(newJobList)
  }

  // const [email, setLocalEmail] = useState(JobsData.email)
  // const [validEmailFormat, setValidEmailFormat] = useState(false)
  // const [mobilePhone, setMobilePhone] = useState(JobsData.mobilePhone)
  // const [validMobilePhoneFormat, setValidMobilePhoneFormat] = useState(false)
  // const [nationality, setNationality] = useState(JobsData.nationality)
  // const [validNationalityFormat, setValidNationalityFormat] = useState(false)
  // const [name, setName] = useState(JobsData.name)
  // const [validNameFormat, setValidNameFormat] = useState(false)
  // const [maritalStatus, setMaritalStatus] = useState(JobsData.maritalStatus)
  // const [validMaritalStatusFormat, setValidMaritalStatusFormat] = useState(false)

  // const onChangeEmail = (email: string): void => {
  //   if (
  //     /^[-\w.%+]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}$/.test(
  //       email
  //     )
  //   ) { setValidEmailFormat(true) } else setValidEmailFormat(false)
  //   setLocalEmail(email)
  // }

  // const onChangeMobilePhone = (mobilePhone: string): void => {
  //   if (
  //     /^[0-9]{8,16}$/.test(
  //       mobilePhone
  //     )
  //   ) { setValidMobilePhoneFormat(true) } else setValidMobilePhoneFormat(false)
  //   setMobilePhone(mobilePhone)
  // }

  // const onChangeNationality = (nationality: string): void => {
  //   if (
  //     /^[a-zA-Z\s]{3,100}$/.test(
  //       nationality
  //     )
  //   ) { setValidNationalityFormat(true) } else setValidNationalityFormat(false)
  //   setNationality(nationality)
  // }

  // const onChangeName = (name: string): void => {
  //   if (
  //     /^[a-zA-Z\s]{3,100}$/.test(
  //       name
  //     )
  //   ) { setValidNameFormat(true) } else setValidNameFormat(false)
  //   setName(name)
  // }

  // const onChangeMaritalStatus = (maritalStatus: string): void => {
  //   if (
  //     /^(married|single|widower|engaged)$/.test(
  //       maritalStatus
  //     )
  //   ) { setValidMaritalStatusFormat(true) } else setValidMaritalStatusFormat(false)
  //   setMaritalStatus(maritalStatus)
  // }

  return (
    <>
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
      <StepTitle stepNumber={3}>
      <I18n id="app.postulant.personalData.title3" />
      </StepTitle>
      <GreyStepBox>
        <>
          <ChooseMessage>
            <I18n id="app.postulant.personalData.subtitle" />
          </ChooseMessage>
          <div style={{ width: '100%', height: '25px' }}></div>
          {
            jobsDataList.map((JobData: IJobData, index: number) => {
              return (<>
                <div key={index}>
                  indice{index}
                  instancia{JobData.instance}
                </div>
                <button onClick={() => { removeJob(index); setVisibleSection('') }}>
                  Remove
                </button>
              </>
              )
            })
          }
          <br></br>
          <br></br>
          <button onClick={() => setVisibleSection('add')}>
            Add
          </button>
          <button onClick={() => setVisibleSection('edit')}>
            Edit
          </button>
          {visibleSection === 'add' &&
            <AddJob>
              Add Job
              <button onClick={() => addJob(exampleJob)}>
                Add
              </button>
            </AddJob>
          }
          {visibleSection === 'edit' &&
            <EditJob>
              Edit Job
              <button onClick={() => updateJob(2, exampleJob)}>
                Add
              </button>
            </EditJob>
          }
          <BtnContainer>
            <Btn
              disabled={false
                // !validEmailFormat ||
                // !validMobilePhoneFormat ||
                // !validMaritalStatusFormat ||
                // !validNationalityFormat ||
                // !validNameFormat
              }
              onClick={() => onSubmitJobsData(jobsDataList)}
            >
              <I18n id="app.quoteObtaining.schedule.calendar.continue" />
            </Btn>
          </BtnContainer>
        </>
      </GreyStepBox>
    </>
  )
}

export default GiveJobsData
