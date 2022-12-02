/* Store */
import { Action, createReducer, on } from "@ngrx/store";

/* Interfaces */
import { TagFeedStateInterface } from "src/app/tag-feed/types/tag-feed-state.interface";

/* Custom Actions */
import { getTagFeedAction, getTagFeedActionSuccess, getTagFeedActionFailure } from "src/app/tag-feed/store/actions/get-tag-feed.actions";

const initialState : TagFeedStateInterface = {
    isLoading: false,
    error: null,
    data: null
}

const globalFeedReducer = createReducer(
    initialState,
    on(getTagFeedAction, (state: TagFeedStateInterface) =>({
        ...state,
        isLoading: true
    })),
    on(getTagFeedActionSuccess, (state, action): TagFeedStateInterface => ({
        ...state,
        isLoading: false,
        data: action.tagFeed
    })),
    on(getTagFeedActionFailure, (state, action): TagFeedStateInterface => ({
        ...state,
        isLoading: false,
        error: action.error
    }))
)

export function reducers(state: TagFeedStateInterface, action: Action) {
    return globalFeedReducer(state, action);
}
