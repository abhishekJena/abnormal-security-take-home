import { useEffect, useState } from "react";

import AttackStatsTile from "../common/AttackStatsTile";
import { EmailAttackInfo } from "./customer-interfaces";
import {
  getTotalHighSeverityAttacks,
  getTotalSpamAttacks
} from "./utility/customer-utility";

interface CustomerStatsTilesProps {
  customerMessages: EmailAttackInfo[];
  isLoading: boolean;
}
const CustomerStatsTiles = ({
  isLoading,
  customerMessages
}: CustomerStatsTilesProps) => {
  const [highSeverityAttackCount, setHighSeverityAttackCount] = useState<
    number
  >(0);
  const [totalSpams, setTotalSpams] = useState<number>(0);

  useEffect(() => {
    if (customerMessages) {
      setHighSeverityAttackCount(getTotalHighSeverityAttacks(customerMessages));
      setTotalSpams(getTotalSpamAttacks(customerMessages));
    }
  }, [customerMessages]);
  return (
    <div className="stats-container">
      <AttackStatsTile
        total={highSeverityAttackCount}
        statsTitle="High Severity Threats"
        loading={isLoading}
      />
      <AttackStatsTile
        total={totalSpams}
        statsTitle="Spam Messages"
        loading={isLoading}
        isSpam={true}
      />
    </div>
  );
};
export default CustomerStatsTiles;
