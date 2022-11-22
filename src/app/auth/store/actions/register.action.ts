/* Store */
import { createAction, props } from "@ngrx/store";

/* Types */
import { ActionTypes } from 'src/app/auth/store/actionTypes';

/* Interfaces */
import { RegisterRequestInterface } from "src/app/auth/types/register-request.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{ request: RegisterRequestInterface }>()
)

export const registerActionSuccess = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>()
)

export const registerActionFailure = createAction(
    ActionTypes.REGISTER_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
)

export const switchAuthPage = createAction(
    ActionTypes.SWITCH_AUTH_PAGE
)