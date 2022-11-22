/* Store */
import { Action, createReducer, on } from "@ngrx/store";

/* Interfaces */
import { AuthStateInterface } from "src/app/auth/types/auth-state.interface";

/* Custom Actions */
import { registerAction, registerActionFailure, registerActionSuccess, switchAuthPage } from "src/app/auth/store/actions/register.action";
import { loginAction, loginActionFailure, loginActionSuccess } from "src/app/auth/store/actions/login.action";
import { getCurrentUserAction, getCurrentUserActionFailure, getCurrentUserActionSuccess } from "src/app/auth/store/actions/get-current-user.action";

const initialState: AuthStateInterface = {
    isSubmitting: false,
    isLoading: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null
}

const authReducer = createReducer(
    initialState,
    on(registerAction, (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),
    on(registerActionSuccess, (state, action) : AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser
    })),
    on(registerActionFailure, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    })),
    on(loginAction, (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),
    on(loginActionSuccess, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser
    })),
    on(loginActionFailure, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    })),
    on(switchAuthPage, (state): AuthStateInterface => ({
        ...state,
        validationErrors: null
    })),
    on(getCurrentUserAction, (state): AuthStateInterface => ({
        ...state,
        isLoading: true
    })),
    on(getCurrentUserActionSuccess, (state, action): AuthStateInterface => ({
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: action.currentUser
    })),
    on(getCurrentUserActionFailure, (state, action): AuthStateInterface => ({
        ...state,
        isLoading: false,
        isLoggedIn: false,
        currentUser: null
    }))
)

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}