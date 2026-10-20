import { Image } from "expo-image";
import { ColorValue } from "react-native";

// SVGs originais do Figma, empacotados com o app. Não dependem de URLs externas.
const icons = {
  coins: { source: require("../../assets/icons/coins.svg"), size: 18 },
  coinsMedium: { source: require("../../assets/icons/tavern-coins.svg"), size: 16 },
  coinsSmall: { source: require("../../assets/icons/price-coins.svg"), size: 14 },
  mission: { source: require("../../assets/icons/mission.svg"), size: 36 },
  boss: { source: require("../../assets/icons/boss.svg"), size: 24 },
  swords: { source: require("../../assets/icons/swords.svg"), size: 14 },
  journey: { source: require("../../assets/icons/journey.svg"), size: 22 },
  quests: { source: require("../../assets/icons/quests.svg"), size: 22 },
  tavern: { source: require("../../assets/icons/tavern.svg"), size: 22 },
  character: { source: require("../../assets/icons/character.svg"), size: 22 },
  monsterOrange: { source: require("../../assets/icons/monster-angry-orange.svg"), size: 24 },
  monsterPurple: { source: require("../../assets/icons/monster-angry-purple.svg"), size: 24 },
  monsterRed: { source: require("../../assets/icons/monster-angry-red.svg"), size: 24 },
  arrowLeft: { source: require("../../assets/icons/arrow-left.svg"), size: 20 },
  scroll: { source: require("../../assets/icons/scroll.svg"), size: 20 },
  ghost: { source: require("../../assets/icons/ghost.svg"), size: 48 },
  checkCircle: { source: require("../../assets/icons/check-circle.svg"), size: 16 },
  hourglass: { source: require("../../assets/icons/hourglass.svg"), size: 16 },
  wandSparkles: { source: require("../../assets/icons/wand-sparkles-cyan.svg"), size: 24 },
  wandSparklesPurple: { source: require("../../assets/icons/wand-sparkles-purple.svg"), size: 24 },
  shieldCheck: { source: require("../../assets/icons/shield-check.svg"), size: 24 },
  circleX: { source: require("../../assets/icons/circle-x.svg"), size: 24 },
  feather: { source: require("../../assets/icons/feather.svg"), size: 24 },
  scrollText: { source: require("../../assets/icons/scroll-text.svg"), size: 24 },
  beer: { source: require("../../assets/icons/beer-muted.svg"), size: 32 },
  settings: { source: require("../../assets/icons/settings.svg"), size: 20 },
  levelShield: { source: require("../../assets/icons/level-shield.svg"), size: 14 },
  flame: { source: require("../../assets/icons/flame.svg"), size: 14 },
  crown: { source: require("../../assets/icons/crown.svg"), size: 24 },
};

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  // Used by the tab bar to paint the icon with the active/inactive color.
  color?: ColorValue;
};

export function Icon({ name, color }: IconProps) {
  const icon = icons[name];

  return (
    <Image
      source={icon.source}
      style={{ width: icon.size, height: icon.size }}
      contentFit="contain"
      // expo-image only accepts a plain string here. Our colors are strings.
      tintColor={color as string}
      accessible={false}
    />
  );
}
