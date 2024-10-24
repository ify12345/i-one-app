/* eslint-disable react/react-in-jsx-scope */
import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabParamList } from "@/src/types/navigation";
import { useTheme, Text } from "react-native-paper";
import { View, StyleSheet, Platform, TouchableOpacity } from "react-native";




import BenefitsIcon from "../assets/svg/BenefitsIcon";
import PaymentIcon from "../assets/svg/PaymentIcon";
import AccountIcon from "../assets/svg/AccountIcon";
import HomeScreen from "../screens/home";
import BenefitScreen from "../screens/benefit";
import PaymentScreen from "../screens/payment";
import AccountScreen from "../screens/account";
import HomeIcon from "../assets/svg/HomeIcon";


const HomeTab = createBottomTabNavigator<HomeTabParamList>()

const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Inter_400Regular',
    fontSize: 10,
    marginTop: 4
  },
  tabBar: {
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-evenly',
    paddingVertical: 15,
    paddingBottom: Platform.OS === 'ios' ? 24 : 8.5,
    marginBottom: Platform.OS === 'ios' ? 43 : 10,
    marginHorizontal: Platform.OS === 'ios' ? 16 : 8.5,
    borderRadius: 18
  },
  tabItem: {
    alignSelf: 'center',
   
  },
});

// eslint-disable-next-line consistent-return
const renderIcon = ({route, isFocused}: {route: string; isFocused: boolean}) => {
  const {colors} = useTheme();
  const iconColor = isFocused ? colors.primary : colors.onSurface;
  const iconFill = isFocused ? colors.primary : colors.onSurface;
  if (route === 'Home') {
    return <HomeIcon color={iconColor} />;
  }
  if (route === 'Benefits') {
    return <BenefitsIcon color={iconColor} />;
  }
  if (route === 'Payment') {
    return <PaymentIcon color={iconColor} fill={iconFill} />;
  }
  if (route === 'Account') {
    return <AccountIcon color={iconColor} />;
  }

};

function CustomTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {colors} = useTheme()

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <View style={[styles.tabBar, {backgroundColor: colors.background}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
         // eslint-disable-next-line no-nested-ternary
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const focusedTabItemStyle = {
          
        };
        const labelStyle = {
          color: isFocused ? colors.primary : colors.onSurface
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
          >
            <View style={[styles.tabItem, isFocused && focusedTabItemStyle]}>
              {renderIcon({route: route.name, isFocused})}
            </View>
            <Text style={[styles.label, labelStyle]}>
                {label as string}
              </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

function BottomTab() {
 
  return (
    <HomeTab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false
      }}
    >
      <HomeTab.Screen name='Home' component={HomeScreen} options={{title:'Home'}} />
      <HomeTab.Screen name='Benefits' component={BenefitScreen} options={{title: 'Benefits'}} />
      <HomeTab.Screen name='Payment' component={PaymentScreen} options={{title: 'Payment'}} />
      <HomeTab.Screen name='Account' component={AccountScreen} options={{title: 'Profile'}} />
    </HomeTab.Navigator>
  )
}

export default BottomTab