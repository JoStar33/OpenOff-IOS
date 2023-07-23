import { Coordinate } from 'types/event';
import { create } from 'zustand';

interface StartEndDate {
  startDay: string;
  endDay: string;
}

export interface AppStore {
  startEndDate: StartEndDate;
  callbackCoordinate: (coordinate: Coordinate) => void;
  setCallbackCoordinate: (callback: (coordinate: Coordinate) => void) => void;
  setStartEndDate: (date: StartEndDate) => void;
}

const initApp = {
  startEndDate: {
    startDay: '',
    endDay: '',
  },
  callbackCoordinate: (coordinate: Coordinate) => {
    return false;
  },
};

export const useAppStore = create<AppStore>((set) => ({
  ...initApp,
  setCallbackCoordinate: (payload: (callback: Coordinate) => void) =>
    set((state) => ({ ...state, callbackCoordinate: payload })),
  setStartEndDate: (payload) =>
    set((state) => ({
      ...state,
      startEndDate: {
        startDay: payload.startDay,
        endDay: payload.endDay,
      },
    })),
}));
