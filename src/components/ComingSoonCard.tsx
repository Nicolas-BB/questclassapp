import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../theme";
import { Icon } from "./Icon";

export function ComingSoonCard() {
  return (
    <View style={styles.card}>
      <Icon name="beer" />
      <Text style={styles.text}>Novos consumíveis em breve</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 100,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.border,
    backgroundColor: "rgba(189, 147, 249, 0.06)",
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 15,
    textAlign: "center",
    color: colors.soft,
  },
});
