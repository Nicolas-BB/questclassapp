import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../theme";

type LootCardProps = {
  label: string;
  value: string;
  color: string;
  // Long values (like item names) use a smaller font.
  small?: boolean;
};

export function LootCard({ label, value, color, small }: LootCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, small && styles.smallValue, { color: color }]}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    gap: 4,
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.surface,
  },
  label: {
    fontFamily: fonts.semibold,
    fontSize: 11,
    lineHeight: 13,
    color: colors.muted,
  },
  value: {
    fontFamily: fonts.extrabold,
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
  },
  smallValue: { fontSize: 12, lineHeight: 15 },
});
