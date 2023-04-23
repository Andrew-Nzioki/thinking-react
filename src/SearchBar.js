import React from "react";

function SearchBar({ search, showInStock }) {
  return (
    <form style={{ padding: "10px", display: "flex", flexDirection: "column" }}>
      <input type="text" placeholder="Search..." value={search} />
      <label>
        <input type="checkbox" checked={showInStock} />
        Only show products in stock
      </label>
    </form>
  )
}

export default SearchBar