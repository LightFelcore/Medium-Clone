/* Interfaces */
import { GetFeedResponseInterface } from "src/app/shared/modules/feed/types/get-feed-response.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";

export interface FeedStateInterface {
    isLoading: boolean,
    error: BackendErrorsInterface | null,
    data: GetFeedResponseInterface | null
}