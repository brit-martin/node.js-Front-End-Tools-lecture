const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
  const prettyPrintCupcake = (cupcake) => {
    return `${cupcake.flavor} cupcakes cost ${priceFormatter.format(cupcake.price)} each`;
  };
  
  const simplePrintCupcake = (cupcake) => {
    return `${cupcake.flavor}: ${priceFormatter.format(cupcake.price)}`;
  };

  let fruits = ['apple', 'banana', 'orange']

  export {prettyPrintCupcake, simplePrintCupcake};
  export default fruits//default export, use it when it is used way more than others. You can only use one default export per file. 
  //other exports need to be named