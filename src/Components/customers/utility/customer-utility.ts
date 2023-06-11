import { EmailAttackInfo } from "../customer-interfaces";

export function getTotalHighSeverityAttacks(
  customerMessages: EmailAttackInfo[]
): number {
  return customerMessages.reduce(
    (count, { attackScore }) => (attackScore > 0.7 ? count + 1 : count),
    0
  );
}

export function getTotalSpamAttacks(
  customerMessages: EmailAttackInfo[]
): number {
  return customerMessages.reduce(
    (count, { attackType }) =>
      attackType.toLowerCase() === "spam" ? count + 1 : count,
    0
  );
}

export function getTopMaliciousDomainDetails(
  customerMessages: EmailAttackInfo[],
  countFromTop = 5
) {
  const allDomainThreats = customerMessages
    .map(({ from }) => from.split("@")[1])
    .reduce((acc: { [key: string]: number }, curr) => {
      return { ...acc, [curr]: acc[curr] ? acc[curr] + 1 : 1 };
    }, {});
  const totalThreats = customerMessages.length;
  const topMaliciousDomainDetails = Object.entries(allDomainThreats)
    .sort(([, val1], [, val2]) => val2 - val1)
    .filter((_, index) => index < countFromTop)
    .map(([domain, threatCount]) => ({
      domain,
      threatCount,
      percentage: Number(((threatCount / totalThreats) * 100).toFixed())
    }));
  return topMaliciousDomainDetails;
}
