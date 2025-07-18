import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { Eye, EyeOff, MapPinned } from 'lucide-react-native';

import { useSession } from "../../context/authContext";

const LoginScreen = () => {
  const { signIn } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log("EMAIL :", email);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const responseLogin = await signIn(email, password);
      console.log("RESPONSE FROM LOGIN :", responseLogin);
      // if (responseLogin.session) {
      //   router.replace("/");
      // }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.inner}
        >
          {/* En-tête et Logo */}
          <View style={styles.header}>
            <Text style={styles.title}>Bienvenue</Text>
            <Text style={styles.subtitle}>Connectez-vous pour continuer</Text>
          </View>

          {/* Formulaire */}
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Eye
                size={20}
                color="white"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <MapPinned
                size={20}
                color="white"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                {showPassword ? (
                  <EyeOff size={20} color="white" />
                ) : (
                  <Eye size={20} color="white" />
                )}
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>
                Mot de passe oublié ?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Se connecter</Text>
            </TouchableOpacity>
          </View>

          {/* Inscription */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Vous n'avez pas de compte ?</Text>
            <TouchableOpacity onPress={() => router.push("/auth/signUp")}>
              <Text style={styles.signupText}>S'inscrire</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  inner: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    marginTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "white",
  },
  form: {
    marginVertical: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    height: 56,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: "black",
  },
  eyeIcon: {
    padding: 8,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: "white",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "blue",
    borderRadius: 12,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    gap: 4,
  },
  footerText: {
    fontSize: 14,
    color: "white",
  },
  signupText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});