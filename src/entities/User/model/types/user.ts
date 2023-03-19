export type UserType = {
    id: string;
    username: string;
}

export type UserStateType = {
    authData?: UserType;
    _mounted: boolean;
}
