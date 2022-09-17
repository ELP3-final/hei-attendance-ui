import { FiInfo, FiLayout } from "react-icons/fi";
import { LinkItemProps } from "../../types/props/layout";

export const LinkItems: Array<LinkItemProps> = [
  { label: 'Evènement', icon: FiLayout, to: '/dashboard/event' },
  { label: 'Aperçu global', icon: FiLayout, to: '/dashboard/overview' },
  { label: 'A propos', icon: FiInfo, to: '/dashboard/about' },
];
