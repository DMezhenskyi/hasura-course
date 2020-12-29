import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
  useState,
} from "react";
import { Redirect, Route, RouteProps, useHistory } from "react-router-dom";

export interface AuthContext {
  signout: () => void;
  setIsUserSignedIn: (isSignedIn: boolean) => void;
  isUserSignedIn: boolean;
}

export const authContext = createContext<AuthContext | null>(null);

export function AuthProvider({
  children,
}: PropsWithChildren<any>): ReactElement {
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(
    !!localStorage.getItem("user_token")
  );
  const history = useHistory();
  const signout = () => {
    localStorage.removeItem("user_token");
    setIsUserSignedIn(false);
    history.push("/signin");
  };
  return (
    <authContext.Provider
      value={{
        isUserSignedIn,
        setIsUserSignedIn,
        signout,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function ProtectedRoute({
  children,
  ...props
}: PropsWithChildren<RouteProps>): ReactElement {
  const context = useContext(authContext);
  return (
    <Route {...props}>
      {context?.isUserSignedIn ? children : <Redirect to="/signin" />}
    </Route>
  );
}
