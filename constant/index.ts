export interface GetHomeData {
  "banners": HomeItem,
  "ribbons": HomeItem,
}

interface HomeItem {
  id: number;
  title: string;
  name: string
  key: any;
}

export interface HomeItems extends Array<HomeItem>{}

export interface Landing {
  key: any;
}
