import { StyleSheet, Text, View } from "react-native";
import { GearItem } from "../types/domain";
import { colors, fonts } from "../theme";
import { Icon } from "./Icon";

type GearItemRowProps = {
  item: GearItem;
};

export function GearItemRow({ item }: GearItemRowProps) {
  return (
    <View style={styles.row}>
      <Icon name={item.icon} />
      <View style={styles.texts}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={[styles.slot, item.isRare && styles.rare]}>{item.slot}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: colors.surface,
  },
  texts: { flex: 1 },
  name: {
    fontFamily: fonts.bold,
    fontSize: 14,
    lineHeight: 17,
    color: colors.text,
  },
  slot: {
    fontFamily: fonts.regular,
    fontSize: 11,
    lineHeight: 13,
    color: colors.soft,
  },
  rare: { color: colors.purple },
});
