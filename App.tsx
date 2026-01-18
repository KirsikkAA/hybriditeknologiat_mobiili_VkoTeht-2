import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import React, {useState} from 'react';

export default function App() {
const [ModalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.showText}>Show modal message</Text>
      </Pressable>

      <Modal
      animationType='slide'
      transparent={true}
      visible={ModalVisible}
      onRequestClose={() => {
        setModalVisible(false)
      }}>

      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>This is modal :3</Text>

          <Pressable
          style={styles.closeButton}
          onPress={() => setModalVisible(false)}>
          <Text style={styles.closeText}>Close</Text>
          </Pressable>

          </View>
        </View>
        </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  showText:{
    fontSize: 16,
    fontWeight: '500'
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',

  },
  modalView:{
    width: '90%',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',

  },
  modalText:{
    marginBottom: 15,
    fontWeight: '500'
  }, 
  closeButton:{
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeText:{
    fontWeight: '500'
  }
});
