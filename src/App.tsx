import React from "react";
import Header from "./components/Header";
import CustomerListWithDetails from "./components/customer/CustomerListWithDetails";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <CustomerListWithDetails />
    </React.Fragment>
  );
};

export default App;
