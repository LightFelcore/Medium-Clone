/* Store */
import { createFeatureSelector, createSelector } from "@ngrx/store";

/* Interfaces */
import { YourFeedStateInterface } from "src/app/your-feed/types/your-feed-state.interface";

export const yourFeatureSelector = createFeatureSelector<YourFeedStateInterface>('yourFeed')

export const isLoadingYourFeedSelector = createSelector(
    yourFeatureSelector,
    (state: YourFeedStateInterface) => state.isLoading
)

export const errorsYourFeedSelector = createSelector(
    yourFeatureSelector,
    (state: YourFeedStateInterface) => state.error
)

export const dataYourFeedSelector = createSelector(
    yourFeatureSelector,
    (state: YourFeedStateInterface) => state.data
)
