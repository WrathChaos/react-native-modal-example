import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';

const App = () => {
  const [modalVisibility, setModalVisibility] = React.useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => setModalVisibility(true)}
          style={{
            height: 40,
            width: 150,
            backgroundColor: '#fff',
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            shadowRadius: 8,
            shadowOpacity: 0.3,
            shadowColor: '#757575',
            shadowOffset: {
              width: 0,
              height: 3,
            },
          }}>
          <Text style={{color: '#19191a', fontWeight: '700'}}>Open Modal</Text>
        </TouchableOpacity>
        <Modal
          isVisible={modalVisibility}
          onBackdropPress={() => setModalVisibility(false)}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              backgroundColor: '#fff',
              height: 100,
              width: '90%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: '700'}}>I am the modal content!</Text>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

export default App;
