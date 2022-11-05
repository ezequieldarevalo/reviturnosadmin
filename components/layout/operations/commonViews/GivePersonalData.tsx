import React, { useEffect, useState } from 'react'
import I18n from '../../../common/I18n'
import GreyStepBox from '../../../common/GreyStepBox'
import StepTitle from '../../../common/StepTitle'
// import { capitalizeFirstChar, getStringDate } from '../../../../lib/commonFunctions'
import styled from 'styled-components'
import usePostulant from '../../../../hooks/usePostulant'
import { maritalStatusList, genderList, nationalityList } from '../../../../lib/constants'

import dayjs, { Dayjs } from 'dayjs'
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'

import { FormControl, Select, MenuItem, InputLabel, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'

const RadioSection = styled.div`
  display: inline-block;
  margin-right: 20px;
  font-family: Nunito-SemiBold;
`

const RadioSectionLabel = styled.label`
  margin-right: 4px;
  display: inline;
  font-family: Nunito-SemiBold;
`

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

function GivePersonalData(): JSX.Element {
  const { personalData, onSubmitPersonalData, personalDataCompleted } = usePostulant()

  const [email, setLocalEmail] = useState(personalData.email)
  const [validEmailFormat, setValidEmailFormat] = useState(false)
  const [mobilePhone, setMobilePhone] = useState(personalData.mobilePhone)
  const [validMobilePhoneFormat, setValidMobilePhoneFormat] = useState(false)
  const [nationality, setNationality] = useState(personalData.nationality)
  const [name, setName] = useState(personalData.name)
  const [validNameFormat, setValidNameFormat] = useState(false)
  const [maritalStatus, setMaritalStatus] = useState(personalData.maritalStatus)
  const [validMaritalStatusFormat, setValidMaritalStatusFormat] = useState(false)
  const [gender, setGender] = useState(personalData.gender)
  const [validGenderFormat, setValidGenderFormat] = useState(false)
  // const [birthDate, setBirthDate] = useState(personalData.birthDate)
  // const [validBirthDateFormat, setValidBirthDateFormat] = useState(false)

  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54')
  )

  const handleChange = (newValue: Dayjs | null): void => {
    setValue(newValue)
  }

  useEffect(() => {
    console.log()
  })

  useEffect(() => {
    onChangeEmail(personalData.email)
    onChangeMobilePhone(personalData.mobilePhone)
    setNationality(personalData.nationality)
    onChangeName(personalData.name)
    onChangeMaritalStatus(personalData.maritalStatus)
    onChangeGender(personalData.gender)
  }, [personalDataCompleted])

  const isContinueButtonDisabled = (): boolean => {
    return !validEmailFormat ||
      !validMobilePhoneFormat ||
      !validMaritalStatusFormat ||
      !validNameFormat
  }

  const onChangeEmail = (email: string): void => {
    if (
      /^[-\w.%+]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}$/.test(
        email
      )
    ) { setValidEmailFormat(true) } else setValidEmailFormat(false)
    setLocalEmail(email)
  }

  const onChangeMobilePhone = (mobilePhone: string): void => {
    if (
      /^[0-9]{8,16}$/.test(
        mobilePhone
      )
    ) { setValidMobilePhoneFormat(true) } else setValidMobilePhoneFormat(false)
    setMobilePhone(mobilePhone)
  }

  // const onChangeNationality = (event: React.ChangeEvent<HTMLSelectElement>): void => {
  //   const safeSearchTypeValue: string = event.currentTarget?.value || ''
  //   setNationality(safeSearchTypeValue)
  // }

  const handleChangeNationality = (e: any): void => setNationality(e.target.value)
  const handleChangeGender = (e: any): void => setGender(e.target.value)

  const onChangeName = (name: string): void => {
    if (
      /^[a-zA-Z\s]{3,100}$/.test(
        name
      )
    ) { setValidNameFormat(true) } else setValidNameFormat(false)
    setName(name)
  }

  const onChangeMaritalStatus = (maritalStatus: string): void => {
    if (
      /^(married|single|widower|engaged)$/.test(
        maritalStatus
      )
    ) { setValidMaritalStatusFormat(true) } else setValidMaritalStatusFormat(false)
    setMaritalStatus(maritalStatus)
  }

  const onChangeGender = (gender: string): void => {
    if (
      /^(m|f)$/.test(
        gender
      )
    ) { setValidGenderFormat(true) } else setValidGenderFormat(false)
    setGender(gender)
  }

  return (
    <><LocalizationProvider dateAdapter={AdapterDayjs}>
      <StepTitle
        stepNumber={1}
      >
        <I18n id="app.postulant.personalData.title1" />
      </StepTitle>

      <GreyStepBox>
        <>
          <ChooseMessage>
            <I18n id="app.postulant.personalData.subtitle1" />
          </ChooseMessage>
          <div style={{ width: '100%', height: '25px' }}></div>
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
          <InputSection>

            <MobileDatePicker
              label={<I18n id="app.postulant.personalData.dateOfBirth.subtitle" />}
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </InputSection>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              <I18n id="app.postulant.personalData.subtitle.gender" />
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              value={gender}
              onChange={handleChangeGender}
            >
              {genderList.map((gender, key) => (
                <FormControlLabel key={key} value={gender} control={<Radio />} label={<I18n id={`app.postulant.personalData.gender.${gender}`} />} />
              ))}
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              <I18n id="app.postulant.personalData.nationality.subtitle" />
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={nationality}
              label={<I18n id="app.postulant.personalData.nationality.subtitle" />}
              onChange={handleChangeNationality}
            >
              {nationalityList.map((nationality, index) => {
                return <MenuItem key={index} value={nationality}><I18n id={`app.postulant.personalData.nationality.${nationality}.${gender || 'm'}`} /></MenuItem>
              })}
            </Select>
          </FormControl>
          <InputSection>
            <InputLabel>
              Email:
            </InputLabel>
            <TextInput
              value={email}
              onChange={(e) => onChangeEmail(e.target.value)}
              width={250}
            ></TextInput>
          </InputSection>
          <InputSection>
            <InputLabel>
              Telefono:
            </InputLabel>
            <TextInput
              type="number"
              value={mobilePhone}
              onChange={(e) => onChangeMobilePhone(e.target.value)}
              width={250}
            ></TextInput>
          </InputSection>
          <br />
          <InputSection>
            <InputLabel>
              MaritalStatus:
            </InputLabel>
            {
              // eslint-disable-next-line array-callback-return
              maritalStatusList.map((maritalStatus, key) => {
                const checked = false
                if (maritalStatus) {
                  return (
                    <RadioSection key={key}>
                      <RadioSectionLabel htmlFor={maritalStatus}><I18n id={`app.postulant.personalData.maritalStatus.${maritalStatus}.${gender || 'm'}`} /></RadioSectionLabel>
                      <input onClick={() => onChangeMaritalStatus(maritalStatus)} type="radio" id={maritalStatus} name="maritalStatus" value={maritalStatus} checked={checked}>
                      </input>
                    </RadioSection>
                  )
                }
              })}
          </InputSection>
          <BtnContainer>
            <Btn
              disabled={isContinueButtonDisabled()}
              onClick={() => onSubmitPersonalData(
                email,
                name,
                nationality,
                mobilePhone,
                maritalStatus,
                gender
              )}
            >
              <I18n id="app.postulant.personalData.button.continue" />
            </Btn>
          </BtnContainer>
        </>
      </GreyStepBox>
    </LocalizationProvider>
    </>
  )
}

export default GivePersonalData
