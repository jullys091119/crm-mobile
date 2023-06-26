import { React, useState, useEffect, useContext} from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import { Layout, Input, Button, Icon, Text } from '@ui-kitten/components';
import { Context } from '../appcontext/AppContext';
export default function Login({navigation}) {

  const {login, valueEmail, valuePassword, logout} = useContext(Context)
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginBtn = () => {
    login()
  }

  const logoutBtn = () => {
    logout()
  
  }

  const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline'/>
  );

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };


  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>Should contain at least 8 symbols</Text>
      </View>
    )
  }
  
  return (
    <Layout style={styles.container}>
      <Layout style={styles.boxlogo}>
        <Image
        style={styles.logo}
        source={require("../assets/logo_crm.png")}
        >
        </Image>
      </Layout>

      <Layout style={styles.form}>
        <Input
          value={valueEmail}
          label='Email'
          placeholder='Email'
          onChangeText={textEmail => setEmail(textEmail)}
          style={styles.inputEmail}
        />
      
        <Input
          value={valuePassword}
          label='Password'
          placeholder='Contraseña'
          caption={renderCaption}
           //accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={textPassword => setPassword(textPassword)}
          style={styles.inputPassword}
        />

        <Layout>
          <Button 
            style={styles.button} status='primary'
            onPress={() => loginBtn()}
            >
            Enviar
          </Button>
          <Button 
            style={styles.button} status='primary'
            onPress={() => logoutBtn()}
            >
            Desloguea
          </Button>
          <Text style={styles.text}>Olvidaste tu Contraseña ?</Text>
        </Layout>
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop: 0,
   height: 1000,
   backgroundColor: 'white'
  },

  logo: {
    width: 170,
    height: 110,
    marginBottom: 20
  },

  boxlogo: {
    height: 'auto',
    marginTop: 190,
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
  },
  
  form: {
    Width: 350,
    height: 460,
  },

  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5
  },

  captionText: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "opensans-regular",
    color: "#8F9BB3",
  },

  inputEmail: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    borderRadius: 12
  },
  
  inputPassword: {
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 12
  },

  button: {
    backgroundColor: 'black',
    width: 150,
    borderRadius: 100,
    marginTop: 30,
    borderColor: 'transparent',
    alignSelf: 'center'
  },

  text: {
    marginTop: 10,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5
  },
  captionText: {
    marginLeft: 30,
    marginRight: 30,
    fontSize: 12,
    fontWeight: "400",
    color: "#8F9BB3",
  }
});