import { ProfileInterface } from "src/app/shared/types/profile.interface";
import { PopularTagType } from "src/app/shared/types/popular-tags.type";

export interface ArticlesInterface {
    title: string,
    slug: string,
    body: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    tagList: PopularTagType[],
    author: ProfileInterface,
    favorited: boolean,
    favoritesCount: number
}