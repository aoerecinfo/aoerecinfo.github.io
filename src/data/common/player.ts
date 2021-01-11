interface Resources {
  food: number;
  wood: number;
  stone: number;
  gold: number;
}

export interface Player {
  name: string;
  resources: Resources[];
}

export interface DataTick {
  time: number;
  data: number
}

export interface PlayerData {
  name: string;
  colorId: number;
  dataTicks: DataTick[];
}

export interface PlayerCardData {
  name: string;
  civilization: string;
  colorId: number;
}
