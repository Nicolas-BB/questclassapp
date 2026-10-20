import { StyleSheet, Text, View } from "react-native";
import { PlayerTitle } from "../types/domain";
import { colors, fonts } from "../theme";

type TitleBadgeProps = {
  title: PlayerTitle;
};

export function TitleBadge({ title }: TitleBadgeProps) {
  return (
    <View style={[styles.badge, { borderColor: title.color }]}>
      <Text style={[styles.text, { color: title.color }]}>{title.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: colors.surface,
  },
  text: { fontFamily: fonts.semibold, fontSize: 12, lineHeight: 15 },
});
