import React, { Component, RefObject, createRef, ReactNode } from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { AnyStyledComponent } from 'styled-components';
import { Viewer } from 'cesium';

const Root: AnyStyledComponent = styled.div({
  width: '100%',
  height: '100%',
})

const CesiumViewer: AnyStyledComponent = styled.div`
  width: 100%;
  height: 100%;
`;

export interface Props {

}

class App extends Component<Props> {

  public constructor(props: Props) {
    super(props);
  }

  public componentDidMount(): void {
      const viewer: Viewer = new Viewer('cesiumContainer');
  }

  public render(): ReactNode {
    return (
      <Root>
        <CesiumViewer id='cesiumContainer'/>
      </Root>
    );
  }
}

export default App;
