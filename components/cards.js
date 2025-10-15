import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const Cards = ({ data }) => {
  const router = useRouter();

  const handlePress = (item) => {
    router.push({
      pathname: "/(tabs)/(explorer)/(modals)/[id]",
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
    // Styles pour la modale
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
    },
    modalContainer: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      maxHeight: '90%',
      minHeight: '70%',
    },
    modalContent: {
      flex: 1,
    },
    modalImage: {
      width: '100%',
      height: 250,
    },
    modalDetails: {
      padding: 20,
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    modalLocation: {
      fontSize: 16,
      color: '#666',
      marginBottom: 8,
    },
    modalPrice: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FF6B6B',
      marginBottom: 20,
    },
    descriptionSection: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: '#666',
      lineHeight: 24,
    },
    amenitiesSection: {
      marginBottom: 20,
    },
    amenitiesList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    amenity: {
      fontSize: 14,
      color: '#4CAF50',
      marginRight: 15,
      marginBottom: 5,
    },
    modalFooter: {
      flexDirection: 'row',
      padding: 20,
      borderTopWidth: 1,
      borderTopColor: '#eee',
      gap: 10,
    },
    closeButton: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingVertical: 15,
      borderRadius: 8,
      alignItems: 'center',
    },
    closeButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#666',
    },
    bookButton: {
      flex: 1,
      backgroundColor: '#FF6B6B',
      paddingVertical: 15,
      borderRadius: 8,
      alignItems: 'center',
    },
    bookButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#fff',
    },
  });

export default Cards;
