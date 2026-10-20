import { Pressable, StyleSheet, Text, View } from "react-native";
import { TavernItem } from "../types/domain";
import { colors, fonts } from "../theme";
import { Icon } from "./Icon";

type TavernItemCardProps = {
  item: TavernItem;
  onRedeem: () => void;
};

export function TavernItemCard({ item, onRedeem }: TavernItemCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        {/* "1A" at the end of the color is the transparency (about 10%). */}
        <View style={[styles.iconBox, { backgroundColor: item.color + "1A" }]}>
          <Icon name={item.icon} />
        </View>
        <View style={styles.price}>
          <Icon name="coinsSmall" />
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <Pressable
        onPress={onRedeem}
        accessibilityRole="button"
        accessibilityLabel={`Resgatar ${item.name} por ${item.price} moedas`}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>Resgatar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 10,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  top: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  price: { flexDirection: "row", alignItems: "center", gap: 4 },
  priceText: {
    fontFamily: fonts.bold,
    fontSize: 13,
    lineHeight: 16,
    color: colors.orange,
  },
  info: { gap: 2 },
  name: {
    fontFamily: fonts.extrabold,
    fontSize: 14,
    lineHeight: 17,
    color: colors.text,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 11,
    lineHeight: 15,
    color: colors.soft,
  },
  button: {
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.purple,
    backgroundColor: "rgba(189, 147, 249, 0.13)",
  },
  pressed: { opacity: 0.65 },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: 12,
    lineHeight: 15,
    color: colors.purple,
  },
});
