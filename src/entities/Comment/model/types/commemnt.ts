import { UserType } from 'entities/User';

export type CommentType = {
    id: string;
    user: UserType;
    text: string;
}
