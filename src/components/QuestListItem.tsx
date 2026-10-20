import { Pressable, StyleSheet, Text, View } from "react-native";
import { Quest } from "../types/domain";
import { colors, fonts } from "../theme";
import { Icon } from "./Icon";
import { StatusBadge } from "./StatusBadge";

type QuestListItemProps = {
  quest: Quest;
  onPress: () => void;
};

export function QuestListItem({ quest, onPress }: QuestListItemProps) {
  // The stripe and the monster change color with the difficulty.
  let stripeColor = colors.red;
  let monster: "monsterOrange" | "monsterPurple" | "monsterRed" = "monsterRed";

  if (quest.difficulty === "Fácil") {
    stripeColor = colors.purple;
    monster = "monsterPurple";
  }
  if (quest.difficulty === "Média") {
    stripeColor = colors.orange;
    monster = "monsterOrange";
  }

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${quest.title}. ${quest.status}. Ver detalhes da missão.`}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={[styles.stripe, { backgroundColor: stripeColor }]} />
      <View style={styles.body}>
        <View style={styles.left}>
          <View style={styles.monster}>
            <Icon name={monster} />
          </View>
          <View style={styles.info}>
            <Text style={styles.title} numberOfLines={1}>
              {quest.title}
            </Text>
            <View style={styles.subtitle}>
              <Text style={styles.difficulty}>{quest.difficulty}</Text>
              <Text style={styles.xp}>+{quest.reward.xp} XP</Text>
            </View>
          </View>
        </View>
        <StatusBadge status={quest.status} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  pressed: { opacity: 0.75 },
  stripe: { width: 6 },
  body: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    padding: 14,
  },
  left: { flexDirection: "row", alignItems: "center", gap: 12, flexShrink: 1 },
  monster: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  info: { gap: 4, flexShrink: 1 },
  title: {
    fontFamily: fonts.bold,
    fontSize: 14,
    lineHeight: 17,
    color: colors.text,
  },
  subtitle: { flexDirection: "row", alignItems: "center", gap: 8 },
  difficulty: {
    fontFamily: fonts.semibold,
    fontSize: 11,
    lineHeight: 13,
    color: colors.muted,
  },
  xp: {
    fontFamily: fonts.bold,
    fontSize: 11,
    lineHeight: 13,
    color: colors.green,
  },
});
