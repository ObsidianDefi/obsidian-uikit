import { ReactElement } from "react";
import { FooterLinkType } from "../../components/Footer/types";
import { MenuItemsType } from "../../components/MenuItems/types";
import { SubMenuItemsType } from "../../components/SubMenuItems/types";
import { Colors } from "../../theme/types";
import { Login } from "../WalletModal/types";

export interface Language {
  code: string;
  language: string;
  locale: string;
}

export interface Profile {
  username?: string;
  image?: string;
  profileLink: string;
  noProfileLink: string;
  showPip?: boolean;
}

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}

export interface NavTheme {
  background: string;
}

export interface LinkStatus {
  text: string;
  color: keyof Colors;
}

export interface MenuSubEntry {
  label: string;
  href: string;
  calloutClass?: string;
  status?: LinkStatus;
}

export interface MenuEntry {
  label: string;
  icon: string;
  items?: MenuSubEntry[];
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
  status?: LinkStatus;
}

export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  obsnPriceUsd?: number;
  token2PriceUsd?: number;
  token3PriceUsd?: number;
  spotLightPriceUsd?: number;
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  linkSide: Array<MenuEntry>;
}

export interface NavProps extends PanelProps {
  account?: string;
  login: Login;
  profile?: Profile;
  // userMenu?: ReactElement;
  // globalMenu?: ReactElement;
  obsnPriceUsd?: number;
  token2PriceUsd?: number;
  token3PriceUsd?: number;
  links: Array<MenuItemsType>;
  subLinks: Array<SubMenuItemsType>;
  footerLinks: Array<FooterLinkType>;
  activeItem: string;
  activeSubItem: string;
  buyObsnLabel: string;
  logout: () => void;
}

export interface TNavProps {
  userMenu?: ReactElement;
  globalMenu?: ReactElement;
  links: Array<MenuItemsType>;
  subLinks: Array<SubMenuItemsType>;
  footerLinks: Array<FooterLinkType>;
  activeItem: string;
  activeSubItem: string;
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  cakePriceUsd?: number;
  currentLang: string;
  buyCakeLabel: string;
  obsnPriceUsd?: number;
  token2PriceUsd?: number;
  token3PriceUsd?: number;
  spotLightPriceUsd?: number;
  langs: Language[];
  setLang: (lang: Language) => void;
}