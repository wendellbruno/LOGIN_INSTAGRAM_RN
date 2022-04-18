import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform,
         KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function App() {
  return (

    <KeyboardAvoidingView

      behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
    
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFF' translucent={false} />

      <Image source={require('./src/assets/Logo.png')}
      style={styles.logo}
      />

      <TextInput 
      placeholder='Celular, username ou email'
      style={styles.input}
      />
      <TextInput 
      placeholder='Sua Senha'
      secureTextEntry={true}
      password={true}
      style={styles.input}
      />

      <View style={styles.forgotContainer}> 
        <TouchableOpacity>
          <Text style={styles.forgotText}> Esqueceu sua senha? </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}> Acessar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookContainer}>
        <FontAwesome5 name="facebook" size={25} color="#399FFF"   />
        <Text style={styles.facebookText}>Continue como Wendell</Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={{marginHorizontal: '3%'}}> OU </Text> 
        <View style={styles.divisorLine}></View>
      </View>

      <View style={styles.cadastro}>
        <Text style={styles.cadastroTexto}>Não possui uma conta ? </Text>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#FFF',
  alignItems: 'center',
  justifyContent: 'center'
  },
  logo:{
    marginTop: Platform.OS === 'android' ? '15%' : '15%',
    marginBottom: Platform.OS === 'android' ? '5%' : '5%',
  },
  input:{
    width: '90%',
    height: 42,
    backgroundColor: '#F4F3F3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  forgotContainer:{
    width: '90%',
    alignItems: 'flex-end',
  },
  forgotText:{
    color: '#399FFF'
  },
  loginButton:{
    marginTop: '5%',
    backgroundColor: '#399FFF',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginText:{
    color: '#FFF',
    fontSize: 17,
  },
  facebookContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%'
  },
  facebookText:{
    color: '#399FFF',
    paddingLeft: 8,
    fontSize: 15
  },
  divisor:{
    marginTop: '10%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divisorLine:{
    width: '45%',
    height: 2,
    backgroundColor: '#EFEDED',
    borderRadius: 5
  },
  cadastro:{
    marginTop: '15%',
    flexDirection: 'row',
  },
  cadastroTexto:{
    color: '#C4C4C4'
  },
  buttonText:{
    color: '#399FFF',
    fontWeight: 'bold'
  }





});
