import { ArticlesInterface } from 'src/app/shared/types/articles.interface';

export interface GetGlobalFeedResponseInterface {
    articles: ArticlesInterface[],
    articlesCount: number
}