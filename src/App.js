import React from "react";
// Parents layouts
import MainLayout from "./layouts/mainLayout/MainLayout";
import HeaderLaout from "./layouts/headerLayout/HeaderLayout";
import BodyLayout from "./layouts/bodyLayout/BodyLayout";

// Children components
import Header from "./components/header/Header";
import HeaderControls from "./components/headerControls/HeaderControls";
import SideNav from "./components/sideNav/SideNav";

//Views
import TranslatorView from "./views/translatorView/TranslatorView";
import MetadataView from "./views/metadataView/MetadataView";
import ResponsiveWarning from "./components/responsiveWarning/ResponsiveWarning";

import "./styles/reset.css";

function App() {
  return (
    <>
      <MainLayout>
        <HeaderLaout>
          <Header />
          <HeaderControls />
        </HeaderLaout>
        <BodyLayout>
          <TranslatorView />
          <MetadataView />
          <SideNav />
        </BodyLayout>
      </MainLayout>
      <ResponsiveWarning />
    </>
  );
}

export default App;
