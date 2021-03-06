import * as actionTypes from './userProfileActions';
import {UserProfileLogout, UserProfileModel} from './userProfileModel'
export const initialState :UserProfileModel = new UserProfileLogout()

const userProfileReducer = (state = initialState, action: UserProfileModel) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            handleLogin(action)
            return action
        case actionTypes.LOGOUT:
            handleLogout()
            return action;
        default:
            return state;
    }
};

const handleLogin = (action: UserProfileModel) => {
    if(action.token){
        localStorage.setItem('token', action.token)
    }
}
const handleLogout = () => {
    localStorage.removeItem('token')
}

export default userProfileReducer;
