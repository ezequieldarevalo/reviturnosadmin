import React,{useEffect, useMemo} from 'react'

export const UserContext = React.createContext({
    pepe: ''
});

export function UserProvider(props:any) {
    // const [user, setUser] = useState(null);
    // const [loadingUser, setLoadingUser] = useState(null);

    // useEffect(() => {
    //     async function loadUser() {
    //         if(!getToken()) {
    //             setLoadingUser(false);
    //             return;
    //         }

    //         try {
    //             const {data: user} = await fetch('/api/')
    //         } catch (error) {
                
    //         }
    //     }
    // })
    useEffect(() => {
        console.log('pepe');
    })

    const value = useMemo(() => {
        return { pepe: 'pepe' }
    }, []);

    return <UserContext.Provider value={value} {...props} />
}

