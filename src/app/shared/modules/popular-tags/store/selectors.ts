/* Store */
import { createFeatureSelector, createSelector } from "@ngrx/store";

/* Interfaces */
import { PopularTagsStateInterface } from "../types/popular-tags-state.interface";

export const popularTagsFeatureSelector = createFeatureSelector<PopularTagsStateInterface>('popularTags');

export const isLoadingPopularTagsSelector = createSelector(
    popularTagsFeatureSelector,
    (state: PopularTagsStateInterface) => state.isLoading
)

export const errorPopularTagsSelector = createSelector(
    popularTagsFeatureSelector,
    (state: PopularTagsStateInterface) => state.error
)

export const dataPopularTagsSelector = createSelector(
    popularTagsFeatureSelector,
    (state: PopularTagsStateInterface) => state.data
)