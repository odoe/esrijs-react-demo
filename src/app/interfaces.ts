import SceneLayer = require("esri/layers/SceneLayer");
import EsriMap = require("esri/Map");
import SceneView = require("esri/views/SceneView");

export interface State {
  webmap: EsriMap;
  view: SceneView;
  scene: SceneLayer;
}

export interface Actions {
  addMapView: (a: HTMLDivElement) => (b: State) => void;
  filterScene: (a: string) => (b: State) => void;
};
