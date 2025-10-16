import { useRouter } from "expo-router";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Cards({ data, onSearch, searchTerm, maxPrice, onRefresh, refreshing }) {
  const router = useRouter();

  const openDetails = (item) => {
    router.push({ pathname: "/(tabs)/(explorer)/product/[id]", params: { id: String(item.id) } });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => openDetails(item)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.caption}>
        {item.city} - {item.price} EUR/nuit
      </Text>
      {item.rating ? <Text style={styles.caption}>Note: {item.rating} ({item.reviews} avis)</Text> : null}
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={renderItem}
      ListHeaderComponent={
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            value={searchTerm}
            placeholder="Ville ou titre"
            onChangeText={(text) => onSearch(text, maxPrice)}
          />
          <TextInput
            style={styles.input}
            value={maxPrice}
            placeholder="Prix max"
            onChangeText={(value) => onSearch(searchTerm, value)}
            keyboardType="numeric"
          />
        </View>
      }
      ListEmptyComponent={<Text style={styles.empty}>Aucun logement pour l'instant.</Text>}
      contentContainerStyle={styles.list}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  search: {
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#eee",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  image: {
    height: 160,
    backgroundColor: "#ddd",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    padding: 12,
  },
  caption: {
    paddingHorizontal: 12,
    paddingBottom: 8,
    color: "#444",
  },
  empty: {
    textAlign: "center",
    color: "#555",
    marginTop: 24,
  },
});
