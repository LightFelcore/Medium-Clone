/* Store */
import { Action, createReducer, on } from "@ngrx/store";

/* Interfaces */
import { GlobalFeedStateInterface } from "src/app/global-feed/types/global-feed-state.interface";

/* Custom Actions */
import { getGlobalFeedAction, getGlobalFeedActionSuccess, getGlobalFeedActionFailure } from "src/app/global-feed/store/actions/get-global-feed.actions";

const initialState : GlobalFeedStateInterface = {
    isLoading: false,
    error: null,
    data: null
}

const globalFeedReducer = createReducer(
    initialState,
    on(getGlobalFeedAction, (state: GlobalFeedStateInterface) =>({
        ...state,
        isLoading: true
    })),
    on(getGlobalFeedActionSuccess, (state, action): GlobalFeedStateInterface => ({
        ...state,
        isLoading: false,
        data: action.globalFeed
    })),
    on(getGlobalFeedActionFailure, (state, action): GlobalFeedStateInterface => ({
        ...state,
        isLoading: false,
        error: action.error
    }))
)

export function reducers(state: GlobalFeedStateInterface, action: Action) {
    return globalFeedReducer(state, action);
}
