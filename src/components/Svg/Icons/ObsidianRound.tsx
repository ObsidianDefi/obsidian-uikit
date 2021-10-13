import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const ObsidianRound: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const imgSrc = isDark ? "/images/logos/obsidiandemonlogoflat.png" : "/images/logos/obsidianangellogoflat.png";
  return (
    <Svg viewBox="0 0 92 92" {...props}>
        <image width="90" height="90" href={imgSrc}/>
    </Svg>
  );
};

export default React.memo(ObsidianRound, (prev, next) => prev.isDark === next.isDark);
