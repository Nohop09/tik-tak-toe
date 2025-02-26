import { useEffect, useState } from "react";

export function useEventSource<T>(url: string, def: T) {
  const [data, setData] = useState<T>(def);
  const [error, setError] = useState<unknown | undefined>();
  useEffect(() => {
    const gameEvents = new EventSource(url);
    gameEvents.addEventListener("message", (message) => {
      try {
        setError(undefined);
        setData(JSON.parse(message.data));
      } catch (e) {
        setError(e);
      }
    });
    gameEvents.addEventListener("error", (error) => {
      setError(error);
    });
    return () => gameEvents.close();
  }, [url]);
  return {
    dataStream: data,
    error,
  };
}
