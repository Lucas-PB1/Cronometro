import { useState } from 'react';
import cronometro from './src/cronometro.png';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  [numero, setNumero] = useState(0);
  [timer, setTimer] = useState(null);
  [botao, setBotao] = useState('Iniciar');
  [historico, setHistorico] = useState(0);

  const iniciar = () => {
    if (timer != null) {
      clearInterval(timer);
      setTimer(null);
      setBotao('Iniciar');
    } else {
      setTimer(setInterval(() => { setNumero(numero + 0.1) }, 100));
      setBotao('Pausar');
    }
  };

  const zerar = () => {
    clearInterval(timer);
    setTimer(null);
    setBotao('Iniciar');
    setHistorico(numero);
    setNumero(0);
  };

  return (
    <View style={styles.container}>
      <Image source={cronometro} style={styles.cronometro} />
      <Text style={styles.timer}>{numero.toFixed(1)}</Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnTexto}>
            {botao}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={zerar}>
          <Text style={styles.btnTexto}>
            Zerar
          </Text>
        </TouchableOpacity>

      </View>
      <Text style={styles.result}>Último Resultado</Text>
      <Text style={styles.resultNumber}>{historico.toFixed(1)}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  timer: {
    marginTop: -160,
    color: 'white',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 80,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  result: {
    color: 'white',
    fontSize: 25,
    marginTop: 50,
  },
  resultNumber: {
    color: 'white',
    fontSize: 25,
    marginTop: 10,
  }
});
