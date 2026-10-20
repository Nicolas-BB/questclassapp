import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { BossCard } from "../components/BossCard";
import { MissionCard } from "../components/MissionCard";
import { PlayerHeader } from "../components/PlayerHeader";
import { Screen } from "../components/Screen";
import { boss } from "../mocks/boss";
import { player } from "../mocks/player";
import { quests } from "../mocks/quests";
import { colors, fonts } from "../theme";

export function JourneyScreen() {
  const featuredQuest = quests[1];

  return (
    <Screen>
      <PlayerHeader player={player} />
      <View style={styles.main}>
        <Text style={styles.sectionTitle} accessibilityRole="header">
          MISSÃO EM DESTAQUE
        </Text>
        {featuredQuest && (
          <MissionCard
            quest={featuredQuest}
            onPress={() =>
              router.push({
                pathname: "/missao/[id]",
                params: { id: featuredQuest.id },
              })
            }
          />
        )}
        <BossCard boss={boss} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: { padding: 20, gap: 20 },
  sectionTitle: {
    fontFamily: fonts.extrabold,
    fontSize: 14,
    lineHeight: 17,
    color: colors.muted,
  },
});
