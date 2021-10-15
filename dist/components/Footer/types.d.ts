import { Language } from "../LangSelector/types";
import { FlexProps } from "../Box";
export declare type FooterLinkType = {
    label: string;
    items: {
        label: string;
        href?: string;
        isHighlighted?: boolean;
    }[];
};
export declare type FooterProps = {
    items: FooterLinkType[];
    buyObsnLabel: string;
    isDark: boolean;
    toggleTheme: (isDark: boolean) => void;
    obsnPriceUsd?: number;
    token2PriceUsd?: number;
    token3PriceUsd?: number;
    currentLang: string;
    langs: Language[];
    setLang: (lang: Language) => void;
} & FlexProps;
