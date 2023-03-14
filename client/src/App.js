import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Home from './pages/Home';
 import ProjectDetial from './pages/ProjectDetail';
 import NotFound from './pages/NotFound';


import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container min-height mx-auto">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects/:id' element={<ProjectDetial />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
