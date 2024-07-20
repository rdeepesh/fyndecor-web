"use client";
import { Suspense, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";
import { ToastContainer } from "react-toastify";
import Header from "../components/Header";
import Loading from "../loading";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <ToastContainer />
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
      <Modal />
    </Provider>
  );
}
