export interface Doctor {
  id: string;
  name: string;
  photo: string;
  position: string;
  startYear: number;
  direction: "dentistry" | "aesthetic";
  description: string;
  order: number;
}
