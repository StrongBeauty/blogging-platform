import { Currency } from 'entities/Currency';
import { Countries } from 'entities/Country';

export type ProfileType = {
    firstname?: string,
    lastname?: string
    age?: number,
    currency?: Currency,
    country?: Countries,
    city?: string,
    username?: string,
    avatar?: string
}

export type ProfileStateType = {
    data?: ProfileType;
    formData?: ProfileType;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
