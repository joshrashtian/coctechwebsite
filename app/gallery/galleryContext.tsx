'use client';

import { createContext, useState, Dispatch, SetStateAction } from "react";
import { ImageItem } from "./galleryContainer"

export interface GalleryFullProps {
  title?: string;
  images: ImageItem[];
  fullDesc?: string;
}

interface GalleryContextProps {
  container: GalleryFullProps | undefined;
  setContainer: Dispatch<SetStateAction<GalleryFullProps | undefined>>;
}

export const GalleryContext = createContext<GalleryContextProps | undefined>(undefined);

export const GalleryContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [container, setContainer] = useState<GalleryFullProps | undefined>(undefined);

  const contextValue = {
    container,
    setContainer
  }

  return (
    <GalleryContext.Provider value={contextValue}>
      {children}
    </GalleryContext.Provider>
  )
}
