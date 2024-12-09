import React from "react";
import '../styles/Items.css';

const Items = ({ items }) => {
  if (items.length === 0) {
    return <p className="items-no-product">No Product found.</p>;
  }

  return (
    <div className="items-container">
      <table className="items-table">
        <thead>
          <tr className="items-header-row">
            <th className="items-header-cell">Name</th>
            <th className="items-header-cell">Category</th>
            <th className="items-header-cell">Price</th>
            <th className="items-header-cell">Date Added</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.id}
              className={`items-row ${index % 2 === 0 ? "row-even" : "row-odd"}`}
            >
              <td className="items-cell">{item.name}</td>
              <td className="items-cell">{item.category}</td>
              <td className="items-cell">
                ${item.price.toFixed(2)}
              </td>
              <td className="items-cell">
                {new Date(item.dateAdded).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
