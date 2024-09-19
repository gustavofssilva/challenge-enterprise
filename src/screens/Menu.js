import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Platform, Linking } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  // Função para abrir links em uma nova aba (web) ou no navegador padrão (mobile)
  const openLink = (url) => {
    if (Platform.OS === 'web') {
      // Para a web, abre em uma nova aba
      window.open(url, '_blank');
    } else {
      // Para mobile, abre no navegador padrão
      Linking.openURL(url);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/fotos-gratis/fundo-azul-do-gradiente-de-luxo-abstrato-liso-azul-escuro-com-vinheta-preta-studio-banner_1258-54583.jpg?w=740&t=st=1726762697~exp=1726763297~hmac=bd5b956e575ca304078c0107eb121dc15d49b173d457dfa389e2b2debb4fd184' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Seus aplicativos</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openLink('https://teams.microsoft.com')}
        >
          <Text style={styles.buttonText}>Teams</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openLink('https://zoom.us')}
        >
          <Text style={styles.buttonText}>Zoom</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openLink('https://www.workplace.com')}
        >
          <Text style={styles.buttonText}>Workplace</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openLink('https://workspace.google.com/intl/pt-BR/lp/calendar/?utm_source=google&utm_medium=cpc&utm_campaign=latam-BR-all-es-dr-BKWS-all-all-trial-p-dr-1707806-LUAC0020236&utm_content=text-ad-none-any-DEV_c-CRE_692948977807-ADGP_Hybrid%20%7C%20BKWS%20-%20PHR%20%7C%20Txt-General-Calendar-KWID_43700079700023225-kwd-12409483885&utm_term=KW_agenda%20google-ST_agenda%20google&gad_source=1&gclid=CjwKCAjwl6-3BhBWEiwApN6_kud6OkYI1wRHuc2KsUCvbufoRJgQOVE_fLewczS0hMjUN1mb-70-ChoCNVQQAvD_BwE&gclsrc=aw.ds')}
        >
          <Text style={styles.buttonText}>Agenda</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF', // Cor do texto pode ser ajustada para contraste com o fundo
  },
  button: {
    width: width * 0.8,
    backgroundColor: '#FF6F61',
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
