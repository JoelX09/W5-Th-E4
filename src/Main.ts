import { ActionMovies } from "./ActionMovie";
import { HorroMovies } from "./HorrorMovies";
import { Choice, Input } from "./Input";
import { Movie } from "./Movie";

// type MoviesT = ActionMovies | HorroMovies;
// type moviesA = MoviesT[];

export class Main {
  movies: Movie[] = [];

  async start() {
    await this.showMainMenu();
  }

  async showMainMenu() {
    const mainMenu = [
      { option: 1, message: "Add action movie" },
      { option: 2, message: "Add horror movie" },
      { option: 3, message: "Show action movies" },
      { option: 4, message: "Show horror movies" },
      { option: 5, message: "Increment explosions in movie" },
      { option: 6, message: "Increment jump scares in movie" },
      { option: 7, message: "Exit" },
    ];

    let formAddMovie = [
      { name: "name", message: "Name" },
      { name: "director", message: "Director" },
      { name: "language", message: "Language" },
      { name: "running", message: "Running Time (min)" },
      { name: "year", message: "Year" },
    ];

    let menu = await Input.getSelect("Blockbuster", mainMenu);
    let input:any;
    let op1:boolean, op2:boolean;
    let options: Choice[] = []

    while (menu.data !== 7) {
      switch (menu.data) {
        case 1: {
          input = await Input.getForm('Fill the following:', [...formAddMovie, { name: "explosions", message: "Explosions Count" }]);
          op1 = await Input.getConfirm('Are there guns in this movie');
          op2 = await Input.getConfirm('Are there martial arts in this movie');
          this.movies.push(new ActionMovies(input.data.name, input.data.director, input.data.language, Number(input.data.running), Number(input.data.year), Number(input.data.explosions),op1, op2));
          break;
        }
        case 2: {
          input = await Input.getForm('Fill the following:', [...formAddMovie, { name: "jump", message: "Jump Scares Count" }]);
          op1 = await Input.getConfirm('Are there ghosts in this movie');
          op2 = await Input.getConfirm('Are there visions in this movie');
          this.movies.push(new HorroMovies(input.data.name, input.data.director, input.data.language, Number(input.data.running), Number(input.data.year), Number(input.data.jump),op1, op2));
          break;
        }
        case 3: {
          this.movies.map(e => {
            if(e instanceof ActionMovies) e.printActionMovie();
          });
          break;
        }
        case 4: {
          this.movies.map(e => {
            if(e instanceof HorroMovies) e.printHorrorMovie();
          });
          break;
        }
        case 5: {
          options = []
          this.movies.map((choice) => {
            if(choice instanceof ActionMovies) options.push({
              name: choice.id, 
              message: choice.name
            });
          });

          input = await Input.getSelectById('Select the Action Movie', options);

          this.movies.find(e => {
            if(input.data === e.id)
                if(e instanceof ActionMovies) e.incrementExplosions();
          });
          break;
        }
        case 6: {
          options = []
          this.movies.map((choice) => {
            if(choice instanceof HorroMovies) options.push({
              name: choice.id, 
              message: choice.name
            });
          });

          input = await Input.getSelectById('Select the Horror Movie', options);

          this.movies.find(e => {
            if(input.data === e.id)
                if(e instanceof HorroMovies) e.incrementJumpscares();
          });
          break;
        }
      }

      menu = await Input.getSelect("Blockbuster", mainMenu);
    }
  }
}
