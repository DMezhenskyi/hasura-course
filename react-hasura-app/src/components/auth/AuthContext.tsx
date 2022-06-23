import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
  useState,
} from "react";
import { Navigate, Route, RouteProps, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const signout = () => {
    localStorage.removeItem("user_token");
    setIsUserSignedIn(false);
    navigate("/signin");
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
  children
}: PropsWithChildren<RouteProps>): ReactElement {
  const context = useContext(authContext);
  if(!context?.isUserSignedIn) {
    return <Navigate to="/signin" />;
  }

  return children as ReactElement
}
