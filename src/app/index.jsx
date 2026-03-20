import { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Formulario } from "./componenetes/Formulario"
import { Item } from '../componenetes/item';

export default function App() {
  const [lista, setLista] = useState([
    {
      nome: "Thayzza",
      email: "thayzzadesouza@gmail.com",
      telefone: "(92) 993561921"
    },
    {
      nome: "luana",
      email: "luana@gmail.com",
      telefone: "(92) 9888775544"
    }
  ]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Formulario lista={lista} setLista={setLista} />

      </ScrollView>
      <FlatList
        data={lista}
        keyExtractor={(item, index) => index + item.nome}
        renderItem={({ item, index }) => {
          <Item
            key={index + item.nome}
            nome={item.nome}
            email={item.email}
            telefone={item.telefone}
          />
        }}
      />
    </View>
  );
}



const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

