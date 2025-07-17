import { Box } from '@/components/Box';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Eye, EyeOff, MapPinned } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SignIn() {
  const router = useRouter();
  // const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    // if (!(email && password)) {
    //   Alert.alert("Connexion", "Veuillez remplir tous les champs");
    //   return;
    // }
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   Alert.alert("Adresse e-mail invalide", "Veuillez entrer une adresse e-mail valide.");
    //   return;
    // }

    // setLoading(true);

    // const response = await login(email, password);

    // if (!response.succes) {
    //   setLoading(false);

    //   Alert.alert("Connexion", response.msg);
    //   return;
    // }

    // router.push('messages');
  };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {loading && (
        <View style={styles.overlay}>
          {/* <ActivityIndicator size="large" color="#fff" /> */}
        </View>
      )}

      <Box style={styles.content}>
        <StatusBar style='dark' />
        <Box style={styles.header}>
          <MapPinned size={48} color="#0c3141" />
          <Text style={styles.title}>Connexion</Text>
          <Text style={styles.subtitle}>Connectez-vous pour continuer</Text>
        </Box>

        <Box style={styles.form}>
          <Box style={styles.inputContainer}>
            <Text style={styles.label}>Adresse e-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Entrez votre adresse e-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              editable={!loading} 
            />
          </Box>

          <Box style={styles.inputContainer}>
            <Text style={styles.label}>Mot de passe</Text>
            <Box style={styles.passwordField}>
              <TextInput
                style={[styles.input, { flex: 1, borderWidth: 0, backgroundColor: 'transparent' }]}
                placeholder="Entrez votre mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                editable={!loading} 
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} disabled={loading}>
                {showPassword ? (
                  <EyeOff size={20} color="#999" />
                ) : (
                  <Eye size={20} color="#999" />
                )}
              </TouchableOpacity>
            </Box>
          </Box>
          
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => {
              Alert.alert("Fonctionnalité non disponible", "Nous travaillons actuellement sur l'implémentation de cette fonctionnalité. Merci de votre patience.");
            }}
            disabled={loading}
          >
            <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.loginButton, loading && styles.loginButtonLoading]}
            onPress={handleLogin}
            disabled={loading} 
          >
            {loading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Text style={styles.loginButtonText}>Se connecter</Text>
            )}
          </TouchableOpacity>

        </Box>

        <Box style={styles.footer}>
          <Text style={styles.footerText}>Vous n'avez pas de compte ? </Text>
          <TouchableOpacity onPress={() => { router.replace("auth/signUp"); }}>
            <Text style={styles.signupText}>S'inscrire</Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1A1A1A',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  form: {
    gap: 16,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  input: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#F8F8F8',
  },
  passwordField: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingRight: 16,
    backgroundColor: '#F8F8F8',
    height: 48,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 14,
  },
  loginButton: {
    height: 48,
    backgroundColor: '#0c3141',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row', // Ajouté pour aligner texte et l'indicateur de chargement
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginButtonLoading: {
    backgroundColor: '#4f6d7a', // Changer la couleur de fond pendant le chargement
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
  signupText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '600',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
