/* eslint-disable react/react-in-jsx-scope */
import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabParamList } from "@/src/types/navigation";
import { useTheme, Text } from "react-native-paper";
import { View, StyleSheet, Platform, TouchableOpacity } from "react-native";

import AccountIcon from "../assets/svg/AccountIcon";
import HomeScreen from "../screens/home";

import AccountScreen from "../screens/account";
import HomeIcon from "../assets/svg/HomeIcon";
import SchedulesIcon from "../assets/svg/SchedulesIcon";
import ScheduleScreen from "../screens/schedules";
import TournamentsIcon from "../assets/svg/PaymentIcon";
import TournamentScreen from "../screens/tournament";



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
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-evenly',
    paddingVertical: 15,
    paddingBottom: Platform.OS === 'ios' ? 14 : 8.5,
    marginBottom: Platform.OS === 'ios' ? 23 : 10,
    marginHorizontal: Platform.OS === 'ios' ? 12 : 8.5,
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
  if (route === 'Schedules') {
    return <SchedulesIcon color={iconColor} />;
  }
  if (route === 'Tournaments') {
    return <TournamentsIcon color={iconColor} fill={iconFill} />;
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
      <HomeTab.Screen name='Schedules' component={ScheduleScreen} options={{title: 'Schedules'}} />
      <HomeTab.Screen name='Tournaments' component={TournamentScreen} options={{title: 'Tournaments'}} />
      <HomeTab.Screen name='Account' component={AccountScreen} options={{title: 'Profile'}} />
    </HomeTab.Navigator>
  )
}

export default BottomTab