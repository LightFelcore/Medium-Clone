import { ArticlesInterface } from 'src/app/shared/types/articles.interface';

export interface GetYourFeedResponseInterface {
    articles: ArticlesInterface[],
    articlesCount: number
}