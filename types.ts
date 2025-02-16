export interface Stock {
  symbol: string;
  companyName: string;
  institutionalOwnership: {
    currentQuarter: number;
    previousQuarter: number;
    change: number;
    isNewPosition: boolean;
  };
  price: number;
  sector: string;
  topInstitutions: Institution[];
}

export interface Institution {
  name: string;
  sharesHeld: number;
  changeInPosition: number;
  isNewPosition: boolean;
}