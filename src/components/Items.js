import React from "react";

const Items = ({ items }) => {
  if (items.length === 0) {
    return <p className="text-center text-gray-500">No Product found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-gray-600">Name</th>
            <th className="px-4 py-2 text-left text-gray-600">Category</th>
            <th className="px-4 py-2 text-left text-gray-600">Price</th>
            <th className="px-4 py-2 text-left text-gray-600">Date Added</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } border-b`}
            >
              <td className="px-4 py-2 text-gray-700">{item.name}</td>
              <td className="px-4 py-2 text-gray-700">{item.category}</td>
              <td className="px-4 py-2 text-gray-700">
                ${item.price.toFixed(2)}
              </td>
              <td className="px-4 py-2 text-gray-700">
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
