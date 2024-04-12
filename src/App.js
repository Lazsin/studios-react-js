import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Form from "./pages/Form";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    );
}


