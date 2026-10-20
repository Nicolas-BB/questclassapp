import { Tabs } from "expo-router";
import { Icon } from "../../components/Icon";
import { colors, fonts } from "../../theme";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: {
          fontFamily: fonts.semibold,
          fontSize: 11,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Jornada",
          tabBarIcon: ({ color }) => <Icon name="journey" color={color} />,
        }}
      />
      <Tabs.Screen
        name="quests"
        options={{
          title: "Missões",
          tabBarIcon: ({ color }) => <Icon name="quests" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tavern"
        options={{
          title: "Taverna",
          tabBarIcon: ({ color }) => <Icon name="tavern" color={color} />,
        }}
      />
      <Tabs.Screen
        name="character"
        options={{
          title: "Personagem",
          tabBarIcon: ({ color }) => <Icon name="character" color={color} />,
        }}
      />
    </Tabs>
  );
}
