/* Store */
import { createFeatureSelector, createSelector } from "@ngrx/store";

/* Interfaces */
import { GlobalFeedStateInterface } from "src/app/global-feed/types/global-feed-state.interface";

export const feedFeatureSelector = createFeatureSelector<GlobalFeedStateInterface>('globalFeed')

export const isLoadingGlobalFeedSelector = createSelector(
    feedFeatureSelector,
    (state: GlobalFeedStateInterface) => state.isLoading
)

export const errorsGlobalFeedSelector = createSelector(
    feedFeatureSelector,
    (state: GlobalFeedStateInterface) => state.error
)

export const dataGlobalFeedSelector = createSelector(
    feedFeatureSelector,
    (state: GlobalFeedStateInterface) => state.data
)
