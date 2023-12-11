import { prettyPrintCupcake } from "./cupcake-printer.js";
import fruitsArray from "./cupcake-printer.js";

console.log(fruitsArray)

const cupcakes = [
    {
      flavor: 'vanilla',
      price: 2.0,
    },
    {
      flavor: 'chocolate',
      price: 2.5,
    },
    {
      flavor: 'red velvet',
      price: 3.0,
    },
  ];

  for (const cupcake of cupcakes) {
    console.log(prettyPrintCupcake(cupcake));
  }

  