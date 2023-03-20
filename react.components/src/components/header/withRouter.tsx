import React from 'react';
import { useLocation } from 'react-router-dom';

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

export function withRouter<ComponentProps>(Component: React.ComponentClass<ComponentProps>) {
  return (props: Omit<ComponentProps, keyof WithRouterProps>) => {
    return <Component {...(props as ComponentProps)} location={useLocation()} />;
  };
}
