/* Interfaces */
import { AuthStateInterface } from "src/app/auth/types/auth-state.interface";
import { GlobalFeedStateInterface } from "src/app/global-feed/types/global-feed-state.interface";
import { PopularTagsStateInterface } from "src/app/shared/modules/popular-tags/types/popular-tags-state.interface";

export interface AppStateInterface {
    auth: AuthStateInterface,
    globalFeed: GlobalFeedStateInterface,
    popularTags: PopularTagsStateInterface
}