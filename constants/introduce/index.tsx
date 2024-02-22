export interface Contact {
  id: number
  name: string
  slug: any
  category: string
  icon: string
}


export interface TypeContact {
  [key: string]: any
  data: Array<any>;
}
