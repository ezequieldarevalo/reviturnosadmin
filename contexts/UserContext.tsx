import React,{useState, useEffect, useMemo, useCallback} from 'react'
import { getToken, setToken, deleteToken } from '../helpers/ls-auth';
import doSignIn from '../lib/queries/doSignIn';
import getWhoAmI from '../lib/queries/getWhoAmI';
import { useLazyQuery, useMutation, FetchResult } from "@apollo/react-hooks";
import type {SignInResponse, WhoAmIResponse} from '../lib/resolvers'

export const UserContext = React.createContext({
    user: null,
    signIn: (username:string,password:string) => ({}),
    signOut: () => ({})
});

interface GQLSignInResponse {
    SignIn: SignInResponse
}

interface GQLWhoAmIResponse {
    WhoAmI: WhoAmIResponse
}



export function UserProvider(props:any) {
    const [user, setUser] = useState<any>(null);
    const [loadingUser, setLoadingUser] = useState<boolean>(true);

    useEffect(() => {
        async function loadUser() {
            if(!getToken()) {
                setLoadingUser(false);
                return;
            }

            if(!user){
                try {
                    let variables={token: getToken()}
                    return getWho({
                        variables,
                      });
                } catch (error) {
                    console.log(error);
                }
            }
        }
        loadUser();
    }, [])

    const [doSign, { error: errorSignIn, loading: loadingSignIn }] =
    useMutation<GQLSignInResponse>(doSignIn, {
      onError: () => {
        console.log('error');
      },
      onCompleted: (data:GQLSignInResponse) => {
        const {SignIn: user} = data;
        const infoUser = {name: user.username, role: user.role};
        setToken(user.token);
        setUser(infoUser);
      },
      fetchPolicy: 'no-cache',
    });
    const [getWho, { error: errorWhoAmI, loading: loadingWhoAmI }] =
    useLazyQuery<GQLWhoAmIResponse>(getWhoAmI, {
        onError: () => {
          console.log('error');
        },
        onCompleted: (data:GQLWhoAmIResponse) => {
          const {WhoAmI: user} = data;
          const infoUser = {name: user.username, role: user.role};
          setUser(infoUser);
        },
        fetchPolicy: 'no-cache',
      });

    const signIn = useCallback((username:string, password:string) => {
        const variables = {
            username,
            password
        };
        return doSign({
            variables,
          });
    },[]);

    const signOut = useCallback(() => {
        setUser(null);
        deleteToken();
    }, []);

    const value = useMemo(() => {
        return { user, signIn, signOut }
    }, [user, signIn, signOut]);

    return <UserContext.Provider value={value} {...props} />
}

