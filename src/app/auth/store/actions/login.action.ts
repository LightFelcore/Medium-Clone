/* Store */
import { createAction, props } from "@ngrx/store";

/* Interfaces */
import { LoginRequestInterface } from "../../types/login-request.interface";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";

/* Types */
import { ActionTypes } from "../actionTypes";

export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{request: LoginRequestInterface}>()
)

export const loginActionSuccess = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{currentUser: CurrentUserInterface}>()
)

export const loginActionFailure = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{errors: BackendErrorsInterface}>()
)

export const switchAuthPage = createAction(
    ActionTypes.SWITCH_AUTH_PAGE
)