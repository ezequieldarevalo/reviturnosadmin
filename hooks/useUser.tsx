import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'

function useUser()  {
    const context = useContext(UserContext);
    if(!context){
        throw new Error('Not user found')
    }
    return context;
}

export default useUser;