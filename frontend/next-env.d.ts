/// <reference types="next" />
/// <reference types="next/types/global" />
declare module "*.mdx";
declare module "react-notifications";
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
