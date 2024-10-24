import {StyleSheet, TextInputProps, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import React, {useState} from 'react';
import {Colors} from '~config/colors';
import {Entypo} from '@expo/vector-icons';
import {Text} from 'react-native-paper';
import {useAppDispatch} from '~redux/store';
import {getRoles} from '~api/auth';

interface Props extends TextInputProps {
  label: string;
  required?: boolean;
  errorMessage?: string;
  onSelect?: (value: string) => void;
}
const styles = StyleSheet.create({
  inputSection: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 2,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    height: 41,
    paddingHorizontal: 8,
  },
  input: {
    width: '95%',
    height: '100%',
    paddingVertical: 11,
  },
  inputText: {
    fontFamily: 'Avenir-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: Colors.charcoal,
  },
  errorView: {
    marginTop: 5,
    color: 'red',
  },
  dropdownButtonStyle: {
    width: 'auto',
    height: 41,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#A9AABD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  dropdownButtonTxtStyle: {
    color: '#A9AABD',
  },
  dropdownButtonArrowStyle: {
    fontFamily: 'Avenir-Regular',
    fontSize: 14,
    fontWeight: '400',
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
    fontSize: 16,
    fontWeight: '500',
    color: '#151E26',
    lineHeight: 26
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default function DropDown({label, required, errorMessage,onSelect}: Props) {
  const dispatch = useAppDispatch();
  const [roles, setRoles] = useState<{user_type_id: string; name: string}[]>([]);

  
    const fetchRoles = async () => {
      try {
        const resultAction = await dispatch(getRoles()).unwrap();
        setRoles(resultAction);
      } catch (error) {
        console.error('Failed to fetch roles:', error);
      }
    };

    fetchRoles();
 

  return (
    <SelectDropdown
      data={roles}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);

        if (onSelect) {
          onSelect(selectedItem.user_type_id);
        }
      }}
      renderButton={(selectedItem, isOpened) => (
        <View style={styles.inputSection}>
          <Text style={{color: Colors.black}}>
            {label}
            {required}
          </Text>
          <View style={styles.dropdownButtonStyle}>
            <Text style={styles.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem.name) || 'Buyer'}
            </Text>
            <Entypo name={isOpened ? 'chevron-up' : 'chevron-down'} size={19} color="#A9AABD" />
          </View>
          {errorMessage && (
            <View style={styles.errorView}>
              <Text style={{color: Colors.jasper}}>{errorMessage}</Text>
            </View>
          )}
        </View>
      )}
      renderItem={(item, index, isSelected) => (
        <View
          style={{
            ...styles.dropdownItemStyle,
            ...(isSelected && {backgroundColor: '#D2D9DF'}),
          }}>
          <Text style={styles.dropdownItemTxtStyle}>{item.name}</Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
}
