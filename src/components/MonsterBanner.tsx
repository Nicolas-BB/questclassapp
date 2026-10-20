import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { colors } from "../theme";
import { Icon } from "./Icon";

export function MonsterBanner() {
  return (
    <View style={styles.banner}>
      <Image
        source={require("../../assets/images/quest-banner.png")}
        style={styles.background}
        contentFit="cover"
        accessible={false}
      />
      <View style={styles.circle}>
        <Icon name="ghost" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: colors.bannerBackground,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.4,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: colors.purple,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(68, 71, 90, 0.6)",
  },
});
