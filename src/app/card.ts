export interface Card {
  inputSearch: any;
  id: number;
  title:string;
  description: string;
  img: string;
  type: string;
}

export type Cards = Array<Card>

