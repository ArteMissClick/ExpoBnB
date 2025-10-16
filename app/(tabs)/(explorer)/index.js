import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Cards from "../../../components/cards";
import { useLocationsStore } from "../../../store/storeLocations";
import { fetchLocations, handleSearch } from "../../../utils/fetch";

export default function ExplorerHome() {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const { locations, filteredLocations, error, loading, lastUpdate, setLocations, setFilteredLocations, setError, setLoading } =
    useLocationsStore();

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchLocations();
      setLocations(data);
      setFilteredLocations(data);
    } catch (err) {
      setError(err.message || "Oups");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const onSearch = (nextSearch, nextPrice) => {
    setSearch(nextSearch);
    setPrice(nextPrice);
    setFilteredLocations(handleSearch(locations, nextSearch, nextPrice));
  };

  if (error) {
    return (
      <SafeAreaView style={styles.center}>
        <Text style={styles.error}>Erreur: {error}</Text>
        <Text style={styles.action} onPress={loadData}>
          Reessayer
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.page}>
      {lastUpdate ? (
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Derniere mise a jour: {lastUpdate}</Text>
        </View>
      ) : null}
      <Cards
        data={filteredLocations}
        onSearch={onSearch}
        searchTerm={search}
        maxPrice={price}
        onRefresh={loadData}
        refreshing={loading}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  error: {
    fontSize: 16,
    marginBottom: 12,
  },
  action: {
    color: "#1d4ed8",
  },
  banner: {
    padding: 12,
    backgroundColor: "#f3f4f6",
  },
  bannerText: {
    fontSize: 12,
    textAlign: "center",
  },
});
