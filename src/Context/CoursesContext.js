import React from 'react';

// This creates a new React context object named CoursesContext.
// Context provides a way to pass data through the component tree
// without having to pass props down manually at every level.
const CoursesContext = React.createContext({
    // Default values for the context state
    activeValue: "orders",  // Default active value is "orders"
    searchValue: "",        // Default search value is an empty string
    onChangeSearch: () => {},  // Default empty function for handling search value changes
    onChangeActive: () => {}   // Default empty function for handling active value changes
});

// Exporting the CoursesContext for use in other components
export default CoursesContext;
