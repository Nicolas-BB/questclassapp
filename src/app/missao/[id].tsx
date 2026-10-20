import { useLocalSearchParams } from "expo-router";
import { QuestDetailScreen } from "../../screens/QuestDetailScreen";

export default function MissaoRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <QuestDetailScreen questId={id} />;
}
