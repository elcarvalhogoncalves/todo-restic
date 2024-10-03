import {Body, Container} from "./styles";
import {Alert, Modal, Pressable, Text, View, StyleSheet} from "react-native";
type ModalCreateTaskProps = {
    modalVisible: boolean;
    handleModalCreateTask: () => void;
}

export function ModalCreateTask({ modalVisible, handleModalCreateTask }: ModalCreateTaskProps) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            handleModalCreateTask
            }}>
                        <Body>
                        <Container>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleModalCreateTask}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </Container>
                        </Body>
        </Modal>
    );
};


const styles = StyleSheet.create({


    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });