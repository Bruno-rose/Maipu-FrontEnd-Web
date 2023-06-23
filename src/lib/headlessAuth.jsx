import { createContext, useCallback, useContext, useEffect, useState } from "react";
import LogIn2 from "../scenes/login2";
import LogIn from "../scenes/login";

const AuthContext = createContext(null);

export function AuthProvider({ children, store, client, ...props }) {
  const [state, setState] = useState("loading");
  const [user, setUser] = useState(undefined);
  const [token, setToken] = useState(undefined);

  const signOut = useCallback(() => {
    store.del();
    setToken(undefined);
    setUser(null);
    setState("unauthenticated");
  }, [store]);

  const setLoadingState = useCallback(
    (newToken) => {
      store.set(newToken);
      setState("loading");
      setUser(undefined);
      setToken(newToken);
    },
    [store]
  );

  const getUserInfo = useCallback(
    async (token) => {
      try {
        const { data } = await client.get("/users/me", { headers: { Authorization: `Bearer ${token}` } });
        setUser(data.data);
        setState("authenticated");
      } catch (error) {
        console.error(error);
        signOut();
      }
    },
    [client, signOut]
  );

  useEffect(() => {
    const token = store.get();
    if (token) {
      setLoadingState(token);
      getUserInfo(token);
    } else {
      signOut();
    }
  }, [setLoadingState, getUserInfo, signOut, store]);

  useEffect(() => {
    if (!token) return;
    const interceptor = client.interceptors.request.use((config) => {
      if (!config.headers) config.headers = {};
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
    return () => client.interceptors.request.eject(interceptor);
  }, [token, client, store]);

  const signUp = useCallback(
    async ({ params }) => {
      const role = "DOCTOR";
      await client.post("/auth/register", { ...params, role });
    },
    [client]
  );

  const signIn = useCallback(
    async ({ email, password }) => {
      const role = "DOCTOR";
      const payload = { password, email, role };
      const data = (await client.post("/auth/login", payload)).data;
      const token = data.data;
      setLoadingState(token);
      await getUserInfo(token);
    },
    [client, getUserInfo, setLoadingState]
  );

  const refreshUser = useCallback(async () => {
    const { data } = await client.get("/me");
    setUser(data);
  }, [client]);

  return <AuthContext.Provider {...props} value={{ user, signUp, signIn, signOut, state, refreshUser }}>
    {/* { state == "authenticated" ? children: <LogIn2/> } */}
    { children }
  </AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuthContext must be used within an AuthProvider");
  return context;
}