export type ModesType = Record<string, boolean | string | undefined>

export const classNames = (
  cls: string,
  modes: ModesType = {},
  adds: Array<string| undefined> = [],
): string => [
  cls,
  ...adds.filter(Boolean),
  ...Object.entries(modes)
    .filter(([, value]) => Boolean(value))
    .map(([className]) => className),
]
  .join(' ');
