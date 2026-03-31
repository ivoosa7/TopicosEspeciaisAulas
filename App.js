import { useRef } from 'react';
import { StyleSheet, Text, View, Pressable, Animated } from 'react-native';

const CARD_COLORS = ['#E8F5E9', '#E3F2FD', '#FFF3E0', '#FCE4EC'];
const CARD_TITLES = ['Início de Turno', 'Saída Almoço', 'Volta Almoço', 'Fim de Turno'];

function CardComAnimacao({ color, title }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const animarPressionar = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.92,
      useNativeDriver: true,
      speed: 80,
      bounciness: 6,
    }).start();
  };

  const animarSoltar = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 80,
      bounciness: 8,
    }).start();
  };

  return (
    <Pressable
      onPressIn={animarPressionar}
      onPressOut={animarSoltar}
      onPress={() => {}}
    >
      <Animated.View
        style={[
          styles.card,
          { backgroundColor: color, transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Melky3Aula - Registro de Ponto</Text>
      <View style={styles.grid}>
        {CARD_COLORS.map((color, index) => (
          <CardComAnimacao
            key={index}
            color={color}
            title={CARD_TITLES[index]}
          />
        ))}
      </View>
    </View>
  );
}

const CARD_SIZE = 150;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    marginTop: 48,
  },

  card: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    margin: 8,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
