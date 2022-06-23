import React from "react";
import "./App.css";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  GraphQLRequest,
  InMemoryCache,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignUp } from "./components/signup/SignUp";
import { Container } from "@material-ui/core";
import { SignIn } from "./components/signin/SignIn";
import { AuthProvider, ProtectedRoute } from "./components/auth/AuthContext";
import { UserProfile } from "./components/user-profile/UserProfile";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL,
});

const authLink = setContext(
  ({ operationName }: GraphQLRequest, prevCtx: any) => {
    const publicOperations = ["signin", "signup"];
    if (
      operationName &&
      !publicOperations.includes(operationName.toLowerCase())
    ) {
      const token = localStorage.getItem("user_token");
      return {
        headers: {
          ...prevCtx.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }
  }
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  return (
    <Router>
      <AuthProvider>
        <ApolloProvider client={client}>
          <Container maxWidth="md">
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/profile/:id" element={
              <ProtectedRoute >
                <UserProfile />
              </ProtectedRoute> 
            } />
            </Routes>
          </Container>
        </ApolloProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
