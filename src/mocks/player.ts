import { GearItem, Player, PlayerTitle } from "../types/domain";
import { colors } from "../theme";

export const player: Player = {
  name: "Lyra",
  characterClass: "Maga dos Estados",
  role: "player",
  level: 4,
  xp: 430,
  nextLevelXp: 600,
  coins: 120,
  streak: 5,
  completedQuests: 8,
};

export const playerTitles: PlayerTitle[] = [
  { name: "Primeira Missão", color: colors.purple },
  { name: "Sequência de 5", color: colors.pink },
  { name: "Caçadora de Bugs", color: colors.green },
];

export const playerGear: GearItem[] = [
  {
    name: "Manto do TypeScript",
    slot: "Costas (Raro)",
    icon: "wandSparklesPurple",
    isRare: true,
  },
  {
    name: "Coroa de Commits",
    slot: "Cabeça (Comum)",
    icon: "crown",
    isRare: false,
  },
];
