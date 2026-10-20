import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../theme";
import { Icon } from "./Icon";

type BackHeaderProps = {
  title: string;
  onBack: () => void;
};

export function BackHeader({ title, onBack }: BackHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onBack}
        accessibilityRole="button"
        accessibilityLabel="Voltar"
        style={({ pressed }) => [styles.back, pressed && styles.pressed]}
      >
        <Icon name="arrowLeft" />
        <Text style={styles.backText}>Voltar</Text>
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      <Icon name="scroll" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  back: { flexDirection: "row", alignItems: "center", gap: 6, minHeight: 44 },
  pressed: { opacity: 0.65 },
  backText: {
    fontFamily: fonts.semibold,
    fontSize: 14,
    lineHeight: 17,
    color: colors.purple,
  },
  title: {
    fontFamily: fonts.semibold,
    fontSize: 14,
    lineHeight: 17,
    color: colors.muted,
  },
});
