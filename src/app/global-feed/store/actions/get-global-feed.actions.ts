/* Store */
import { createAction, props } from "@ngrx/store";

/* Action Types */
import { ActionTypes } from "src/app/global-feed/store/actionTypes";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";

/* Interfaces */
import { GetGlobalFeedResponseInterface } from "src/app/global-feed/types/get-global-feed-response.interface";

// Action to obtain the global feeds from the backend, by passing API url as param
export const getGlobalFeedAction = createAction(
    ActionTypes.GET_GLOBAL_FEED,
    props<{ url: string }>()
)

export const getGlobalFeedActionSuccess = createAction(
    ActionTypes.GET_GLOBAL_FEED_SUCCESS,
    props<{ globalFeed: GetGlobalFeedResponseInterface }>()
)

export const getGlobalFeedActionFailure = createAction(
    ActionTypes.GET_GLOBAL_FEED_FAILURE,
    props<{ error: BackendErrorsInterface }>()
)