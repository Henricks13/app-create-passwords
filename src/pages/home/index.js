import {useState} from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput } from "react-native"
import { ModalManualAdd } from "../../components/modal/ModalManualAdd";
import Slider from "@react-native-community/slider"
import React from "react"
import {ModalPassword} from "../../components/modal"
import useStorage from "../../hooks/useStorage" // Import useStorage

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function Home(){

  const { saveItem } = useStorage(); // Import saveItem from useStorage
  const[size, setSize] = useState(10)
  const[passwordValue, setPasswordValue] = useState("")
  const[modalVisible, setModalVisible] = useState(false);
  const [modalManualAddVisible, setModalManualAddVisible] = useState(false);
  const [passwordName, setPasswordName] = useState(''); // New state for password name

  function generatePassword(){
    if (!passwordName) {
      // If passwordName is empty, return from the function without saving the password
      return;
    }

    let password="";
    for(let i = 0 ,n = charset.length; i< size; i++){
      password += charset.charAt(Math.floor(Math.random()*n))
    }

    // Create an object with the name and password
    const passwordData = {
      name: passwordName,
      password: password,
    };

    setPasswordValue(password)
    setModalVisible(true);

    return passwordData; // Return the generated password data
  }

  // New save function
  const handleSave = () => {
    const passwordData = generatePassword();
    if (passwordData) {
      setPasswordValue(passwordData.password);
      setPasswordName(passwordData.name);
      setModalVisible(true);
    }
  }

  function handleManualAdd() {
    setModalManualAddVisible(true);
  }

  // New function to handle saving when "Save" is pressed in the modal
  const handleModalSave = async () => {
    if (passwordValue && passwordName) {
      const passwordData = {
        name: passwordName,
        password: passwordValue,
      };
      await saveItem("@pass", passwordData);
      setPasswordName(''); // Clear the password name field after saving
      setModalVisible(false); // Close the modal after saving
    }
  }

  return(
      <View style={styles.container}>
        <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
        />

        <TextInput
            style={styles.input}
            placeholder="Nome da senha"
            value={passwordName}
            onChangeText={setPasswordName}
        />

        <Text style={styles.title}>{size } Caracteres</Text>

        <View style={styles.area}>
          <Slider
              style={{height: 50}}
              minimumValue={6}
              maximumValue={20}
              maximumTrackTintColor="#ff0000"
              minimumTrackTintColor="#000"
              thumbTintColor="#392de9"
              value={size}
              onValueChange={(value) => setSize(value.toFixed(0))}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Gerar senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleManualAdd}>
          <Text style={styles.buttonText}>Adicionar manual</Text>
        </TouchableOpacity>

        <Modal visible={modalManualAddVisible} animationType="fade" transparent={true}>
          <ModalManualAdd handleClose={() => setModalManualAddVisible(false)}/>
        </Modal>

        <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <ModalPassword password={passwordValue} passwordName={passwordName} handleClose={() => setModalVisible(false)} handleSave={handleModalSave}/>
        </Modal>

      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems:"center"
  },

  logo:{
    marginBottom:60
  },
  area:{
    marginTop: 14,
    marginBottom:14,
    width:"80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding:8,
  },
  button:{
    backgroundColor: "#392de9",
    width: "80%",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8,
    marginBottom:18,
  },
  buttonText:{
    color: "#FFF",
    fontSize:20,
  },
  title:{
    fontSize:30,
    fontWeight:"bold",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
})