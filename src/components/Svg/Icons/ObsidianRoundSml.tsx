import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const ObsidianRoundSml: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const imgSrc = isDark ? "/images/logos/obsidiandemonlogoflat.png" : "/images/logos/obsidianangellogoflat.png";
  return (
    <Svg viewBox="0 0 42 42" {...props}>
        <image width="40" height="40" href={imgSrc}/>
    </Svg>
  );
};

export default React.memo(ObsidianRoundSml, (prev, next) => prev.isDark === next.isDark);