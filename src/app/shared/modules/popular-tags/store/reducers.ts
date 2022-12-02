/* Store */
import { Action, createReducer, on } from "@ngrx/store";

/* Custom Interfaces */
import { PopularTagsStateInterface } from "src/app/shared/modules/popular-tags/types/popular-tags-state.interface";
import { PopularTagType } from "src/app/shared/types/popular-tags.type";

/* Custom Action */
import { getPopularTagsAction, getPopularTagsActionSuccess, getPopularTagsActionFailure } from "./actions/get-popular-tags.action";

const initialState: PopularTagsStateInterface = {
    isLoading: false,
    error: null,
    data: null
}

const popularTagsReducer = createReducer(
    initialState,
    on(getPopularTagsAction, (state): PopularTagsStateInterface => ({
        ...state,
        data: null,
        isLoading: true
    })),
    on(getPopularTagsActionSuccess, (state, action): PopularTagsStateInterface => ({
        ...state,
        isLoading: false,
        data: action.popularTags
    })),
    on(getPopularTagsActionFailure, (state, action): PopularTagsStateInterface => ({
        ...state,
        isLoading: false,
        error: action.error
    }))
)

export function reducers(state: PopularTagsStateInterface, action: Action) {
    return popularTagsReducer(state, action)
}