import React, { useContext } from 'react'

import { LoginScreen } from '../components/login/LoginScreen';

import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);


    return (
        <Router>
            <div>
                <Switch>

                    <PublicRouter 
                        exact 
                        path="/login" 
                        component={ LoginScreen } 
                        isAuthenticated={ user.logged }
                    />

                    <PrivateRoute 
                        path="/" 
                        component={ DashboardRouter } 
                        isAuthenticated={ user.logged }
                    />

                </Switch>
            </div>
        </Router>
      );
}
