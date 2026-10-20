import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Player } from "../types/domain";
import { colors, fonts } from "../theme";
import { Icon } from "./Icon";

type CharacterShowcaseProps = {
  player: Player;
};

export function CharacterShowcase({ player }: CharacterShowcaseProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarRing}>
        <Image
          source={require("../../assets/images/character-avatar.png")}
          style={styles.avatar}
          contentFit="cover"
          accessibilityLabel={`Avatar de ${player.name}`}
        />
      </View>
      <View style={styles.titles}>
        <Text style={styles.name}>{player.name}</Text>
        <Text style={styles.characterClass}>{player.characterClass}</Text>
      </View>
      <View style={styles.levelBadge}>
        <Icon name="levelShield" />
        <Text style={styles.level}>Nível {player.level}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", gap: 12, paddingBottom: 20 },
  avatarRing: {
    width: 136,
    height: 136,
    borderRadius: 68,
    borderWidth: 4,
    borderColor: colors.purple,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(189, 147, 249, 0.08)",
  },
  avatar: { width: 120, height: 120, borderRadius: 60 },
  titles: { alignItems: "center", gap: 4 },
  name: {
    fontFamily: fonts.extrabold,
    fontSize: 24,
    lineHeight: 29,
    color: colors.text,
  },
  characterClass: {
    fontFamily: fonts.semibold,
    fontSize: 14,
    lineHeight: 17,
    color: colors.purple,
  },
  levelBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.orange,
    backgroundColor: colors.surface,
  },
  level: {
    fontFamily: fonts.bold,
    fontSize: 12,
    lineHeight: 15,
    color: colors.orange,
  },
});
