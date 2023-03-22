export type UserType = {
    id: string;
    username: string;
    avatar?: string;
}

export type UserStateType = {
    authData?: UserType;
    _mounted: boolean;
}
