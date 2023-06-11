export interface CustomerInfo {
  name: string;
  id: string;
}

export interface EmailAttackInfo {
  id: string;
  attackType: string;
  attackScore: number;
  timestamp: string;
  from: string;
  to: string;
}

export interface MaliciousDomainInfo {
  domain: string;
  threatCount: number;
  percentage: number;
}
