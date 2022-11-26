/* Store */
import { createAction, props } from "@ngrx/store";

/* Action Types */
import { ActionTypes } from "src/app/shared/modules/feed/store/actionTypes";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";

/* Interfaces */
import { GetFeedResponseInterface } from "src/app/shared/modules/feed/types/get-feed-response.interface";

// Action to obtain the feeds from the backend, by passing API url as param - 15.00
export const getFeedAction = createAction(
    ActionTypes.GET_FEED,
    props<{ url: string }>()
)

export const getFeedActionSuccess = createAction(
    ActionTypes.GET_FEED_SUCCESS,
    props<{ feed: GetFeedResponseInterface }>()
)

export const getFeedActionFailure = createAction(
    ActionTypes.GET_FEED_FAILURE,
    props<{ error: BackendErrorsInterface }>()
)