import React, { useState } from 'react'
import I18n from '../../../common/I18n'
import GreyStepBox from '../../../common/GreyStepBox'
import StepTitle from '../../../common/StepTitle'
// import { capitalizeFirstChar, getStringDate } from '../../../../lib/commonFunctions'
import styled from 'styled-components'
import usePostulant from '../../../../hooks/usePostulant'
import { IStudyData } from '../../../../contexts/PostulantContext'

const exampleStudy = {

}

// const RadioSection = styled.div`
//   display: inline-block;
//   margin-right: 20px;
//   font-family: Nunito-SemiBold;
// `

const InputSection = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 10px;
  :fist-of-type{
    margin:left: 0;
  }
  @media (max-width: 996px) {
    margin:left: 0;
  }
`

interface TextInputProps {
  fullWidth?: boolean
  width?: number
  boxHeight?: number
  marginTop?: number
}

const TextInput = styled.input`
  width: ${(props: TextInputProps) =>
    props.fullWidth ? '100%' : `${props.width ?? 0}px`};
  font-size: 15px;
  height: ${(props: TextInputProps) =>
    props.boxHeight ? `${props.boxHeight}px` : '40px'};
  border-radius: 2px;
  border: solid 1px #cccccc;
  background-color: #ffffff;
  padding-left: 8px;
`

const InputLabel = styled.label`
  font-family: Nunito-SemiBold;
  display: inline;
  margin-right: 10px;
  font-size: 15px;

const exampleStudy: IStudyData = {
  instance: 'primary',
  instituteName: 'Escuela nro. 4',
  degree: 'pepe',
  dateFrom: 'pepe',
  dateTo: 'pepe'
}
`
const AddStudy = styled.div``

const EditStudy = styled.div``

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

function GiveStudiesData(): JSX.Element {
  const { personalData, studiesData, onSubmitStudiesData, onModifyPersonalData } = usePostulant()

  const [studiesDataList, setStudiesDataList] = useState<IStudyData[]>(studiesData)
  const [visibleSection, setVisibleSection] = useState<string>('')

  const addStudy = (study: IStudyData): void => {
    const newStudyList = [...studiesDataList, study]
    setStudiesDataList(newStudyList)
  }

  const removeStudy = (studyIndex: number): void => {
    const newStudyList = [...studiesDataList]
    newStudyList.splice(studyIndex, 1)
    setStudiesDataList(newStudyList)
  }

  const updateStudy = (studyIndex: number, studyData: IStudyData): void => {
    const newStudyList = [...studiesDataList]
    newStudyList[studyIndex] = studyData
    setStudiesDataList(newStudyList)
  }

  // const [email, setLocalEmail] = useState(studiesData.email)
  // const [validEmailFormat, setValidEmailFormat] = useState(false)
  // const [mobilePhone, setMobilePhone] = useState(studiesData.mobilePhone)
  // const [validMobilePhoneFormat, setValidMobilePhoneFormat] = useState(false)
  // const [nationality, setNationality] = useState(studiesData.nationality)
  // const [validNationalityFormat, setValidNationalityFormat] = useState(false)
  // const [name, setName] = useState(studiesData.name)
  // const [validNameFormat, setValidNameFormat] = useState(false)
  // const [maritalStatus, setMaritalStatus] = useState(studiesData.maritalStatus)
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

  // const handleAddStudy = () => {
  //   addStudy(exampleStudy)

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
      <StepTitle stepNumber={2}>
        <I18n id="app.postulant.personalData.title2" />
      </StepTitle>
      <GreyStepBox>
        <>
          <ChooseMessage>
            <I18n id="app.postulant.personalData.subtitle2" />
          </ChooseMessage>
          <div style={{ width: '100%', height: '25px' }}></div>
          {
            studiesDataList.map((studyData: IStudyData, index: number) => {
              return (<>
                <div key={index}>
                  indice{index}
                  instancia{studyData.instance}
                </div>
                <button onClick={() => { removeStudy(index); setVisibleSection('') }}>
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
            <AddStudy>
              Add study
              <button>
                <InputSection>
                  <InputLabel>
                    <I18n id="app.postulant.personalData.subtitle.name" />
                  </InputLabel>
                  <TextInput
                    value={name}
                    onChange={(e) => onChangeName(e.target.value)}
                    width={250}
                  ></TextInput>
                </InputSection>
              </button>
            </AddStudy>
          }
          {visibleSection === 'edit' &&
            <EditStudy>
              Edit study
              <button onClick={() => updateStudy(2, exampleStudy)}>
                Add
              </button>
            </EditStudy>
          }
          <BtnContainer>
            <Btn
              disabled={studiesDataList.length < 1}
              onClick={() => onSubmitStudiesData(studiesDataList)}
            >
              <I18n id="app.postulant.personalData.button.continue" />
            </Btn>
          </BtnContainer>
        </>
      </GreyStepBox>
    </>
  )
}

export default GiveStudiesData
