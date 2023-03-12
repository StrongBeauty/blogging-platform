export type ProfileType = {
    'firstname'?: string,
    'lastname'?: string
    'age'?: number,
    'currency'?: string,
    'country'?: string,
    'city'?: string,
    'username'?: string,
    'avatar'?: string
}

export type ProfileStateType = {
    data?: ProfileType;
    formData?: ProfileType;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
