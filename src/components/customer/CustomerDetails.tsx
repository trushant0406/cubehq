import React from "react";
import { Customer } from "../../const";

interface CustomerDetailsProps {
  customer: Customer;
  images: string[];
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({
  customer,
  images,
}) => {
  return (
    <div className="customer">
      <h3>{customer.name} details here</h3>
      <p>{customer.description}</p>
      <div className="image-gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Gallery ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
