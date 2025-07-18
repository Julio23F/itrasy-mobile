import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export function useStorageState(key) {
  const [state, setState] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStoredValue = async () => {
      try {
        const storedValue = await SecureStore.getItemAsync(key);
        if (storedValue) {
          const parsed = JSON.parse(storedValue);
          setState(parsed);
        }
      } catch (error) {
        console.error("Erreur lors du chargement depuis SecureStore :", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStoredValue();
  }, [key]);

  const setStoredValue = (value) => {
    if (value) {
      SecureStore.setItemAsync(key, JSON.stringify(value)).catch((error) =>
        console.error("Erreur lors de l'enregistrement dans SecureStore :", error)
      );
    } else {
      SecureStore.deleteItemAsync(key).catch((error) =>
        console.error("Erreur lors de la suppression dans SecureStore :", error)
      );
    }

    setState(value);
  };

  return [[isLoading, state], setStoredValue];
}
