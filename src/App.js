import React from 'react';
import "./App.css";
import FilterableProductTable from "./FilterableProductTable"
import { products } from "./data"

/*
Thinking in React: https://reactjs.org/docs/thinking-in-react.html

Step 1: Break The UI Into A Component Hierarchy

FilterableProductTable (orange)
  SearchBar (blue)
  ProductTable (green)
    ProductCategoryRow (turquoise)
    ProductRow (red)

Step 2: Build A Static Version in React
Step 3: Identify The Minimal (but complete) Representation Of UI State
Step 4: Identify Where Your State Should Live
Step 5: Add Inverse Data Flow
*/



function App() {

  return (
    <div>
      <FilterableProductTable products={products} />
    </div>
  );
}


export default App;
