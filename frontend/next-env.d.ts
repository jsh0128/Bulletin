/// <reference types="next" />
/// <reference types="next/types/global" />
declare module "*.mdx";
declare module "react-notifications";
declare module "*.jpg";
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
declare module "*.png" {
  const value: any;
  export default value;
}
