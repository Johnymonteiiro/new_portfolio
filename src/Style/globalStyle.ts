import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';


export const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root {

    --font-family: 'Roboto', sans-serif;

    // Font Sizes //

    --title-size:clamp(1.75rem, 1rem + 3vw, 3.9em );
    --subtitle-size:30px;
    --text-size:clamp(1.3rem, 1rem + 2vw, 0.5em );;
    --text-small-size:18px;
    
    // Color //

    --primary-color:#222731;
    --second-color: #E1E1E6;
    --third-color: #8257E5;
    --gray-color:#A0A0A0;
    --dark-color: #353941;
    --dark-light: rgba(70, 72, 78, 0.54);

}

    @media (max-width : 1080px){
        
        html{
            font-size: 93.75%;
        }
    }
    
    @media (max-width : 720px){
       
        html{
            font-size: 87.5%;
        }
    }

body{
    
    font-family:var(--font-family);
    -webkit-Font-Smoothing: antialiased;
    background-color: var(--primary-color);
    color:var(--gray-color);
    overflow-x: hidden;
    
}

h1,h2
,h3,p {
   margin: 0;
}

ul,li{
    list-style: none;
}

button {
    cursor: pointer;
}

input {
    outline: none;
}

a {
    text-decoration: none;
}

`;