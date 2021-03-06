import { lazy } from 'react';

// project imports
import Loadable from '../ui-component/Loadable';
import MinimalLayout from '../layout/MinimalLayout';
import RestrictAuthorizedUser from "../authentication/RestrictAuthorizedUser";
import RedirectionPage from "../views/redirection";

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('../views/pages/authentication/authentication3/Login3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout/>,
    children: [
        {
            path: '/pages/login',
            element: <RestrictAuthorizedUser><AuthLogin3/></RestrictAuthorizedUser>
        },
        {
            path: '/redirection',
            element: <RedirectionPage/>
        }
    ]
};

export default AuthenticationRoutes;
