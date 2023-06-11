import React from "react";
import { CustomerInfo } from "./customer-interfaces";

interface CustomerDropDownProps {
  customers: CustomerInfo[];
  selectedCustomerId: string;
  selectCustomer: React.Dispatch<string>;
}
const CustomerDropDown = ({
  customers,
  selectedCustomerId,
  selectCustomer
}: CustomerDropDownProps) => {
  return (
    <div className="customer-dropdown-container">
      <label className="customer-label">Customers:</label>
      <select
        name="customers"
        value={selectedCustomerId}
        onChange={(event) => selectCustomer(event.target.value)}
      >
        <option value="">Please select</option>
        {customers &&
          customers.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
      </select>
    </div>
  );
};
export default CustomerDropDown;
