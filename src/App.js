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

import "./styles/reset.css";

function App() {
  const [postId, setPostId] = React.useState(null);
  const [active, setActive] = React.useState(0);
  return (
    <MainLayout>
      <HeaderLaout>
        <Header />
        <HeaderControls />
      </HeaderLaout>
      <BodyLayout>
        <TranslatorView
          setPostId={setPostId}
          setActive={setActive}
          active={active}
        />
        <MetadataView postId={postId} />
        <SideNav />
      </BodyLayout>
    </MainLayout>
  );
}

export default App;
