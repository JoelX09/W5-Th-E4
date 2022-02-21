import { v4 as uuidv4 } from "uuid";

export class Movie {
  id: string;
  name: string;
  director: string;
  language: string;
  runningTime: number;
  releaseYear: number;

  constructor(name: string, director: string, language: string, runningTime: number, releaseYear: number) {
    this.id = uuidv4();
    this.name = name;
    this.director = director;
    this.language = language;
    this.runningTime = runningTime;
    this.releaseYear = releaseYear;
  }
}
