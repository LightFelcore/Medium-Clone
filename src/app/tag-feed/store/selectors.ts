/* Store */
import { createFeatureSelector, createSelector } from "@ngrx/store";

/* Interfaces */
import { TagFeedStateInterface } from "src/app/tag-feed/types/tag-feed-state.interface";

export const tagFeatureSelector = createFeatureSelector<TagFeedStateInterface>('tagFeed')

export const isLoadingTagFeedSelector = createSelector(
    tagFeatureSelector,
    (state: TagFeedStateInterface) => state.isLoading
)

export const errorsTagFeedSelector = createSelector(
    tagFeatureSelector,
    (state: TagFeedStateInterface) => state.error
)

export const dataTagFeedSelector = createSelector(
    tagFeatureSelector,
    (state: TagFeedStateInterface) => state.data
)
