import { ReactNode } from "react"

export type Wrapper<T = unknown> = {
  children?: ReactNode;
} & T;
