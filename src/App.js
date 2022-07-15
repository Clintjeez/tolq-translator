// Parents layouts
import MainLayout from "./layouts/mainLayout/MainLayout";
import HeaderLaout from "./layouts/headerLayout/HeaderLayout";
import BodyLayout from "./layouts/bodyLayout/BodyLayout";

// Children components
import Header from "./components/header/Header";
import HeaderControls from "./components/headerControls/HeaderControls";

import "./styles/reset.css";

function App() {
  return (
    <MainLayout>
      <HeaderLaout>
        <Header />
        <HeaderControls />
      </HeaderLaout>
      <BodyLayout></BodyLayout>
    </MainLayout>
  );
}

export default App;
