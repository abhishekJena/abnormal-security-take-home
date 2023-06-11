import { useEffect, useState } from "react";
import axios from "axios";
import { EmailAttackInfo } from "../customers/customer-interfaces";

const useCustomerMessages = (
  customerId: string
): [boolean, EmailAttackInfo[]] => {
  const [customerAttacks, setCustomerAttacks] = useState<EmailAttackInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      setIsLoading(true);
      const url = `https://abnormalsecurity-public.s3.amazonaws.com/fe_dashboard/${customerId}/messages.json`;
      try {
        const messagesData = await axios.get(url);
        setCustomerAttacks(messagesData.data);
      } catch (error) {
        console.error(
          `error occured while fetching messages for customer${customerId} - `,
          error
        );
      } finally {
        setIsLoading(false);
      }
    };
    if (customerId) fetchCustomers();
    else setCustomerAttacks([]);
  }, [customerId]);

  return [isLoading, customerAttacks];
};
export default useCustomerMessages;
