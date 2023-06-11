import React, { useEffect, useState } from "react";

import MaliciousDomainTable from "./MaliciousDomainTable";
import { EmailAttackInfo, MaliciousDomainInfo } from "./customer-interfaces";
import { getTopMaliciousDomainDetails } from "./utility/customer-utility";

interface TopMaliciousDomainsProps {
  customerMessages: EmailAttackInfo[];
  countFromTop: number;
  isLoading: boolean;
}

const TopMaliciousDomains = ({
  customerMessages,
  isLoading,
  countFromTop = 5
}: TopMaliciousDomainsProps) => {
  const [maliciousDomains, setMaliciousDomains] = useState<
    MaliciousDomainInfo[]
  >([]);

  useEffect(() => {
    if (customerMessages) {
      setMaliciousDomains(
        getTopMaliciousDomainDetails(customerMessages, countFromTop)
      );
    }
  }, [customerMessages, countFromTop]);

  return (
    <div className="malicious-domains-container">
      <span className="malicious-domain-title">
        Top {countFromTop} Malicious Domains:
      </span>
      {isLoading ? (
        <div className="malicious-domain-loading">loading...</div>
      ) : (
        <MaliciousDomainTable maliciousDomains={maliciousDomains} />
      )}
    </div>
  );
};
export default TopMaliciousDomains;
