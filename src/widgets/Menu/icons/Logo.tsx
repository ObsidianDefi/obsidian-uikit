import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  const imgSrc = isDark ? "/images/logos/obsidianlogolongdemonv2.png" : "/images/logos/obsidianlogolongangelv2.png";
  return (
    <Svg viewBox="0 0 172 41" {...props}>
    <image width="171" height="40" href={imgSrc}/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
