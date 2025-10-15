import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Cards from "../../../components/cards";
import data from "../../../mockData";

export default function ExplorerHome() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Cards data={data} />
    </SafeAreaView>
  );
}
