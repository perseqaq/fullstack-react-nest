import { IBestAFSRoute } from '@umijs/plugin-layout';
import { useEffect, useState } from 'react';

/**
 * @description 在自定义layout中获取当前path的title值
 */

const useTitle = (routes: IBestAFSRoute[], location: any) => {
  const [pageTitle, setPageTitle] = useState('页面标题');

  useEffect(() => {
    setPageTitle(
      routes.filter((item) => item.path === location.pathname)[0].name,
    );
  }, [location.pathname]);

  return [pageTitle, setPageTitle];
};

export default useTitle;
