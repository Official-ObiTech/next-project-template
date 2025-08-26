import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface QuickLink {
  label: string;
  description?: string;
  href: string;
  icon?: React.ReactNode;
}

export interface LeadershipMember {
  name: string;
  role: string;
  photoUrl?: string;
  bio?: string;
  linkedin?: string;
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface Region {
  name: string;
  count?: number;
}

export interface NavLink {
  href: string;
  label: string;
}
