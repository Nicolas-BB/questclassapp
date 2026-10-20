import { Quest } from "../types/domain";

export const quests: Quest[] = [
  {
    id: "goblin-das-props",
    title: "Derrote o Goblin das Props",
    description:
      "Crie um componente QuestCard reutilizável com props tipadas para título, dificuldade, prazo e recompensa.",
    difficulty: "Média",
    status: "Disponível",
    dueDate: "15 ago",
    deadline: "15 de agosto",
    criteria: [
      "Props tipadas com TypeScript",
      "Estilização Dracula Theme fiel",
      "Componente isolado e exportado",
    ],
    reward: { xp: 100, coins: 20, item: "Manto do TS" },
  },
  {
    id: "Ogro-do-Estado",
    title: "Derrote o Ogro do Estado",
    description:
      "Crie um componente React Native que utilize o hook useState para gerenciar o estado interno do componente.",
    difficulty: "Média",
    status: "Disponível",
    dueDate: "15 ago",
    deadline: "15 de agosto",
    criteria: [
      "Uso correto do useState",
      "Estado atualizado ao tocar em um botão",
      "Componente isolado e exportado",
    ],
    reward: { xp: 100, coins: 20 },
  },
  {
    id: "slime-dos-componentes",
    title: "Slime dos Componentes",
    description:
      "Divida uma tela grande em componentes menores e reutilizáveis.",
    difficulty: "Fácil",
    status: "Aceita",
    dueDate: "20 ago",
    deadline: "20 de agosto",
    criteria: [
      "Pelo menos três componentes",
      "Cada componente em seu próprio arquivo",
    ],
    reward: { xp: 50, coins: 10 },
  },
  {
    id: "hidra-do-estado",
    title: "Hidra do Estado",
    description:
      "Compartilhe o mesmo estado entre várias telas do aplicativo.",
    difficulty: "Difícil",
    status: "Enviada",
    dueDate: "25 ago",
    deadline: "25 de agosto",
    criteria: [
      "Estado compartilhado entre telas",
      "Nenhum dado duplicado",
    ],
    reward: { xp: 200, coins: 40 },
  },
  {
    id: "dragao-da-api",
    title: "Dragão da API",
    description:
      "Busque dados de uma API e mostre o resultado em uma lista.",
    difficulty: "Chefe",
    status: "Disponível",
    dueDate: "30 ago",
    deadline: "30 de agosto",
    criteria: [
      "Requisição feita com fetch",
      "Tela de carregamento",
      "Mensagem de erro amigável",
    ],
    reward: { xp: 500, coins: 100, item: "Escudo do Async" },
  },
];
