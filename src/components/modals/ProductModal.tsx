import React, {useState, useRef} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Button,
  Image,
  FlatList,
  Animated,
  PanResponder,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import Warning from '~assets/svg/WarningSvg';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import {Colors} from '~config/colors';
import CustomButton from '~components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;

const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalFlatlist: {
    paddingBottom: 20,
  },
  DealsitemContainer: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 15,
    marginHorizontal: 5, // Space between items horizontally
  },
  DealsImgPlaceholder: {
    width: '100%',
    height: 90,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  StyleImg: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 7,
    backgroundColor: '#fff',
    borderWidth: 0.2,
    borderColor: '#fefefe',
    shadowColor: '#000',
    shadowOffset: {
      width: 0.95,
      height: 0.95,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5.72,
    elevation: 3,
  },
  buttonContainer: {
    marginTop: 10,
  },
  header: {
    backgroundColor: '#F0FFEB',
    paddingVertical: 5,
    paddingHorizontal: 33,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    height: 72,
    marginBottom: 21,
  },
  location: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  warning: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 12,
    padding: 16,
    gap:4
  },
  warningText: {
    flexDirection: 'row',
    gap: 9,
  },
  message: {
    backgroundColor: '#F6F9F7',
    padding: 16,
    gap: 16,
  },
});

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  data: any[];
}

// eslint-disable-next-line react/function-component-definition
const ProductModal: React.FC<ProductModalProps> = ({visible, onClose, data}) => {
  const [modalHeight, setModalHeight] = useState(screenHeight * 0.4); // Initial modal height
  const [currentPage, setCurrentPage] = useState(0); // State to manage page navigation in the modal
  const pan = useRef(new Animated.ValueXY()).current;
  const navigation = useNavigation()
  const message = ()=>{
    navigation.navigate('Chat')
    onClose()
  }
  // PanResponder to handle drag gestures for modal resizing
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dy < 0 && modalHeight <= screenHeight * 0.8) {
          setModalHeight(modalHeight - gestureState.dy);
        } else if (gestureState.dy > 0 && modalHeight >= screenHeight * 0.3) {
          setModalHeight(modalHeight - gestureState.dy);
        }
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  // Function to render products
  const renderProducts = ({item}) => {
    const {uri, title, description} = item;
    return (
      <TouchableOpacity onPress={() => setCurrentPage(1)} style={modalStyles.DealsitemContainer}>
        <View style={modalStyles.DealsImgPlaceholder}>
          <Image resizeMode="cover" source={uri} style={modalStyles.StyleImg} />
        </View>
        <View style={modalStyles.content}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>{title}</Text>
          <Text style={{color: 'black', fontSize: 10}}>{description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Different pages for the modal
  const renderModalContent = () => {
    switch (currentPage) {
      case 0:
        return (
          <>
            <View style={modalStyles.header}>
              <Text style={{color: 'black', fontSize: 20}}>Popular Product in Balogun Market</Text>
            </View>
            <FlatList
              data={data}
              renderItem={renderProducts}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              numColumns={3}
              contentContainerStyle={modalStyles.modalFlatlist}
            />
          </>
        );
      case 1:
        return (
          <View style={{padding: 24, justifyContent: 'space-between', flex: 1}}>
            <View>
              <Text variant="titleLarge" style={{color: 'black', fontSize: 16}}>
                Searching for Market Assistants near Balogun Market...
              </Text>
              <View style={modalStyles.location}>
                <Ionicons name="location-outline" size={16} color="#575967" />
                <Text variant="titleLarge" style={{fontSize: 12}}>
                  Bamidele Eletu Avenue Osapa London
                </Text>
              </View>
            </View>

            <View style={modalStyles.warning}>
              <Text variant="titleLarge" style={{color: 'black', fontSize: 16, lineHeight: 17}}>
                Safety Tips
              </Text>
              <View style={modalStyles.warningText}>
                <Warning />
                <Text
                  variant="titleSmall"
                  style={{color: 'black', fontSize: 12, flexShrink: 1, lineHeight: 15}}>
                  Note: Always meet your assistant in a public place and avoid sharing personal
                  information. If something feels off, trust your instincts and report any concerns
                  immediately.
                </Text>
              </View>
            </View>

            {/* Add more details or content for the second screen */}
            <Button title="Back" onPress={() => setCurrentPage(2)} color={Colors.paleGreen} />
          </View>
        );
      case 2:
        return (
          <View style={{padding: 20, justifyContent: 'space-between', gap: 16}}>
            <View>
              <Text variant="titleSmall" style={{color: 'black', fontSize: 20}}>
                Market Assistant Connected
              </Text>
              <Text variant="titleSmall" style={{fontSize: 16}}>
                Get in touch with your assistant to find what you need
              </Text>
            </View>
            <View style={modalStyles.message}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 21,
                  borderBottomWidth: 3,
                  borderBottomColor: '#DADADA',
                }}>
                <View style={{flexDirection: 'row', gap: 8, flex: 1}}>
                  <View style={{height: 64, width: 64, borderRadius: 100, borderWidth: 1}} />
                  <View>
                    <Text variant="titleSmall" style={{fontSize: 16, color: 'black'}}>
                      Assistant Name
                    </Text>
                    <Text variant="titleSmall" style={{fontSize: 16, color: 'black'}}>
                      Fashion Specialist
                    </Text>
                    <Text variant="titleSmall" style={{fontSize: 16, marginTop: 16}}>
                      4.5 / 2,256
                    </Text>
                  </View>
                </View>
                <TouchableOpacity onPress={()=>message()}>
                  <FontAwesome name="phone-square" size={30} color={Colors.paleGreen} />
                </TouchableOpacity>
              </View>
              <View style={{gap:8}}>
                <View style={{gap:8,flexDirection:'row',justifyContent:'space-between'}}>
                  <Text variant="titleSmall" style={{fontSize: 16, color: 'black'}}>
                    Reviews
                  </Text>
                  <EvilIcons name="chevron-down" size={24} color="black" />
                </View>
                <View style={modalStyles.warning}>
                  <Text variant="titleSmall" style={{fontSize: 16, color: 'black'}}>
                    John A.
                  </Text>
                  <Text variant="titleSmall" style={{fontSize: 14, color: 'black'}}>
                    Rating:
                  </Text>
                  <Text variant="titleSmall" style={{fontSize: 12, color: 'black',fontWeight:400}}>
                  Adeola Johnson was incredibly helpful! he knew exactly where to find the items I needed, and he even negotiated great prices for me. Highly recommended
                  </Text>
                </View>
                <View style={modalStyles.warning}>
                  <Text variant="titleSmall" style={{fontSize: 16, color: 'black'}}>
                    John A.
                  </Text>
                  <Text variant="titleSmall" style={{fontSize: 14, color: 'black'}}>
                    Rating:
                  </Text>
                  <Text variant="titleSmall" style={{fontSize: 12, color: 'black',fontWeight:400}}>
                  Adeola Johnson was incredibly helpful! he knew exactly where to find the items I needed, and he even negotiated great prices for me. Highly recommended
                  </Text>
                </View>
              </View>
            </View>

            <View style={{gap: 16}}>
              <CustomButton primary title="Chat with your Market Assistant " />
              <CustomButton
                style={{borderColor: Colors.paleGreen, borderWidth: 1}}
                onPress={() => setCurrentPage(1)}
                title="I don’t need a market assistant any more "
              />
            </View>

            <View style={modalStyles.warning}>
              <Text variant="titleLarge" style={{color: 'black', fontSize: 16, lineHeight: 17}}>
                Safety Tips
              </Text>
              <View style={modalStyles.warningText}>
                <Warning />
                <Text
                  variant="titleSmall"
                  style={{color: 'black', fontSize: 12, flexShrink: 1, lineHeight: 15}}>
                  Note: Always meet your assistant in a public place and avoid sharing personal
                  information. If something feels off, trust your instincts and report any concerns
                  immediately.
                </Text>
              </View>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={modalStyles.modalContainer}>
        <Animated.View
          style={[modalStyles.modalContent, {height: modalHeight}]}
          {...panResponder.panHandlers}>
          {renderModalContent()}
          {/* <View style={modalStyles.buttonContainer}>
            <Button title="Close Modal" onPress={onClose} color="#D32F2F" />
          </View> */}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ProductModal;
