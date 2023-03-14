import React from 'react';
import { useLocation } from 'react-router-dom';

export function withRouter<ComponentProps>(Component: React.ComponentClass<ComponentProps>) {
  function ComponentWithRouterProp(props: ComponentProps) {
    return <Component {...props} location={useLocation()} />;
  }

  return ComponentWithRouterProp;
}
