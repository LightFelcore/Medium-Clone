/* Store */
import { createFeatureSelector, createSelector } from "@ngrx/store";

/* Interfaces */
import { FeedStateInterface } from "src/app/shared/modules/feed/types/feed-state-interface";

export const feedFeatureSelector = createFeatureSelector<FeedStateInterface>('feed')

export const isLoadingFeedSelector = createSelector(
    feedFeatureSelector,
    (state: FeedStateInterface) => state.isLoading
)

export const errorsFeedSelector = createSelector(
    feedFeatureSelector,
    (state: FeedStateInterface) => state.error
)

export const dataFeedSelector = createSelector(
    feedFeatureSelector,
    (state: FeedStateInterface) => state.data
)