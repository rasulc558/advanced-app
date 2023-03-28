// чтобы не ругался при импорте scss модулей

declare module '*.scss' {
  type IClassNames = Record<string, string>;
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.jpeg'
declare module '*.png'
declare module '*.jpg'

declare module '*.svg' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
// Эта констатна будет прокинута вебпаком в само приложение. Нам она нужна для i18n чтобы отключить консоль с дебагом в режиме development
// eslint-disable-next-line
declare const __IS_DEV__: boolean
