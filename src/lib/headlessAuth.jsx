import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import LogIn from "../scenes/login";
import { getUser } from "../services/api_calls";

const AuthContext = createContext(null);

export function AuthProvider({ children, store, client, ...props }) {
  const [state, setState] = useState("loading");
  const [user, setUser] = useState(undefined);
  const [token, setToken] = useState(undefined);
  const [rut, setRut] = useState(undefined);

  const signOut = useCallback(() => {
    store.del();
    setToken(undefined);
    setRut(undefined);
    setUser(null);
    setState("unauthenticated");
  }, [store]);

  const setLoadingState = useCallback(
    (newToken, rut) => {
      store.set(newToken);
      setState("loading");
      setUser(undefined);
      setToken(newToken);
      setRut(rut);
    },
    [store]
  );

  const getUserInfo = useCallback(
    async (token, rut) => {
      try {
        const response = await client.get("/usuarios?rut=" + rut, {
          headers: {
            "sesion-hash": token,
            "ngrok-skip-browser-warning": "any",
          },
        });
        setUser(response.data.data[0]);
        setState("authenticated");
      } catch (error) {
        console.error(error);
        signOut();
      }
    },
    [client, signOut]
  );

  useEffect(() => {
    console.log("useEffect1");
    const myToken = store.get();
    const rut = store.get_rut();

    if (myToken) {
      setLoadingState(myToken);
      getUserInfo(myToken, rut);
    } else {
      signOut();
    }
  }, [setLoadingState, getUserInfo, signOut, store]);

  useEffect(() => {
    console.log("useEffect2");
    if (!token) {
      return;
    }
    const interceptor = client.interceptors.request.use((config) => {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers["sesion-hash"] = token;
      return config;
    });
    return () => client.interceptors.request.eject(interceptor);
  }, [token, client, store]);

  const signUp = useCallback(
    async ({ params }) => {
      await client.post("/auth/register", { ...params });
    },
    [client]
  );

  const signIn = useCallback(
    async ({ rut, contrasenna }) => {
      const payload = { rut, contrasenna };
      console.log(payload);
      const data = (await client.post("/autentificar", payload)).data;
      console.log(data);
      const token = data.hash;
      setRut(rut);
      store.set_rut(rut);
      setLoadingState(token);
      await getUserInfo(token);
    },
    [client, getUserInfo, setLoadingState]
  );

  const refreshUser = useCallback(async () => {
    const { data } = await client.get("/me");
    setUser(data);
  }, [client]);

  return (
    <AuthContext.Provider
      {...props}
      value={{ user, signUp, signIn, signOut, state, refreshUser }}
    >
      {/* {state === "unauthenticated" ?  <LogIn />: children} */}
      {state === "authenticated" || state === "loading" ? children : <LogIn />}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext must be used within an AuthProvider");
  return context;
}
