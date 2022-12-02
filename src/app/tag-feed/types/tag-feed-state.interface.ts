/* Interfaces */
import { GetTagFeedResponseInterface } from "src/app/tag-feed/types/get-tag-feed-response.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";

export interface TagFeedStateInterface {
    isLoading: boolean,
    error: BackendErrorsInterface | null,
    data: GetTagFeedResponseInterface | null
}