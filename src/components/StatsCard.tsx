import { StyleSheet, Text, View } from "react-native";
import { Player } from "../types/domain";
import { colors, fonts } from "../theme";
import { Icon } from "./Icon";
import { ProgressBar } from "./ProgressBar";

type StatsCardProps = {
  player: Player;
};

export function StatsCard({ player }: StatsCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.progress}>
        <View style={styles.row}>
          <Text style={styles.progressLabel}>PROGRESSO</Text>
          <Text style={styles.xp}>
            {player.xp} / {player.nextLevelXp} XP
          </Text>
        </View>
        <ProgressBar
          value={player.xp}
          max={player.nextLevelXp}
          color={colors.purple}
          label="Experiência para o próximo nível"
        />
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>MOEDAS</Text>
          <View style={styles.statValueRow}>
            <Icon name="coinsSmall" />
            <Text style={[styles.statValue, { color: colors.orange }]}>
              {player.coins}
            </Text>
          </View>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>MISSÕES</Text>
          <Text style={styles.statValue}>{player.completedQuests} concluídas</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>SEQUÊNCIA</Text>
          <View style={styles.statValueRow}>
            <Icon name="flame" />
            <Text style={[styles.statValue, { color: colors.pink }]}>
              {player.streak} dias
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 12,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  progress: { gap: 6 },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8,
  },
  progressLabel: {
    fontFamily: fonts.bold,
    fontSize: 12,
    lineHeight: 15,
    color: colors.soft,
  },
  xp: {
    fontFamily: fonts.semibold,
    fontSize: 12,
    lineHeight: 15,
    color: colors.text,
  },
  divider: { height: 1, backgroundColor: colors.border },
  stat: { gap: 2 },
  statLabel: {
    fontFamily: fonts.regular,
    fontSize: 11,
    lineHeight: 13,
    color: colors.soft,
  },
  statValueRow: { flexDirection: "row", alignItems: "center", gap: 4 },
  statValue: {
    fontFamily: fonts.bold,
    fontSize: 15,
    lineHeight: 18,
    color: colors.text,
  },
});
