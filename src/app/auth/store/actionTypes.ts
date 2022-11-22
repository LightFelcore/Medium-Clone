export enum ActionTypes {
    REGISTER = '[Auth] Register',
    REGISTER_SUCCESS = '[Auth] Register Success',
    REGISTER_FAILURE = '[Auth] Register Failure',

    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',

    SWITCH_AUTH_PAGE = '[Auth] Switch Auth Page',

    GET_CURRENT_USER = '[Auth] Get Current User',
    GET_CURRENT_USER_SUCCESS = '[Auth] Get Current User Success',
    GET_CURRENT_USER_FAILURE = '[Auth] Get Current User Failure',
}