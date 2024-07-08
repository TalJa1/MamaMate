/* eslint-disable prettier/prettier */
export type RootStackParamList = {
  HandBookDetail: {id: number};
};

export interface Reservation {
  weight: number;
  bellySize: number;
  type: string;
  time: string;
}

export interface DiaryEntry {
  dayOfWeek: string;
  date: string;
  status: string;
  setTime: string;
  reservation: Reservation;
  mood: string;
  tag: string[];
  note: string;
}
