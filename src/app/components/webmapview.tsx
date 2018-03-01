import MapView = require("esri/views/MapView");
import WebMap = require("esri/WebMap");

import * as React from "react";

interface WebMapViewProps {
  webmap: WebMap;
  onload: (view: MapView) => void;
};

export class WebMapView extends React.Component<WebMapViewProps, {}>{
  mapDiv: HTMLDivElement;

  componentDidMount() {
    const view = new MapView({
      map: this.props.webmap,
      container: this.mapDiv
    });
    this.props.onload(view);
  }

  render() {
    return (
      <div className="webmap" ref={(element: HTMLDivElement) => this.mapDiv = element}>
      </div>
    );
  }
}
