import React, {useCallback, useMemo, useState} from "react";
import OriginalPreloader, {PreloaderProps} from "./Preloader";

export type useLoadingResult = {
  loading: boolean, // Флаг идёт загрузка или нет
  setLoading: (state: boolean) => void,
  Preloader: (props: PreloaderProps) => JSX.Element | null,
  render: (children: any) => JSX.Element | null,
  start: () => void,
  stop: () => void,
};

function useLoader(loadingDefault = true): useLoadingResult {
  const [loading, _setLoading] = useState(loadingDefault);

  const setLoading = useCallback((state: boolean | ((a: any) => any)) => {
    _setLoading(state);
  }, []);

  const start = useCallback(() => setLoading(true), [setLoading]);
  const stop = useCallback(() => setLoading(false), [setLoading]);

  const Preloader = useCallback((props: PreloaderProps) => {
    if (!loading) return null;
    return <OriginalPreloader {...props} />
  }, [loading]);

  const render = useCallback((children: any) => {
    if (loading) return <OriginalPreloader type={'as_is'}/>;
    return typeof children === 'function' ? children() : children;
  }, [loading]);

  return useMemo(() => ({
      loading,
      setLoading,
      Preloader,
      render,
      start,
      stop,
    }
  ), [
    loading,
    setLoading,
    start,
    stop,
    Preloader,
    render,
  ]);
}

export default useLoader;
