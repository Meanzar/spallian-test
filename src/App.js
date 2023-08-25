import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DetailPage from "./pages/DetailPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

import { BrowserRouter, Route, Routes,} from "react-router-dom";

const App = () => {
    return (
      <>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element= {<HomePage/>}/>
            <Route path='/:id' element={<DetailPage />}/>
            <Route path='/*' element={<ErrorPage />}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </>
    );
}

export default App;