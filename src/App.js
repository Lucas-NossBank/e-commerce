import GeneralProvider from "./contexts/AuthContext";
import RoutesMain from "./routes/routes";
import { ParallaxProvider } from "react-scroll-parallax";
import SwiperCore, {Autoplay} from "swiper"
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {

  SwiperCore.use([Autoplay])

  return (
    <>
      <GeneralProvider>
        <ProSidebarProvider>
          <ParallaxProvider>
          <RoutesMain />
          </ParallaxProvider>
        </ProSidebarProvider>
      </GeneralProvider>
    </>
  );
}

export default App;