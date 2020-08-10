export interface IMenuList {
  id: number;
  title: string;
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