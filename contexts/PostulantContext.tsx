import React, { useState, useMemo, useCallback } from 'react'
import { useQuery } from '@apollo/client'
import getPostulantState from '../lib/queries/getPostulantState'
import LoaderOverlay from '../components/LoaderOverlay'
import styled from 'styled-components'
import { getToken } from '../helpers/ls-auth'
import { ApolloError } from 'apollo-server-micro'

export interface IError {
  saleChannel?: string
  reason: string
  date?: string
  shift?: string
  canRetry?: boolean
}

export const emptyError: IError = {
  reason: 'default'
}

const LoadingContainer = styled.div`
  min-height: 290px;
`

export const PostulantContext = React.createContext({
state: ''
})

export interface PostulantContextValue {
  state: string
  personalData: IPersonalData
  studiesData: IStudyData[]
  jobsData: IJobData[]
  error: ApolloError
  personalDataCompleted: boolean
  studiesDataCompleted: boolean
  jobsDataCompleted: boolean
  onSubmitPersonalData: (
    email: string,
    name: string,
    nationality: string,
    mobilePhone: string,
    maritalStatus: string,
    gender: string) => void
  onModifyPersonalData: () => void
  onSubmitStudiesData: (studiesData: IStudyData[]) => void
  onModifyStudiesData: () => void
  onSubmitJobsData: (josData: IJobData[]) => void
  onModifyJobsData: () => void
}

interface IPostulantProvider {
    id: string
    children: JSX.Element
}

interface IPersonalData {
  email: string
  name: string
  nationality: string
  mobilePhone: string
  maritalStatus: string
  gender: string
  // birthDate: string
}

export interface IStudyData {
  instance: string
  instituteName: string
  degree: string
  dateFrom: string
  dateTo: string
}

export interface IJobData {
  instance: string
  instituteName: string
  degree: string
  dateFrom: string
  dateTo: string
}

const emptyPersonalData = {
  email: '',
  name: '',
  nationality: '',
  mobilePhone: '',
  maritalStatus: '',
  gender: ''
  // birthDate: ''
}

const emptyStudiesData: IStudyData[] = []
const emptyJobsData: IJobData[] = []

export function PostulantProvider ({ id, children }: IPostulantProvider): JSX.Element {
  const [state] = useState<string>('')
  const [personalData, setPersonalData] = useState<IPersonalData>(emptyPersonalData)
  const [studiesData, setStudiesData] = useState<IStudyData[]>(emptyStudiesData)
  const [jobsData, setJobsData] = useState<IJobData[]>(emptyJobsData)
  const [personalDataCompleted, setPersonalDataCompleted] = useState<boolean>(false)
  const [studiesDataCompleted, setStudiesDataCompleted] = useState<boolean>(false)
  const [jobsDataCompleted, setJobsDataCompleted] = useState<boolean>(false)

  const {
    loading: loadingQuery,
    error,
    data
  } = useQuery(getPostulantState, { variables: { id, token: getToken() } })

  const onSubmitPersonalData = useCallback((
    email: string,
    name: string,
    nationality: string,
    mobilePhone: string,
    maritalStatus: string,
    gender: string
    ) => {
      const newPersonalData = {
        email,
        name,
        nationality,
        mobilePhone,
        maritalStatus,
        gender
      }
    setPersonalData(newPersonalData)
    setPersonalDataCompleted(true)
  }, [])

  const onSubmitStudiesData = useCallback((
studiesData: IStudyData[]
    ) => {
    setStudiesData(studiesData)
    setStudiesDataCompleted(true)
  }, [])

  const onSubmitJobsData = useCallback((
    jobsData: IStudyData[]
        ) => {
        setJobsData(jobsData)
        setJobsDataCompleted(true)
      }, [])

  const onModifyPersonalData = useCallback(() => {
    setPersonalDataCompleted(false)
  }, [])

  const onModifyStudiesData = useCallback(() => {
    setStudiesDataCompleted(false)
  }, [])

  const onModifyJobsData = useCallback(() => {
    setJobsDataCompleted(false)
  }, [])

  const value = useMemo(() => {
    return {
        state: data?.PostulantState?.state,
        personalData,
        studiesData,
        jobsData,
        error,
        loadingQuery,
        personalDataCompleted,
        studiesDataCompleted,
        jobsDataCompleted,
        onSubmitPersonalData,
        onModifyPersonalData,
        onSubmitStudiesData,
        onModifyStudiesData,
        onSubmitJobsData,
        onModifyJobsData
    }
  },
  [
    state,
    error,
    loadingQuery,
    personalData,
    studiesData,
    jobsData,
    personalDataCompleted,
    studiesDataCompleted,
    jobsDataCompleted,
    onSubmitPersonalData,
    onModifyPersonalData,
    onSubmitStudiesData,
    onModifyStudiesData,
    onSubmitJobsData,
    onModifyJobsData
  ])

  if (loadingQuery) {
    return (
        <LoaderOverlay loading noBackground>
          <LoadingContainer />
        </LoaderOverlay>
      )
    }

  return (<PostulantContext.Provider value={value}>
    {children}
  </PostulantContext.Provider>)
}
