/* Interfaces */
import { GetGlobalFeedResponseInterface } from "src/app/global-feed/types/get-global-feed-response.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";

export interface GlobalFeedStateInterface {
    isLoading: boolean,
    error: BackendErrorsInterface | null,
    data: GetGlobalFeedResponseInterface | null
}