import { useEffect, useState } from "react";
import axios from "axios";
import { CustomerInfo } from "../customer-interfaces";

const useCustomer = () => {
  const [customers, setCustomers] = useState<CustomerInfo[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const customerData = await axios.get(
          "https://abnormalsecurity-public.s3.amazonaws.com/fe_dashboard/customers.json"
        );
        setCustomers(customerData.data);
      } catch (error) {
        console.error("error occured while fetching customer data - ", error);
      }
    };
    fetchCustomers();
  }, []);

  return [customers];
};
export default useCustomer;
