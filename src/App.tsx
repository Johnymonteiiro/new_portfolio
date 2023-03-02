import { BrowserRouter, Link  } from "react-router-dom";
import { Header } from "./components/Header";
import { GlobalStyle } from "./style/globalStyle";
import { ToastContainer } from "react-toastify";
import { ContactProvider } from "./hooks/useContext";
import { Main } from "./Pages";
import { Footer } from "./components/Footer";
import { PrismicProvider } from "@prismicio/react";
import { prismicClient } from "./service/prismic";


export function App() {
  return (
    <div>
      <PrismicProvider
        client={prismicClient}
        internalLinkComponent={
          ({ href, ...props }) => (<Link to={href} {...props} /> )}
      >

      <BrowserRouter>
        <GlobalStyle />
        <ToastContainer />
        <ContactProvider>
          <Header />
          <Main />
          <Footer/>
        </ContactProvider>
      </BrowserRouter>

      </PrismicProvider>
    </div>
  );
}
