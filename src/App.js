import './App.css';
import { BrowserRouter,Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Shop from "./Shop";
import About_us from "./About-us";
import Shop_details from "./Shop-details";
import Shopping_cart from "./Shopping-cart";
import Check_out from "./Check-out";
import Blog_detail from "./Blog-detail";
import Blog from "./Blog";
import Contact from "./Contact";
import Compare_product from "./Compare-product";
import ScrollToTop from "./Scroll-to-top";
import Chat_box from "./chat-box";
import Search_box from "./search-box";

function App() {
  return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Chat_box/>
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/Shop">
                            <Shop/>
                        </Route>
                        <Route exact path="/About-us">
                            <About_us/>
                        </Route>
                        <Route exact path="/Shop-details">
                            <Shop_details/>
                        </Route>
                        <Route exact path="/Shopping-cart">
                            <Shopping_cart/>
                        </Route>
                        <Route exact path="/Check-out">
                            <Check_out/>
                        </Route>
                        <Route exact path="/Blog-detail">
                            <Blog_detail/>
                        </Route>
                        <Route exact path="/Blog">
                            <Blog/>
                        </Route>
                        <Route exact path="/Contact">
                            <Contact/>
                        </Route>
                        <Route exact path="/Compare-product">
                            <Compare_product/>
                        </Route>
                    </Switch>
                </ScrollToTop>
              <Footer/>
            </div>
        </BrowserRouter>

  );
}

export default App;
