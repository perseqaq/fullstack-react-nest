import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ClientContext, GraphQLClient } from 'graphql-hooks';
import usePageTitle from '@/hooks/usePageTitle';
import type { IBestAFSRoute } from '@umijs/plugin-layout';

const client = new GraphQLClient({
  url: 'https://jsonplaceholder.ir/graphql',
});

interface BasicUiLayout {
  [key: string]: any;
}

const Layout: React.FC<BasicUiLayout> = ({ children, ...resetProps }) => {
  const [pageTitle] = usePageTitle(
    resetProps?.route?.routes as IBestAFSRoute[],
    resetProps?.location,
  );

  return (
    <div
      style={{
        background: 'rgb(39, 40, 39)',
      }}
    >
      <PageContainer
        fixedHeader
        header={{
          title: pageTitle,
        }}
        tabList={[
          {
            tab: '已选择',
            key: '1',
          },
          {
            tab: '可点击',
            key: '2',
          },
          {
            tab: '禁用',
            key: '3',
            disabled: true,
          },
        ]}
      >
        <ClientContext.Provider value={client}>
          {children}
        </ClientContext.Provider>
      </PageContainer>
    </div>
  );
};

export default Layout;
