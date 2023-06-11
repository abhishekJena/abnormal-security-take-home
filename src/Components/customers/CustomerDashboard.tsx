import { useState } from "react";

import useCustomer from "../hooks/useCustomer";
import useCustomerMessages from "../hooks/useCustomerMessages";
import CustomerDropDown from "./CustomerDropDown";
import CustomerStatsTiles from "./CustomerStatsTiles";
import TopMaliciousDomains from "./TopMaliciousDomains";

import "./customer-styles.css";

const CustomerDashboard = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState("");
  const [customers] = useCustomer();
  const [loading, customerMessages] = useCustomerMessages(selectedCustomerId);

  return (
    <>
      <CustomerDropDown
        customers={customers}
        selectCustomer={setSelectedCustomerId}
        selectedCustomerId={selectedCustomerId}
      />
      <CustomerStatsTiles
        customerMessages={customerMessages}
        isLoading={loading}
      />
      <TopMaliciousDomains
        customerMessages={customerMessages}
        isLoading={loading}
        countFromTop={5}
      />
    </>
  );
};
export default CustomerDashboard;
