/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  Image,
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import React, {ReactNode, useState} from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

import {Ionicons, Entypo} from '@expo/vector-icons';
import { Colors } from '../config/colors';


interface Props extends TextInputProps {
  label: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  error?: string | boolean;
  errorMessage?: string;
  inputComponentStyle?: StyleProp<ViewStyle>;
  required?: boolean;
  password?: boolean;
  isPhoneInput?: boolean;
  countryCodeValue?: string;
  openCountryModal?: () => void;
  selectPicker?: boolean;
  rightIcon?: ReactNode;
  pickerPressed?: () => void;
  flagUri?: string; 
  isEmailInput?: boolean; // New prop to specify if it's an email input
}

export default function InputField({
  label,
  onBlur,
  error,
  errorMessage,
  style,
  placeholder,
  onChangeText,
  value,
  keyboardType,
  autoCapitalize,
  autoComplete,
  autoCorrect,
  autoFocus,
  flagUri,
  inputComponentStyle,
  multiline,
  placeholderTextColor,
  editable = true,
  maxLength,
  required,
  password = false,
  isPhoneInput = false,
  countryCodeValue,
  openCountryModal,
  selectPicker = false,
  rightIcon,
  pickerPressed,
  isEmailInput = false, // Default to false
}: Props) {
  const {colors} = useTheme();
  const [borderColor, setBorderColor] = useState(colors.surface);
  const [hidePassword, setHidePassword] = useState(true);

  const handleOnBlur = () => {
    setBorderColor(colors.surface);
  };

  const handlePasswordVisibility = () => {
    setHidePassword(prevState => !prevState);
  };

  return (
    <View style={[styles.inputSection, style]}>
      <View>
        <Text
          variant="bodyMedium"
          style={[styles.label, {color: errorMessage ? colors.error : colors.dark}]}>
          {label}
          {required}
        </Text>
      </View>
      {!password && !isPhoneInput && !selectPicker && (
        <View
          style={[
            styles.inputContainer,
            {
              borderColor: errorMessage ? colors.error : borderColor,
              backgroundColor: colors.surface,
            },
            inputComponentStyle,
          ]}>
          <TextInput
            onFocus={() => setBorderColor(colors.primary)}
            accessibilityLabel={label}
            onBlur={error ? onBlur : handleOnBlur}
            style={[styles.input, styles.inputText, {width: '100%'}]}
            cursorColor={colors.primary}
            autoCapitalize={autoCapitalize}
            onChangeText={onChangeText}
            value={value}
            autoComplete={autoComplete}
            autoCorrect={autoCorrect}
            autoFocus={autoFocus}
            keyboardType={keyboardType}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor || colors.onSurface}
            multiline={multiline}
            editable={editable}
            maxLength={maxLength}
          />
        </View>
      )}
      {password && (
        <View
          style={[
            styles.inputContainer,
            inputComponentStyle,
            {
              borderColor: errorMessage ? colors.error : borderColor,
              backgroundColor: colors.surface,
            },
            inputComponentStyle,
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5, flex: 1}}>
            <TextInput
              onFocus={() => setBorderColor(colors.primary)}
              accessibilityLabel={label}
              onBlur={error ? onBlur : handleOnBlur}
              style={[styles.input, styles.inputText]}
              cursorColor={colors.primary}
              autoCapitalize="none"
              onChangeText={onChangeText}
              value={value}
              secureTextEntry={hidePassword}
              autoFocus={autoFocus}
              keyboardType={keyboardType}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor || colors.onSurface}
              multiline={multiline}
              editable={editable}
              maxLength={maxLength}
            />
          </View>
          <Pressable hitSlop={20} onPress={handlePasswordVisibility}>
            <Ionicons name={!hidePassword ? 'eye' : 'eye-off'} size={16} color={colors.onSurface} />
          </Pressable>
        </View>
      )}
      {/* ... other input types (phone input, picker, etc.) remain unchanged */}
    </View>
  );
}


const styles = StyleSheet.create({
  inputSection: {
    marginBottom: 24,
  },
  label: {
    marginBottom: 2,
    color: 'black',
    fontFamily: 'Avenir-Regular',
    fontSize: 14,
    fontWeight: '400',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: 52,
    // paddingHorizontal: 8,
    gap:5,
    backgroundColor: 'white', // Add a background color if needed
    shadowColor: '#737373', // The color of the shadow
    shadowOffset: { width: 0, height: 2 }, // X and Y offset
    shadowOpacity: 0.3, // Approximate opacity from the hex value (4D = ~30% opacity)
    shadowRadius: 4, // Blur radius
    elevation: 4, // For Android (since shadow properties only work on iOS)
    padding: 10,
    borderRadius: 8,
    
  },
  input: {
    width: '95%',
    height: '100%',
    alignItems: 'center',
    // paddingVertical: 11,
  },
  inputText: {
    fontFamily: 'Avenir-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: Colors.charcoal,
  },
  errorView: {
    marginTop: 5,
  },
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
