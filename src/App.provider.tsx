import React, { createContext, FC, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { IMoodOptions, IMoodOptionWithTimetamp } from "./interfaces";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IAppContext {
  moodList?: IMoodOptionWithTimetamp[];
  handleSelectMood?: (moodOption: IMoodOptions) => void;
}

interface IAppData {
  moodList: IMoodOptionWithTimetamp[];
}

interface IAppProviderProps {
  children: ReactNode;
}

const dataKey = 'my-app-data';
const setAppdata = async (appData: IAppData) => {
  try {
    await AsyncStorage.setItem(dataKey, JSON.stringify(appData));
  } catch {}
}

const getAppData = async () => {
  try {
    const result = await AsyncStorage.getItem(dataKey);
    if (result) {
      return JSON.parse(result);
    }
  } catch {}
  return null;
}

const AppContext = createContext<IAppContext>({
  moodList: [],
  handleSelectMood: () => {}
});


export const AppProvider: FC<IAppProviderProps> = ({ children }) => {
  const [moodList, setMoodList] = useState<IMoodOptionWithTimetamp[]>([]);
  const handleSelectMood = useCallback((selectedMood: IMoodOptions) => {
    setMoodList(current => {
      const newMoodList = [
        ...current,
        { mood: selectedMood, timestamp: Date.now() },
      ];
      setAppdata({ moodList: newMoodList });
      return newMoodList;
    });
  }, []);

  useEffect(() => {
    const fetchAppData = async () => {
      const data = await getAppData();
      if (data) {
        setMoodList(data.moodList);
      }
    }
  
    fetchAppData();
  }, [])
  return (
    <AppContext.Provider value={{ moodList, handleSelectMood }}>
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => useContext(AppContext);