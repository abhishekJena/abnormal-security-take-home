import React from "react";
import { MaliciousDomainInfo } from "./customer-interfaces";

const MaliciousDomainTable = ({
  maliciousDomains
}: {
  maliciousDomains: MaliciousDomainInfo[];
}) => {
  const RIGHT_ALIGNED_COL_STYLES: React.CSSProperties = {
    textAlign: "right"
  };

  return (
    <div className="malicious-domain-table">
      <div className="malicious-domain-table-col-header">Domain</div>
      <div
        className="malicious-domain-table-col-header"
        style={RIGHT_ALIGNED_COL_STYLES}
      >
        % of threats
      </div>
      <div
        className="malicious-domain-table-col-header"
        style={RIGHT_ALIGNED_COL_STYLES}
      >
        # of threats
      </div>
      {maliciousDomains.map(({ domain, threatCount, percentage }) => (
        <React.Fragment key={domain}>
          <div className="malicious-domain-table-col">{domain}</div>
          <div
            className="malicious-domain-table-col"
            style={RIGHT_ALIGNED_COL_STYLES}
          >
            {percentage}
          </div>
          <div
            className="malicious-domain-table-col"
            style={RIGHT_ALIGNED_COL_STYLES}
          >
            {threatCount}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
export default MaliciousDomainTable;
