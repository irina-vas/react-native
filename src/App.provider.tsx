import React, { createContext, FC, ReactNode, useCallback, useContext, useState } from "react";
import { IMoodOptions, IMoodOptionWithTimetamp } from "./interfaces";

interface IAppContext {
  moodList?: IMoodOptionWithTimetamp[];
  handleSelectMood?: (moodOption: IMoodOptions) => void;
}

interface IAppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<IAppContext>({
  moodList: [],
  handleSelectMood: () => {}
});

export const AppProvider: FC<IAppProviderProps> = ({ children }) => {
  const [moodList, setMoodList] = useState<IMoodOptionWithTimetamp[]>([]);
  const handleSelectMood = useCallback((selectedMood: IMoodOptions) => {
    setMoodList(current => [
      ...current,
      { mood: selectedMood, timestamp: Date.now() },
    ]);
  }, []);
  return (
    <AppContext.Provider value={{ moodList, handleSelectMood }}>
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => useContext(AppContext);