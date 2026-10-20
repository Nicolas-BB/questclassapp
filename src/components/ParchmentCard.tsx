import { StyleSheet, Text, View } from "react-native";
import { Quest } from "../types/domain";
import { colors, fonts } from "../theme";
import { Icon } from "./Icon";

type ParchmentCardProps = {
  quest: Quest;
};

export function ParchmentCard({ quest }: ParchmentCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.block}>
        <Text style={styles.label}>INSTRUÇÕES DO PERGAMINHO</Text>
        <Text style={styles.description}>{quest.description}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.criteria}>
        <Text style={styles.label}>CRITÉRIOS DE CONCLUSÃO</Text>
        {quest.criteria.map((criterion) => (
          <View key={criterion} style={styles.row}>
            <Icon name="checkCircle" />
            <Text style={styles.criterion}>{criterion}</Text>
          </View>
        ))}
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Icon name="hourglass" />
        <Text style={styles.deadline}>Prazo final: {quest.deadline}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    gap: 16,
    borderRadius: 16,
    backgroundColor: colors.parchment,
    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.4)",
  },
  block: { gap: 6 },
  label: {
    fontFamily: fonts.extrabold,
    fontSize: 12,
    lineHeight: 15,
    color: colors.parchmentLabel,
  },
  description: {
    fontFamily: fonts.medium,
    fontSize: 14,
    lineHeight: 22,
    color: colors.parchmentText,
  },
  divider: { height: 1, backgroundColor: "rgba(109, 90, 80, 0.3)" },
  criteria: { gap: 10 },
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  criterion: {
    flex: 1,
    fontFamily: fonts.semibold,
    fontSize: 13,
    lineHeight: 16,
    color: colors.parchmentText,
  },
  deadline: {
    fontFamily: fonts.bold,
    fontSize: 13,
    lineHeight: 16,
    color: colors.parchmentText,
  },
});
