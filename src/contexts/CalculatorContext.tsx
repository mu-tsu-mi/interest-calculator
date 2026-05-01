import { createContext, useState, useMemo } from "react";
import type { ReactNode } from "react";

/* setter: React.Dispatch or (val: number) => void
React.Dispatch<React.SetStateAction<number>>: React's useState for a number state. It allows both
a new direct value: setX(123) and an updater function: setX(prev => prev + 1)
*/
interface CalculatorContextType {
  principal: number;
  setPrincipal: React.Dispatch<React.SetStateAction<number>>;
  rate: number;
  setRate: React.Dispatch<React.SetStateAction<number>>;
  months: number;
  setMonths: React.Dispatch<React.SetStateAction<number>>;
  result: {
    total: string;
    interest: string;
  };
}
type CalculatorProviderProps = {
  children: ReactNode;
};

const CalculatorContext = createContext<CalculatorContextType | undefined>(
  undefined,
);

export function CalculatorProvider({ children }: CalculatorProviderProps) {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(5);
  const [months, setMonths] = useState(12);

  const result = useMemo(() => {
    const interestRate = rate / 100 / 12;

    const totalVal = principal * Math.pow(1 + interestRate, months);
    const interestAmount = totalVal - principal;

    // Use the host default language with options for number formatting
    return {
      total: totalVal.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      interest: interestAmount.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    };
  }, [principal, rate, months]);

  return (
    <>
      <CalculatorContext
        value={{
          principal,
          setPrincipal,
          rate,
          setRate,
          months,
          setMonths,
          result,
        }}
      >
        {children}
      </CalculatorContext>
    </>
  );
}

export { CalculatorContext };
