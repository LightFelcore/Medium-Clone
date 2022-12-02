/* Store */
import { createAction, props } from "@ngrx/store";

/* Action Types */
import { ActionTypes } from "src/app/your-feed/store/actionTypes";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";

/* Interfaces */
import { GetYourFeedResponseInterface } from "src/app/your-feed/types/get-your-feed-response.interface";

// Action to obtain the global feeds from the backend, by passing API url as param
export const getYourFeedAction = createAction(
    ActionTypes.GET_YOUR_FEED,
    props<{ url: string }>()
)

export const getYourFeedActionSuccess = createAction(
    ActionTypes.GET_YOUR_FEED_SUCCESS,
    props<{ yourFeed: GetYourFeedResponseInterface }>()
)

export const getYourFeedActionFailure = createAction(
    ActionTypes.GET_YOUR_FEED_FAILURE,
    props<{ error: BackendErrorsInterface }>()
)