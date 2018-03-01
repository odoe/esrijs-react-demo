import FeatureLayer = require("esri/layers/FeatureLayer");
import MapView = require("esri/views/MapView");
import WebMap = require("esri/WebMap");

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/header";
import { WebMapView } from "./components/webmapview";

const featureLayer = new FeatureLayer({
  id: "states",
  portalItem: {
    id: "b234a118ab6b4c91908a1cf677941702"
  },
  outFields: ["NAME", "STATE_NAME", "VACANT", "HSE_UNITS"],
  title: "U.S. counties"
});

const onComponentLoad = (view: MapView) => {
  featureLayer.when(() => {
    view.goTo({ target: featureLayer.fullExtent });
  });
};

const webmap = new WebMap({
  portalItem: {
    id: "3ff64504498c4e9581a7a754412b6a9e"
  },
  layers: [featureLayer]
});

ReactDOM.render(
  <div className="main">
    <Header appName="Webpack App"/>
    <WebMapView webmap={webmap} onload={onComponentLoad} />
  </div>,
  document.querySelector("#app")
);
