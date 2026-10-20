import { StyleSheet, Text, View } from "react-native";
import { QuestStatus } from "../types/domain";
import { colors, fonts } from "../theme";

type StatusBadgeProps = {
  status: QuestStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  let color = colors.cyan;
  if (status === "Aceita") {
    color = colors.purple;
  }
  if (status === "Enviada") {
    color = colors.orange;
  }

  return (
    // "22" at the end of the color is the transparency (about 13%).
    <View style={[styles.badge, { borderColor: color, backgroundColor: color + "22" }]}>
      <Text style={[styles.text, { color: color }]}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
  },
  text: { fontFamily: fonts.bold, fontSize: 11, lineHeight: 13 },
});
