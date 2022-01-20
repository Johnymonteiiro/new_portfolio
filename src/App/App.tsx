import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/Header";
import { GlobalStyle } from "../Style/globalStyle";
import { ToastContainer } from "react-toastify";
import { ContactProvider } from "../hooks/useContext";
import { Main } from "../Pages";
import { Footer } from "../components/Footer";


export function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <ToastContainer />
        <ContactProvider>
          <Header />
          <Main />
          <Footer/>
        </ContactProvider>
      </BrowserRouter>
    </div>
  );
}
