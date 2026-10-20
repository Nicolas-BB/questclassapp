import { ReactNode } from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme";

type ScreenProps = {
  children: ReactNode;
  // Content that stays fixed below the scroll area, like a button.
  footer?: ReactNode;
};

export function Screen({ children, footer }: ScreenProps) {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.screen} edges={["top"]}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
          {children}
        </ScrollView>
        {footer}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
    width: "100%",
    maxWidth: Platform.OS === "web" ? 390 : 600,
    backgroundColor: colors.background,
  },
  scroll: { flex: 1 },
  content: { flexGrow: 1, paddingBottom: 24 },
});
