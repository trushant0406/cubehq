import { faker } from "@faker-js/faker";

export interface Customer {
  id: number;
  name: string;
  description: string;
  details: string;
}
const generateCustomer = (id: number): Customer => {
  return {
    id,
    name: `Customer ${id}`,
    description: faker.lorem.paragraph(),
    details: faker.lorem.paragraphs(3),
  };
};

// Function to generate a list of customers
export const generateCustomers = (numCustomers: number): Customer[] => {
  const customers: Customer[] = [];
  for (let i = 1; i <= numCustomers; i++) {
    customers.push(generateCustomer(i));
  }
  return customers;
};

export const customers = generateCustomers(1000);
