export type BuildMode = 'production' | 'development'

export type BuildEnvType = {
    mode: BuildMode;
    port: number;
}

export type BuildPathsType = {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export type BuildOptionsType = {
    mode: BuildMode,
    paths: BuildPathsType,
    isDev: boolean,
    port: number,
}
