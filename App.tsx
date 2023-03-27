import React from "react";
import {ScrollView,View,Text} from 'react-native';
import { styles } from "./styles";

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <View style={styles.headerArea}>
            <Text style={styles.h1}>Minha jornada no React Native</Text>
            </View>
            <View style={styles.butonlike}>
                <Text style={styles.h2}>Fundamentos do React Native</Text>
            </View>
            <View style={styles.butonlike}>
                <Text style={styles.h2}>Expo e Expo CLI</Text>
            </View>
            <View style={styles.butonlike}>
                <Text style={styles.h2}>Estilizaçao com StyleSheet</Text>
            </View>
            <View style={styles.butonlike2}>
                <Text style={styles.h3}>Navegação</Text>
            </View>
            <View style={styles.butonlike2}>
                <Text style={styles.h3}>ScrollView e FlatList</Text>
            </View>
            <View style={styles.butonlike2}>
                <Text style={styles.h3}>Periféricos</Text>
            </View>
            <View style={styles.butonlike2}>
                <Text style={styles.h3}>Styled Components</Text>
            </View>
            <View  style={styles.footerArea}>
                <Text style={styles.footerText}>Criado por Luís</Text>
            </View>
        </View>
    </ScrollView>
  );
}

export default App