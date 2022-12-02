/* Interfaces */
import { GetYourFeedResponseInterface } from "src/app/your-feed/types/get-your-feed-response.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";

export interface YourFeedStateInterface {
    isLoading: boolean,
    error: BackendErrorsInterface | null,
    data: GetYourFeedResponseInterface | null
}