import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<Posts/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    );
}


