"use client";

import { useState, useEffect, PropsWithChildren, FC } from "react";

const HydrationProvider: FC<PropsWithChildren> = ({ children}) => {
  const [isReady, setIsReady] = useState<Boolean>(false);

  useEffect(() => {
    if (!isReady) {
      setIsReady(true);
    }
  }, [isReady]);

  return <>{isReady ? children : null}</>;
}

export default HydrationProvider;
