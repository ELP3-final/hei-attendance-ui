import { FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { LinkProps } from "react-router-dom";

export type NavItemProps = {
  icon: IconType;
} & FlexProps & LinkProps;
