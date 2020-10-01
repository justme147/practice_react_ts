export interface IMenuList {
  id: number;
  title: string;
  url: string;
  items: IMenuListItems[];
}

export interface IMenuListItems {
  id: number;
  title: string;
  url: string;
}

export interface ISliderList {
  id: number;
  title: string;
  description: string;
  url: string;
}

export interface IHelpList {
  text: string;
  element: string;
}

export interface IRoutesList {
  path?: string;
  component: JSX.Element;
}

export interface INavList {
  id: number;
  title: string;
  url: string;
}

export interface IMeasurementsList {
  title: string;
  childs: IMeasurementsChildList[];
}

export interface IMeasurementsChildList {
  id: number;
  title: string;
  values: IMeasurementsChildValuesList[];
}

export interface IMeasurementsChildValuesList {
  id: number;
  title: string;
  value: number;
}
