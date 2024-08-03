import React, { useState } from "react";
import { Customer, customers } from "../../const";
import CustomerCard from "./CustomerCard";
import CustomerDetails from "./CustomerDetails";
import useGenerateUrls from "../hooks/useGenerateUrls";

const CustomerListWithDetails: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );
  const {
    urls: images,
    loading,
    error,
  } = useGenerateUrls(9, 300, 200, selectedCustomer?.id ?? 0);

  return (
    <div className="container">
      <div className="customer-list scrollable">
        {customers.map((customer) => (
          <CustomerCard
            customer={customer}
            onCardClick={setSelectedCustomer}
            key={customer.id}
            isSelected={selectedCustomer?.id === customer.id}
          />
        ))}
      </div>
      {error && <p>{error}</p>}
      {!error && selectedCustomer ? (
        <div className="customer-details scrollable">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <CustomerDetails customer={selectedCustomer} images={images} />
          )}
        </div>
      ) : (
        <div className="placeholder">Select a customer to see details</div>
      )}
    </div>
  );
};

export default CustomerListWithDetails;
