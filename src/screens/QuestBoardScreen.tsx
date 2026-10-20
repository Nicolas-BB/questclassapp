import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { FilterChip } from "../components/FilterChip";
import { QuestListItem } from "../components/QuestListItem";
import { Screen } from "../components/Screen";
import { quests } from "../mocks/quests";
import { colors, fonts } from "../theme";

const filters = ["Todas", "Disponíveis", "Aceitas", "Enviadas"];

export function QuestBoardScreen() {
  const [selectedFilter, setSelectedFilter] = useState("Todas");

  const visibleQuests = quests.filter((quest) => {
    if (selectedFilter === "Disponíveis") return quest.status === "Disponível";
    if (selectedFilter === "Aceitas") return quest.status === "Aceita";
    if (selectedFilter === "Enviadas") return quest.status === "Enviada";
    return true;
  });

  return (
    <Screen>
      <View style={styles.header}>
        <Text style={styles.title} accessibilityRole="header">
          Mural de Missões
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
        >
          {filters.map((filter) => (
            <FilterChip
              key={filter}
              label={filter}
              selected={filter === selectedFilter}
              onPress={() => setSelectedFilter(filter)}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.list}>
        {visibleQuests.map((quest) => (
          <QuestListItem
            key={quest.id}
            quest={quest}
            onPress={() =>
              router.push({
                pathname: "/missao/[id]",
                params: { id: quest.id },
              })
            }
          />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { gap: 12, paddingHorizontal: 20, paddingVertical: 16 },
  title: {
    fontFamily: fonts.extrabold,
    fontSize: 22,
    lineHeight: 27,
    color: colors.text,
  },
  filters: { gap: 8 },
  list: { gap: 12, paddingHorizontal: 20 },
});
