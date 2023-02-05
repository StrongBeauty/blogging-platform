type ModesType = Record<string, boolean | string>

export const classNames = (cls: string, modes?: ModesType, adds?: string[]): string => {

    return [
        cls,
        ...adds.filter(Boolean),
        ...Object.entries(modes)
            .filter(value => Boolean(value))
            .map(className => className)
    ]
        .join(' ')
}