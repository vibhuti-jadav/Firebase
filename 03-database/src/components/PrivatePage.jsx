import React, { use } from 'react'
import { Navigate } from 'react-router'
import { auth } from '../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const PrivatePage = ({children}) => {

     const [user] = useAuthState(auth);
    if(!user)
    {
        return <Navigate to={'/login'}/>
    }

    return children

// }
}
export default PrivatePage