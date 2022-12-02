import { ArticlesInterface } from 'src/app/shared/types/articles.interface';

export interface GetTagFeedResponseInterface {
    articles: ArticlesInterface[],
    articlesCount: number
}