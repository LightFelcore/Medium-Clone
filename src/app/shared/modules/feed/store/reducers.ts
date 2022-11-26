/* Store */
import { Action, createReducer, on } from "@ngrx/store";

/* Interfaces */
import { FeedStateInterface } from "src/app/shared/modules/feed/types/feed-state-interface";

/* Custom Actions */
import { getFeedAction, getFeedActionSuccess, getFeedActionFailure } from "src/app/shared/modules/feed/store/actions/get-feed.actions";

const initialState : FeedStateInterface = {
    isLoading: false,
    error: null,
    data: null
}

const feedReducer = createReducer(
    initialState,
    on(getFeedAction, (state: FeedStateInterface) =>({
        ...state,
        isLoading: true
    })),
    on(getFeedActionSuccess, (state, action): FeedStateInterface => ({
        ...state,
        isLoading: false,
        data: action.feed
    })),
    on(getFeedActionFailure, (state, action): FeedStateInterface => ({
        ...state,
        isLoading: false,
        error: action.error
    }))
)

export function reducers(state: FeedStateInterface, action: Action) {
    return feedReducer(state, action);
}