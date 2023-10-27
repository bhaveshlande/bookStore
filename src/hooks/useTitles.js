import { useEffect } from "react";

export const useTitles = (title) => {
  useEffect(
    (title) => {
      document.title = `${title} -CodeBook`;
    },
    [title]
  );
  return null;
};
