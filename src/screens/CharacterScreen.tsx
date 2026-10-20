import { Pressable, StyleSheet, Text, View } from "react-native";
import { CharacterShowcase } from "../components/CharacterShowcase";
import { GearItemRow } from "../components/GearItemRow";
import { Icon } from "../components/Icon";
import { PageHeader } from "../components/PageHeader";
import { Screen } from "../components/Screen";
import { StatsCard } from "../components/StatsCard";
import { TitleBadge } from "../components/TitleBadge";
import { player, playerGear, playerTitles } from "../mocks/player";
import { colors, fonts } from "../theme";
import { showMessage } from "../utils/showMessage";

export function CharacterScreen() {
  const settingsButton = (
    <Pressable
      onPress={() => showMessage("Configurações", "Em breve!")}
      accessibilityRole="button"
      accessibilityLabel="Configurações"
      style={styles.settings}
    >
      <Icon name="settings" />
    </Pressable>
  );

  return (
    <Screen>
      <PageHeader title="Personagem" right={settingsButton} />
      <CharacterShowcase player={player} />

      <View style={styles.panel}>
        <StatsCard player={player} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Títulos Desbloqueados</Text>
          <View style={styles.badges}>
            {playerTitles.map((title) => (
              <TitleBadge key={title.name} title={title} />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Equipamento Atual</Text>
          {playerGear.map((item) => (
            <GearItemRow key={item.name} item={item} />
          ))}
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  settings: {
    width: 36,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
  },
  panel: { gap: 16, paddingHorizontal: 24 },
  section: { gap: 10 },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 15,
    lineHeight: 18,
    color: colors.text,
  },
  badges: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
});
