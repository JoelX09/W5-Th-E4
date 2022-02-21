"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const uuid_1 = require("uuid");
class Movie {
    constructor(name, director, language, runningTime, releaseYear) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.director = director;
        this.language = language;
        this.runningTime = runningTime;
        this.releaseYear = releaseYear;
    }
}
exports.Movie = Movie;
