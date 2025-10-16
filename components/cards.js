import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const Cards = ({ data }) => {
  const router = useRouter();

  const handlePress = (item) => {
    router.push({
      pathname: "/(tabs)/(explorer)/product/[id]",
      params: { id: item.id },
    });
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.userCard}
          onPress={() => handlePress(item)}
        >
          <Image
            source={{ uri: item.image }}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.userName}>{item.title}</Text>
          <Text style={styles.userAge}>
            {item.city} • {item.price} €/nuit
          </Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
    userCard: {
      backgroundColor: '#DDDDDD',
      marginBottom: 15,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
      overflow: 'hidden',
    },
    cardImage: {
      width: '100%',
      height: 150,
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 5,
      paddingHorizontal: 15,
      paddingTop: 12,
    },
    userAge: {
      fontSize: 14,
      color: '#666',
      paddingHorizontal: 15,
      paddingBottom: 15,
    },
    contentContainer: {
      paddingHorizontal: 16,
      paddingVertical: 16,
    },
  });

export default Cards;
