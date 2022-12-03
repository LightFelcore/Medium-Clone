import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";
import { ArticlesInterface } from "src/app/shared/types/articles.interface";

export interface ArticleStateInterface {
    isLoading: boolean;
    error: BackendErrorsInterface | null;
    data: ArticlesInterface | null;
}