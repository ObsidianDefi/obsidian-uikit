import React from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { ObsidianRound } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

interface Props {
  color?: keyof Colors;
  token3PriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const BankPrice: React.FC<Props> = ({ token3PriceUsd, color = "textSubtle" }) => {
const theme = useTheme();

  return token3PriceUsd ? (
    <PriceLink
      href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
      target="_blank"
    >
      <ObsidianRound width="24px" mr="8px" isDark={theme.isDark} />
      <Text color={color} bold>{`$${token3PriceUsd.toFixed(9)}`}</Text> 
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(BankPrice);
