/* Store */
import { Action, createReducer, on } from "@ngrx/store";

/* Interfaces */
import { YourFeedStateInterface } from "src/app/your-feed/types/your-feed-state.interface";

/* Custom Actions */
import { getYourFeedAction, getYourFeedActionSuccess, getYourFeedActionFailure } from "src/app/your-feed/store/actions/get-your-feed.actions";

const initialState : YourFeedStateInterface = {
    isLoading: false,
    error: null,
    data: null
}

const globalFeedReducer = createReducer(
    initialState,
    on(getYourFeedAction, (state: YourFeedStateInterface) =>({
        ...state,
        isLoading: true
    })),
    on(getYourFeedActionSuccess, (state, action): YourFeedStateInterface => ({
        ...state,
        isLoading: false,
        data: action.yourFeed
    })),
    on(getYourFeedActionFailure, (state, action): YourFeedStateInterface => ({
        ...state,
        isLoading: false,
        error: action.error
    }))
)

export function reducers(state: YourFeedStateInterface, action: Action) {
    return globalFeedReducer(state, action);
}
