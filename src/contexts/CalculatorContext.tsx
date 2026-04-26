import { createContext, useState, useMemo } from "react";
import type { ReactNode } from "react";

// setter: React.Dispatch or (val: number) => void
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

    return { total: totalVal.toFixed(2), interest: interestAmount.toFixed(2) };
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
