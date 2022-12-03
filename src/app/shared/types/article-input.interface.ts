import { PopularTagType } from "src/app/shared/types/popular-tags.type";

export interface ArticleInputInterface {
    title: string;
    description: string;
    body: string;
    tagList: PopularTagType[]
}