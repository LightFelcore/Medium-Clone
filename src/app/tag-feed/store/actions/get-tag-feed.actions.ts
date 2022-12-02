/* Store */
import { createAction, props } from "@ngrx/store";

/* Action Types */
import { ActionTypes } from "src/app/tag-feed/store/actionTypes";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";

/* Interfaces */
import { GetTagFeedResponseInterface } from "src/app/tag-feed/types/get-tag-feed-response.interface";

// Action to obtain the global feeds from the backend, by passing API url as param
export const getTagFeedAction = createAction(
    ActionTypes.GET_TAG_FEED,
    props<{ url: string }>()
)

export const getTagFeedActionSuccess = createAction(
    ActionTypes.GET_TAG_FEED_SUCCESS,
    props<{ tagFeed: GetTagFeedResponseInterface }>()
)

export const getTagFeedActionFailure = createAction(
    ActionTypes.GET_TAG_FEED_FAILURE,
    props<{ error: BackendErrorsInterface }>()
)