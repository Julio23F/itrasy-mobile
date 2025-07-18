import { useEffect, useCallback, useReducer } from "react";
import * as SecureStore from "expo-secure-store";

function useAsyncState(initialValue = [true, null]) {
  return useReducer(
    (state, action = null) => [false, action],
    initialValue
  );
}

export async function setStorageItemAsync(key, value) {
  if (value == null) {
    await SecureStore.deleteItemAsync(key);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
}

export function useStorageState(key) {
  const [state, setState] = useAsyncState();

  useEffect(() => {
    SecureStore.getItemAsync(key).then((value) => {
      if (value != null) {
        try {
          const parsedValue = JSON.parse(value);
          setState(parsedValue);
        } catch (error) {
          setState(value);
        }
      } else {
        setState(null);
      }
    });
  }, [key]);

  
  const setValue = useCallback(
    (value) => {
      setState(value);
      const stringValue = value != null ? JSON.stringify(value) : null;
      setStorageItemAsync(key, stringValue);
    },
    [key]
  );

  return [[state[0], state[1]], setValue];
}
