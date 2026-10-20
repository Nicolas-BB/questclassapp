import { TavernItem } from "../types/domain";
import { colors } from "../theme";

export const tavernItems: TavernItem[] = [
  {
    id: "visao-do-oraculo",
    name: "Visão do Oráculo",
    description: "Veja uma dica da missão atual.",
    price: 30,
    icon: "wandSparkles",
    color: colors.cyan,
  },
  {
    id: "escudo-contra-bugs",
    name: "Escudo contra Bugs",
    description: "Uma chance extra de reenvio na missão.",
    price: 50,
    icon: "shieldCheck",
    color: colors.purple,
  },
  {
    id: "pocao-do-tempo",
    name: "Poção do Tempo",
    description: "+24h de prazo extra para entregar.",
    price: 40,
    icon: "circleX",
    color: colors.orange,
  },
  {
    id: "segunda-chance",
    name: "Segunda Chance",
    description: "Refaça uma missão que foi reprovada.",
    price: 60,
    icon: "feather",
    color: colors.green,
  },
  {
    id: "conselho-do-mestre",
    name: "Conselho do Mestre",
    description: "Feedback detalhado antecipado do seu código.",
    price: 80,
    icon: "scrollText",
    color: colors.pink,
  },
];
