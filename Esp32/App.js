import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Switch, TouchableOpacity } from 'react-native';
import Header from './componentes/Header'; // Certifique-se de ajustar o caminho conforme necessário
import Footer from './componentes/Footer'; // Certifique-se de ajustar o caminho conforme necessário
import React from 'react';
import { useState } from 'react';
import {MaterialIcons} from '@expo/vector-icons'
import axios from 'axios'; // vai disparar as informações para o expo 32



export default function App() {

  //led vermelha
  const [isEnable, setIsEnable] = useState(false)

  const isSwitch = () => {
    setIsEnable(previousState => !previousState)
  }

  const ledVermelha = () => {
    if(isEnable = false){
      axios.get('endereço esp/on').then(Response => {
        console.log('led vermelha ligada')
      })
    } else{
      axios.get('endereço esp/off').then(Response => {
        console.log('led Vermelha desligada')
      })
    }
  }

  //led Verde
  const [isEnable2, setIsEnable2] = useState(false)

  const isSwitch2 = () => {
    setIsEnable2(previousState => !previousState)
  }

  const ledVerde = () => {
    if(isEnable2 = false){
      axios.get('endereço esp/onGreen').then(Response => {
        console.log('led verde ligada')
      })
    } else{
      axios.get('endereço esp/offGreen').then(Response => {
        console.log('led Verde desligada')
      })
    }
  }


  const [dhtUmi, setdhtUmi] = useState('--')
  const [dhtTemp, setdhtTemp] = useState('--')

  const umidade = () => {
    axios.get('endereço esp/dht11/umidade').then(Response =>{
      setdhtUmi(dhtUmidade => Response.data)
      console.log('dados de Umidade recuperados com sucesso')
    })
  }
  const temperatura = () => {
    axios.get('endereço esp/dht11/tempteratura').then(Response =>{
      setdhtTemp(dhtTemperatura => Response.data)
      console.log('dados de temperatura recuperados com sucesso')
    })
  }


  return (
    <>
      <StatusBar/>
        <Header title="Automação com Esp32 Wroom-32" />
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.status}>
              <Text style={styles.titulo}>Led Vermelha</Text>
              <Text style={isEnable ? styles.ON : styles.OFF}>{isEnable ? 'LIGADO' : 'DESLIGADO'}</Text>
              <Switch
              onChange={ledVermelha}
              onValueChange={isSwitch}
              value={isEnable}
              />
            </View>
            <View style={styles.status}>
              <Text style={styles.titulo}>Led Verde</Text>
              <Text style={isEnable2 ? styles.ON : styles.OFF}>{isEnable2 ? 'LIGADO' : 'DESLIGADO'}</Text>
              <Switch
              onChange={ledVerde}
              onValueChange={isSwitch2}
              value={isEnable2}
              />
            </View>

            <Text style={styles.titulo}>Umidade</Text>

            
            <View style={styles.status}>
              <Text style={styles.detalhes}>Medida: <Text style={styles.value}>{dhtUmi}</Text>%</Text>
              <View style={styles.button}>
                  <TouchableOpacity onPress={umidade}>
                    <MaterialIcons name='sync' size={45} color={'#fff'}/>
                  </TouchableOpacity>
              </View>
            </View>
            
            <Text style={styles.titulo}>Temperatura</Text>
                  
            <View style={styles.status}>
              <Text style={styles.detalhes}>Medida: <Text style={styles.value}>{dhtTemp}</Text>º</Text>
              <View style={styles.button}>
              <TouchableOpacity onPress={temperatura}>
                    <MaterialIcons name='sync' size={45} color={'#fff'}/>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <Footer text=" " />
      <Text>Versão alfa 0.1</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 25
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25,
    
  },
  detalhes: {
    fontSize: 20,
    textAlign: 'justify',
    color: '#696969',
  },
  status: {
    flexDirection: 'row',
    justifyContent:"space-around",
  },
  ON :{
    fontSize:15,
    textAlign: 'justify',
    marginTop: 15,
    color: '#2ecc71',
    fontWeight: 'bold',
  },
  OFF :{
    fontSize:15,
    textAlign: 'justify',
    marginTop: 15,
    color: '#cc4040',
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#2ecc71',
    marginTop: 25,
    borderRadius: 4,
  },
  value: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#4b8b3b'
  }
});
