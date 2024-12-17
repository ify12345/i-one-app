import {FlatList, Image, ImageBackground, Linking, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import React, { useEffect } from 'react';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import SearchSvg from '@/src/assets/svg/searchSvg';
import { getServices } from '@/src/api/auth';

import { useAppDispatch, useAppSelector } from '@/src/redux/store';

import styles from './styles';
import TopBar from '@/src/components/TopBar';

export default function BenefitScreen() {

 const dispatch = useAppDispatch();
 useEffect(() => {
  dispatch(getServices());
}, [dispatch]);

const { services } = useAppSelector((state) => state.auth);

// Combine all services into one list (basic + complementary)
const combinedServices = [
  ...(services?.basic || []),
  ...(services?.complementary || []),
];

const renderService = ({ item }) => {
  const handlePress = () => {
    const baseUrl = 'https://studentdeal.co/';
    const fullUrl = baseUrl + item.url; // Concatenate base URL with the item's URL
    if (fullUrl) {
      // Open the concatenated URL in the default browser
      Linking.openURL(fullUrl).catch((err) => console.error('Error opening URL:', err));
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.serviceItem}>
      <Image source={{ uri: item.icon }} style={styles.serviceIcon} />
      <Text variant="titleSmall" style={styles.serviceName}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};


  return (
    <SafeAreaScreen style={styles.screen}>
      <TopBar/>
      
      {combinedServices.length > 0 ? (
      <FlatList
      data={combinedServices}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderService}
      contentContainerStyle={styles.serviceList}
      numColumns={2} 
      columnWrapperStyle={styles.columnWrapper} 
    />
    
      ) : (
        <View style={styles.emptyState}>
          <ImageBackground
            source={require('@/src/assets/images/invest.png')}
            style={styles.emptyImage}
            imageStyle={styles.img}
          />
          <Text variant="titleSmall" style={styles.emptyText}>
            No services available at the moment.
          </Text>
        </View>
      )}
    </SafeAreaScreen>
  );
}
