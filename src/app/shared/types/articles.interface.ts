import { ProfileInterface } from "src/app/shared/types/profile.interface";

export interface ArticlesInterface {
    title: string,
    slug: string,
    body: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    tagList: string[],
    author: ProfileInterface,
    favorited: boolean,
    favoritesCount: number
}