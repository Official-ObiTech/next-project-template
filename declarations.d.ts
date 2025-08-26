declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.jpeg" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module "*.pne" {
  const value: any;
  export default value;
}

declare module "@splinetool/react-spline" {
  import React from "react";
  const Spline: React.ComponentType<{ scene: string }>;
  export default Spline;
}
