/* Custom Actions */
import { createAction, props } from "@ngrx/store";

/* Types */
import { ActionTypes } from "../actionTypes";

/* Interfaces */
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";

export const getCurrentUserAction = createAction(
    ActionTypes.GET_CURRENT_USER,
)

export const getCurrentUserActionSuccess = createAction(
    ActionTypes.GET_CURRENT_USER_SUCCESS,
    props<{currentUser: CurrentUserInterface}>()
)

export const getCurrentUserActionFailure = createAction(
    ActionTypes.GET_CURRENT_USER_FAILURE,
)