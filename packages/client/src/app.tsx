import Footer from '@ant-design/pro-layout/lib/Footer';
import React from 'react';
import { GithubOutlined } from '@ant-design/icons';

export function getInitialState() {
  //右上角名字, 头像
  return {
    name: 'Serati Ma',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  };
}

export const layout = {
  //退出登陆
  logout: () => {
    alert('退出登录成功');
  },
  footerRender: () => {
    return (
      <Footer
        copyright="2021大吉大利"
        links={[
          {
            key: 'github',
            title: (
              <>
                <GithubOutlined /> feWei1997
              </>
            ),
            href: 'https://github.com/feWei1997',
            blankTarget: true,
          },
        ]}
      />
    );
  },
};
