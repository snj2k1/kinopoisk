declare module '*.module.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  const content: string | SVGProps<SVGSVGElement>;
  export default content;
}

declare module '*.jpg';
