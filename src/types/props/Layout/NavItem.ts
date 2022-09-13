import { FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { WithChildren } from "../../common";

export type NavItemProps = WithChildren<{
  icon: IconType;
} & FlexProps>;
