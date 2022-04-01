import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header";
import { GlobalStyle } from "./style/globalStyle";
import { ToastContainer } from "react-toastify";
import { ContactProvider } from "./hooks/useContext";
import { Main } from "./pages";
import { Footer } from "./components/footer";


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
