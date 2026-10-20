import { StyleSheet, View } from "react-native";
import { CoinsPill } from "../components/CoinsPill";
import { ComingSoonCard } from "../components/ComingSoonCard";
import { PageHeader } from "../components/PageHeader";
import { Screen } from "../components/Screen";
import { TavernItemCard } from "../components/TavernItemCard";
import { player } from "../mocks/player";
import { tavernItems } from "../mocks/tavern";
import { showMessage } from "../utils/showMessage";

export function TavernScreen() {
  return (
    <Screen>
      <PageHeader
        title="Taverna da Guilda"
        subtitle="Melhore sua jornada com benefícios"
        right={<CoinsPill coins={player.coins} />}
      />

      <View style={styles.grid}>
        {tavernItems.map((item) => (
          <View key={item.id} style={styles.cell}>
            <TavernItemCard
              item={item}
              onRedeem={() =>
                showMessage("Taverna", `Você resgatou: ${item.name}.`)
              }
            />
          </View>
        ))}
        <View style={styles.cell}>
          <ComingSoonCard />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    rowGap: 12,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  cell: { width: "48%" },
});
