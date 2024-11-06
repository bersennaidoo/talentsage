import axios from "axios";
import { Hero } from "../../models/Hero/Hero";

export const seedHero = (list: Hero[]) => {
  list.forEach((element) => {
    axios
      .post("http://localhost:8888/api/heroes", element)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  });
};
const heroes: Hero[] = [
  {
    id: "Heartbreakers",
    bandname: "Heartbreakers",
    clubname: "East End",
    date: "11/21/20",
    startTime: "21:30",
    endTime: "23:30",
    fee: "R800",
  },
  {
    id: "Lightmetal",
    bandname: "Lightmetal",
    clubname: "East End",
    date: "21/21/20",
    startTime: "21:30",
    endTime: "24:00",
    fee: "R800",
  }
];

seedHero(heroes)