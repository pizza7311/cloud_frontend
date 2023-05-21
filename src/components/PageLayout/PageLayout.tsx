import { Layout } from "antd";
import SideMenu from "../SideMenu/SideMenu";
import { PropsWithChildren } from "react";

const PageLayout = ({ children }: PropsWithChildren) => {
  const { Header, Content } = Layout;
  return (
    <Layout className="h-full">
      <Header className="flex items-center bg-blue-300">this is header</Header>
      <Content>
        <Layout className="h-full bg-white">
          <SideMenu></SideMenu>
          {children}
        </Layout>
      </Content>
    </Layout>
  );
};

export default PageLayout;
