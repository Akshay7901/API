declare module 'react-router-dom' {
  import * as React from 'react';

  export interface BrowserRouterProps {
    basename?: string;
    children?: React.ReactNode;
    window?: Window;
  }

  export class BrowserRouter extends React.Component<BrowserRouterProps, any> {}
}