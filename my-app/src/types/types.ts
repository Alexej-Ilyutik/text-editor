export interface INote {
  id: number;
  title: string;
  description: string;
}

export interface IHash {
  hash: string;
  active: boolean;
}

export interface CreateEl {
  title: string;
  description: string;
}
