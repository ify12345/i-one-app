import React, { useEffect } from 'react';
import { FlatList, Image, ImageBackground, Linking, TouchableOpacity, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import SafeAreaScreen from '@/src/components/SafeAreaScreen';
import SearchSvg from '@/src/assets/svg/searchSvg';
import Fontisto from '@expo/vector-icons/Fontisto';
import CustomButton from '@/src/components/CustomButton';
import styles from './styles';
import { useAppDispatch, useAppSelector } from '@/src/redux/store';
import { getServices } from '@/src/api/auth';

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

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
        <Text variant="bodySmall" style={styles.serviceFee}>
          Fee: ${item.fee}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaScreen style={styles.screen}>
      {/* Top Header */}
      <View style={styles.top}>
        <SearchSvg />
        <ImageBackground
          source={require('@/src/assets/images/logo_1.png')}
          style={styles.imgBackground}
          imageStyle={styles.logo}
        />
        <Fontisto name="bell" size={24} color="black" />
      </View>

      {/* Services Section */}
      <View style={styles.service}>
        <ImageBackground
          source={require('@/src/assets/images/invest.png')}
          style={styles.imgBackground2}
          imageStyle={styles.img}
        />
        <Text variant="titleMedium" style={{ color: 'black' }}>
          My Services
        </Text>
        <CustomButton
          style={styles.btn}
          title="Request More Service"
          titleStyle={{ color: 'white' }}
        />
      </View>

      {/* Services List or Fallback */}
      {combinedServices.length > 0 ? (
        <FlatList
          data={combinedServices}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderService}
          contentContainerStyle={styles.serviceList}
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
