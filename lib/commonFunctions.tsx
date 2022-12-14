import { IError } from '../contexts/PostulantContext'

export const getStringDate = (date: string): string => {
  const day = new Date(date)
  return new Intl.DateTimeFormat('es-AR', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  })
    .format(day)
    .replace(/,/g, '')
}

export const getStringTime = (time: string): string => {
  return time.substr(0, 5)
}

export const getStringDateWithYear = (date: string): string => {
  const day = new Date(date)
  return new Intl.DateTimeFormat('es-AR', {
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    day: 'numeric'
  })
    .format(day)
    .replace(/,/g, '')
}

export function capitalizeFirstChar (str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const DEFAULT_VALUE = 'default'

export function getErrorDetails (error: IError): IError {
  return {
    reason: error.reason || DEFAULT_VALUE
  }
}
