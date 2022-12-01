/* Actions */
import { createAction, props } from "@ngrx/store";

/* Custom Action Types */
import { ActionTypes } from "src/app/shared/modules/popular-tags/store/actionTypes";

/* Custom Types */
import { PopularTagType } from "src/app/shared/types/popular-tags.type";

/* Custom Interfaces */
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";

export const getPopularTagsAction = createAction(
    ActionTypes.GET_POPULAR_TAGS
)

export const getPopularTagsActionSuccess = createAction(
    ActionTypes.GET_POPULAR_TAGS_SUCCESS,
    props<{popularTags: PopularTagType[]}>()
)

export const getPopularTagsActionFailure = createAction(
    ActionTypes.GET_POPULAR_TAGS_FAILURE,
    props<{error: BackendErrorsInterface}>()
)