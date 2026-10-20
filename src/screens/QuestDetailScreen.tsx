import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { BackHeader } from "../components/BackHeader";
import { LootCard } from "../components/LootCard";
import { MonsterBanner } from "../components/MonsterBanner";
import { ParchmentCard } from "../components/ParchmentCard";
import { PrimaryButton } from "../components/PrimaryButton";
import { Screen } from "../components/Screen";
import { quests } from "../mocks/quests";
import { colors, fonts } from "../theme";
import { showMessage } from "../utils/showMessage";

type QuestDetailScreenProps = {
  questId: string;
};

export function QuestDetailScreen({ questId }: QuestDetailScreenProps) {
  const quest = quests.find((item) => item.id === questId);

  if (!quest) {
    return (
      <Screen>
        <BackHeader title="Detalhes" onBack={() => router.back()} />
        <Text style={styles.notFound}>Missão não encontrada.</Text>
      </Screen>
    );
  }

  const footer = (
    <SafeAreaView style={styles.footer} edges={["bottom"]}>
      <PrimaryButton
        label="Aceitar Missão"
        onPress={() =>
          showMessage("Missão aceita!", `Boa sorte contra "${quest.title}".`)
        }
      />
    </SafeAreaView>
  );

  return (
    <Screen footer={footer}>
      <BackHeader title="Detalhes" onBack={() => router.back()} />
      <MonsterBanner />

      <View style={styles.titleRow}>
        <Text style={styles.title} accessibilityRole="header">
          {quest.title}
        </Text>
        <View style={styles.difficultyBadge}>
          <Text style={styles.difficulty}>
            {quest.difficulty.toUpperCase()}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <ParchmentCard quest={quest} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SPOILS DE BATALHA (RECOMPENSAS)</Text>
        <View style={styles.lootRow}>
          <LootCard label="XP" value={`+${quest.reward.xp} XP`} color={colors.green} />
          <LootCard
            label="OURO"
            value={`+${quest.reward.coins} moedas`}
            color={colors.orange}
          />
          {quest.reward.item && (
            <LootCard
              label="EQUIPAMENTO"
              value={quest.reward.item}
              color={colors.cyan}
              small
            />
          )}
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  notFound: {
    padding: 20,
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.text,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    flex: 1,
    fontFamily: fonts.extrabold,
    fontSize: 22,
    lineHeight: 27,
    color: colors.text,
  },
  difficultyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.orange,
    backgroundColor: colors.surface,
  },
  difficulty: {
    fontFamily: fonts.extrabold,
    fontSize: 11,
    lineHeight: 13,
    color: colors.orange,
  },
  section: { gap: 10, paddingHorizontal: 20, paddingBottom: 24 },
  sectionTitle: {
    fontFamily: fonts.extrabold,
    fontSize: 12,
    lineHeight: 15,
    color: colors.muted,
  },
  lootRow: { flexDirection: "row", gap: 12 },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.surface,
    backgroundColor: colors.background,
  },
});
