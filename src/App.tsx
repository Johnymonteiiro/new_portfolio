import { BrowserRouter, Link  } from "react-router-dom";
import { Header } from "./components/header";
import { GlobalStyle } from "./style/globalStyle";
import { ToastContainer } from "react-toastify";
import { ContactProvider } from "./hooks/useContext";
import { Main } from "./pages";
import { Footer } from "./components/footer";
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
