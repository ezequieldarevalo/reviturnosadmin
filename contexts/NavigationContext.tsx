import React, { useState, useMemo, useCallback } from 'react'

export const NavigationContext = React.createContext({
    activeSection: '',
    setNewActiveSection: (section: string) => ({})
})

export interface NavigationContextValue {
    activeSection: string
    setNewActiveSection: (section: string) => void
}

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
export function NavigationProvider(props: any): JSX.Element {
    const [activeSection, setActiveSection] = useState<string>('turnos')

    const setNewActiveSection = useCallback((newSection: string) => {
        setActiveSection(newSection)
    }, [])

    const value = useMemo(() => {
        return {
            activeSection,
            setNewActiveSection
        }
    }, [activeSection, setNewActiveSection])

    return <NavigationContext.Provider value={value} {...props} />
}
