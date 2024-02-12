"use client";

import { persistor, store } from "@/redux/store";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

function AppProvider({ children }: Readonly<Props>) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default AppProvider;
