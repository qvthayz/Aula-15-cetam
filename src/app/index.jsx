import { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function App() {
  const [lista, setLista] = useState([]);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = Boolean(nome && email && Telefone);

  function submitForm(nome, email, Telefone) {
    if (submitted === true) return null;


    const formulario = {
      nome: nome,
      email: email,
      Telefone: Telefone
    };

    setLista([...lista, formulario])
    setNome('');
    setEmail('');
    setTelefone('');
    setSubmitted(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeTexto}> Formulário</Text>
      </View>

      <View styles={styles.header}>
        <Text style={styles.title}>Entre em contato</Text>
        <Text style={styles.subtitle}>Preencha os campos abaixo xom  informação</Text>

      </View>
   <KeyboardAvoidingView behavior='padding'>

  
      

      <View style={styles.card}>

        <View style={styles.grupo}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu nome'
            value={nome}
            onChangeText={(texto) => setNome(texto)}
            textContentType='name'
          />
        </View>

        <View style={styles.grupo}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu email'
            value={email}
            onChangeText={(texto) => setEmail(texto)}
            keyboardType="email-address"
          />
        </View>


        <View style={styles.grupo}>
          <Text style={styles.label} >Telefone </Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu telefone'
            value={Telefone}
            onChangeText={(texto) => setTelefone(texto)}
            keyboardType="number-pad"
          />

        </View>
        <TouchableOpacity disabled={!submit}
          style={{
            marginTop: 8,
            backgroundColor: submitted ? '#9F9679' : '#111827',
            borderRadius: 16,
            paddingVertical: 16,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => submitForm(nome, email, Telefone)}>
          <Text style={styles.buttonText}> {submitted ? "informações salvas" : (submit ? "Enviar" : "Preencha as informações")}</Text>
        </TouchableOpacity>
      </View>
       </KeyboardAvoidingView>
    </View>

  );
}

const styles = StyleSheet.create({
  flex: {
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#e3d6bf'
  },
  header: {
    marginBottom: 24,
  },
  badgeTexto: {
    color: '#3B82F6',
    fontSize: 12,
    fontWeight: '700',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E8EEF9',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 14,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#AABAAE',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.06,
    shadowRadius: 18,
    elevation: 4,
  },
  grupo: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: '#111827',
  },
  button: {

  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
});