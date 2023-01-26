import monstera from "../assets/monstera.webp";
import ficus from "../assets/ficus.webp";
import pothos from "../assets/pothos.webp";
import yucca from "../assets/yucca.webp";
import olivier from "../assets/olivier.webp";
import geranium from "../assets/geranium.webp";
import basilic from "../assets/basilic.webp";
import aloe from "../assets/aloe.webp";
import succulente from "../assets/succulente.webp";
import cactus from "../assets/cactus.webp";
import citronnier from "../assets/citronnier.webp";
import cosmo from "../assets/cosmo.webp";

const plantList = [
  {
    name: "Monstera",
    cover: monstera,
    category: "Plantes classiques",
    id: "1ed",
    light: 2,
    water: 3,
    price: 13,
  },
  {
    name: "Ficus lyrata",
    cover: ficus,
    category: "Plantes classiques",
    id: "2ab",
    light: 3,
    water: 1,
    price: 16,
  },
  {
    name: "Pothos argenté",
    cover: pothos,
    category: "Plantes classiques",
    id: "3sd",
    isSpecialOffer: true,
    light: 1,
    water: 2,
    price: 14,
  },
  {
    name: "Yucca",
    cover: yucca,
    category: "Plantes classiques",
    id: "4kk",
    light: 3,
    water: 1,
    price: 25,
  },
  {
    name: "Olivier",
    cover: olivier,
    category: "Plantes d'extérieur",
    id: "5pl",
    light: 3,
    water: 1,
    price: 34,
  },
  {
    name: "Géranium",
    cover: geranium,
    category: "Plantes d'extérieur",
    id: "6uo",
    light: 2,
    water: 2,
    price: 8,
  },
  {
    name: "Basilic",
    cover: basilic,
    category: "Plantes d'extérieur",
    id: "7ie",
    isSpecialOffer: true,
    light: 2,
    water: 3,
    price: 7,
  },
  {
    name: "Aloe vera",
    cover: aloe,
    category: "Plantes grasses",
    id: "8fp",
    isSpecialOffer: true,
    light: 2,
    water: 1,
    price: 12,
  },
  {
    name: "Succulente",
    cover: succulente,
    category: "Plantes grasses",
    id: "9vn",
    light: 2,
    water: 1,
    price: 10,
  },
  {
    name: "Cactus",
    cover: cactus,
    category: "Plantes grasses",
    id: "10xz",
    light: 2,
    water: 1,
    price: 12,
  },
  {
    name: "Citronnier",
    cover: citronnier,
    category: "Plantes d'extérieur",
    id: "11ww",
    isSpecialOffer: true,
    light: 3,
    water: 3,
    price: 40,
  },
  {
    name: "Aloe cosmo",
    cover: cosmo,
    category: "Plantes grasses",
    id: "12kj",
    light: 2,
    water: 1,
    price: 22,
  },
];

export default plantList;
