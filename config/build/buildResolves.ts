import {ResolveOptions} from "webpack";


export function buildResolves(): ResolveOptions {
    return {
        extensions: ['.LazyPages.tsx', '.ts', '.js'],
    }
}