export interface CurrentUserInterface {
    id: number;
    email: string;
    creadtedAt: Date;
    updatedAt: Date;
    username: string;
    bio: string | null;
    image: string | null;
    token: string;
}