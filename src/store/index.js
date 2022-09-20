import { createContext, useContext, useReducer } from "react";
import { authInitialState } from "./auth/auth-initial-state";
import { authReducer } from "./auth/auth-reducer";
import { counterInitialState } from "./counter/counter-initial-state";
import { counterReducer } from "./counter/counter-reducer";

/* Boş merkezi state oluşturuluyor */
const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

/* Uygulamayı sarmallayacak Store Provider oluşturuluyor */

export const StoreProvider = ({ children }) => {
  /* useReducer hook u iki parametre alır. İlk parametre reducer, diğeri inital state tir 
       useReducer geriye iki yapı döndürür. İlki  getter methodu, diğeri ise setter methodu (dispatch)
    */
  //getter       setter
  const [counterState, dispatchCounter] = useReducer(
    counterReducer,
    counterInitialState
  );
  const [authState, dispatchAuth] = useReducer(authReducer, authInitialState);

  return (
    <StoreContext.Provider
      value={{ counterState, dispatchCounter, authState, dispatchAuth }}
    >
      {/* Tüm uygulama children üzerinden buraya alınıp merkezi state ile sarmallanır */}
      {children}
    </StoreContext.Provider>
  );
};
