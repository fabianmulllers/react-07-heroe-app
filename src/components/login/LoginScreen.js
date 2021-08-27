import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
    
   

    const { user, dispatch } = useContext( AuthContext );


    
    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';
        
        dispatch({
            type: types.login,
            payload:{
                name:'fabian'
            }
        });
        
        history.replace( lastPath );
        
    }

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr/>

            <pre> {  JSON.stringify( user, null,1) }</pre>

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
