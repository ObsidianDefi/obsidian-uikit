import React from "react";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledSocialLinks,
  StyledToolsContainer,
} from "./styles";
import { FooterProps } from "./types";
import ThemeSwitcher from "./Components/ThemeSwitcher";
import LangSelector from "../LangSelector/LangSelector";
import VXCPrice from "../VXCPrice/VXCPrice";
import VChipPrice from "../VChipPrice/VChipPrice";
import BankPrice from "../BankPrice/BankPrice";
import { useTheme } from "styled-components";
import { ObsidianRound, ArrowForwardIcon } from "../Svg";
import { Button } from "../Button";
import { Colors } from "../..";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  obsnPriceUsd,
  token2PriceUsd,
  token3PriceUsd,
  buyObsnLabel,
  ...props
}) => {
const theme = useTheme();
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 55px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <ObsidianRound isDark width="130px" />
        </StyledIconMobileContainer>
        {/* <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
        >
          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  <Link
                    href={href}
                    target="_black"
                    color={isHighlighted ? baseColors.warning : darkColors.text}
                    bold={false}
                  >
                    {label}
                  </Link>
                </StyledListItem>
              ))}
            </StyledList>
          ))}
          <Box display={["none", null, "block"]}>
            <ObsidianRound isDark width="160px" />
          </Box>
        </Flex> */}
        <StyledSocialLinks order={[2]} pb={["42px", null, "32px"]} mb={["0", null, "32px"]} />
        <StyledToolsContainer
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          <Flex order={[2, null, 1]} alignItems="center">
            <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
            <LangSelector
              currentLang={currentLang}
              langs={langs}
              setLang={setLang}
              color={darkColors.textSubtle as keyof Colors}
              dropdownPosition="top-right"
            />
          </Flex>
          <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">
            {/* <Box mr="20px">
              <VXCPrice obsnPriceUsd={obsnPriceUsd} color={darkColors.textSubtle as keyof Colors} />
            </Box> */}
            {/* <Box mr="20px">
              <VChipPrice token2PriceUsd={token2PriceUsd} color={darkColors.textSubtle as keyof Colors} />
            </Box>
            <Box mr="20px">
              <BankPrice token3PriceUsd={token3PriceUsd} color={darkColors.textSubtle as keyof Colors} />
            </Box> */}
            <Button
              as="a"
              href="https://localhost:3000/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
              target="_blank"
              scale="sm"
              endIcon={<ArrowForwardIcon color={lightColors.backgroundAlt} />}
            >
              {buyObsnLabel}
            </Button>
          </Flex>
        </StyledToolsContainer>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
