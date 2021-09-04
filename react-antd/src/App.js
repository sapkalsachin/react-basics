import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import AppHeader from "./component/common/Header";
import AppHome from "./views/home";

import { Layout } from "antd";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome/>
      </Content>
    </Layout>
  );
};

export default App;
