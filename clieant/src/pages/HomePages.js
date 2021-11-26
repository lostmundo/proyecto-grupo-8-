import React from "react";
import "./LoginPage.css";
import Navbar from "../components/nav/Navbar";
import Cover from "../components/Cover/Cover";
import Body from "../components/body/Body";
import Footer from "../components/footer/Footer";

// import ModalNavbar from "../components/nav/ModalNavbar";

function HomePages() {
  // const [scrollHeight, setscrollHeight] = useState(0);

  // const handlScroll = () => {
  //   const posicion = window.scrollY;
  //   console.log(posicion);
  //   setscrollHeight(posicion);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handlScroll);
  // }, [scrollHeight]);

  return (
    <div className="LoginPages">
      <Navbar />
      <Cover />
      <Body />
      <Footer />
      {/* <ModalNavbar /> */}
    </div>
  );
}

export default HomePages;
