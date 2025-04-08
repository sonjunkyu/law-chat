import { createContext, useContext, useState } from "react";

const HeaderContext = createContext<{
  isWhite: boolean;
  setIsWhite: (val: boolean) => void;
}>({
  isWhite: false,
  setIsWhite: () => {},
});

export const HeaderColorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isWhite, setIsWhite] = useState(false);

  return (
    <HeaderContext.Provider value={{ isWhite, setIsWhite }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderColor = () => useContext(HeaderContext);
