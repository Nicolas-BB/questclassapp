export type Role = "player" | "master";

export type Reward = {
  xp: number;
  coins: number;
  item?: string;
};

export type QuestStatus = "Disponível" | "Aceita" | "Enviada";

export type Quest = {
  id: string;
  title: string;
  description: string;
  difficulty: "Fácil" | "Média" | "Difícil" | "Chefe";
  status: QuestStatus;
  dueDate?: string;
  deadline?: string;
  criteria: string[];
  reward: Reward;
};

export type Player = {
  name: string;
  characterClass: string;
  role: Role;
  level: number;
  xp: number;
  nextLevelXp: number;
  coins: number;
  streak: number;
  completedQuests: number;
};

export type Boss = {
  name: string;
  remainingHealth: number;
  classContribution: number;
};

export type TavernItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: "wandSparkles" | "shieldCheck" | "circleX" | "feather" | "scrollText";
  color: string;
};

export type PlayerTitle = {
  name: string;
  color: string;
};

export type GearItem = {
  name: string;
  slot: string;
  icon: "wandSparklesPurple" | "crown";
  isRare: boolean;
};
