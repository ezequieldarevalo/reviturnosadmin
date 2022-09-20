import React from 'react'
import useUser from '../hooks/useUser';

const LogOutSection = () => {
    const {user, signOut } = useUser();
    return (
    <div>
        {user.name}
        <button onClick={() => signOut()} type="button">
            Log Out
        </button>
    </div>
    )
}

export default LogOutSection;