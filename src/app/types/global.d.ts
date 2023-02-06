declare module "*.module.css";
declare module "*.module.scss";

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
    import React from 'react';
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}


// пакет react-scripts и файл react-app-env.d.ts с содержимым <reference types="react-scripts" заменяет global.d.tsF