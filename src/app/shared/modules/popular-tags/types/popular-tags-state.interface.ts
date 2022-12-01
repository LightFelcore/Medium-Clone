import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";
import { PopularTagType } from "src/app/shared/types/popular-tags.type";

export interface PopularTagsStateInterface {
    isLoading: boolean;
    error: BackendErrorsInterface | null;
    data: PopularTagType[] | null
}