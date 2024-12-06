# React Filterable List with Search, Sort, and Debounce
This project is a React-based filterable list application designed with performance, scalability, and modularity in mind. It uses SOLID principles and a Single Responsibility Principle (SRP)-oriented folder structure, ensuring a clean and maintainable codebase.

# Features
## Dynamic Filtering
Filter items by category and price range dynamically.
Categories are fetched from the initial data to avoid hardcoding.

## Sorting Options
Sort items alphabetically (A-Z, Z-A) and by price (Low to High, High to Low).

## Search Functionality
Search items by name with a debounce to optimize performance.

## Responsive and User-Friendly UI
Built with Tailwind CSS for responsive and attractive design.

## Scalable Architecture
Modular design with reusable components, utilities, and context for global state management.

# Approach
## 1. SOLID Principles in Action
### Single Responsibility Principle (SRP)
Each file, utility, or component is designed for one specific task:
SearchBar.js: Handles search input logic.
CategoryFilter.js: Manages category-based filtering.
PriceFilter.js: Focuses on price range filtering.

### Open/Closed Principle
Components are open for extension but closed for modification:
Adding new filters, sort options, or features is easy without modifying the existing structure.

### Liskov Substitution Principle
Any filter or sorting logic can be replaced or extended without affecting the app’s core.

### Interface Segregation Principle
Context, utilities, and components handle their respective tasks efficiently, without overlap.

### Dependency Inversion Principle
Core components rely on abstractions (context and utilities) rather than concrete implementations, enhancing flexibility.

## 2. Optimization Techniques
### Debounced Search:
Implements a debounce in utils/debounce.js to delay search actions, reducing unnecessary re-renders.

### Dynamic Categories:
Categories are derived from data.js instead of hardcoding, allowing future flexibility in expanding datasets.

### Centralized State Management:
React Context API is used to manage filters, search, and sort state in ItemContext.js.

# Folder Structure
src/  
├── components/          # Reusable UI components  
│   ├── Filters/         # Individual filter components  
│   │   ├── CategoryFilter.js 
│   │   └── Filter.js
│   │   └── PriceFilter.js  
│   ├── SearchBar.js     # Search input with debounce  
│   ├── SortOptions.js   # Dropdown for sorting  
│   └── ItemTable.js     # Table displaying filtered items  
├── context/             # Context API for global state management  
│   └── ItemContext.js   # Handles state for filters, sort, and search  
├── utils/               # Helper functions and utilities  
│   ├── debounce.js      # Debounce utility function  
│   ├── filtersUtils.js  # Utilities for filtering data  
│   └── sortUtils.js     # Utilities for sorting data  
├── constants/           # App-wide constants  
│   └── data.js          # Initial data array  
├── App.js               # Root application component  
└── index.js             # Entry point 

# Key Files
## 1. utils/debounce.js
A utility function to delay execution of the search input logic until the user stops typing.
## 2. utils/filtersUtils.js
Contains reusable functions to filter data based on categories and price ranges.
## 3. utils/sortUtils.js
Utility functions for sorting data by name or price in ascending/descending order.
## 4. constants/data.js
Holds the initial data array, containing item details like name, price, and category.
 
# How to Run
## Clone the Repository
git clone https://github.com/sahpankaj/pieorbit-assignment.git  
cd pieorbit-assignment

## Install Dependencies
npm install  

## Run the Development Server
npm start  

## Build for Production
npm run build  

# Future Enhancements
## Server-Side Filtering and Sorting
Migrate filtering and sorting to the backend for handling large datasets.

## Pagination
Implement pagination for better performance with extensive data.

## Improved Accessibility
Add ARIA attributes to enhance usability for assistive technologies.

## Enhanced Search
Introduce fuzzy search for better search results.


