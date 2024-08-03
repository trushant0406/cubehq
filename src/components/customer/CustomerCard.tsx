import React from "react";
import { Customer } from "../../const";

interface CustomerCardProps {
  customer: Customer;
  onCardClick: (customer: Customer) => void;
  isSelected: boolean;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  customer,
  onCardClick,
  isSelected,
}) => {
  return (
    <div
      className={`customer-item ${isSelected ? "selected" : ""}`}
      onClick={() => onCardClick(customer)}
    >
      <h3>{customer.name}</h3>
      <p>{customer.description}</p>
    </div>
  );
};

export default CustomerCard;
