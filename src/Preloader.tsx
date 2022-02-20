import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";
import {CircularProgressProps} from "@mui/material/CircularProgress/CircularProgress";
import classes from './Preloader.module.scss';
import {useMemo} from "react";

export type PreloaderProps = {
  type: string
  overlayClassName?: string
} & CircularProgressProps

const Preloader = ({ className, overlayClassName, type, ...props }:PreloaderProps) => {
  const preloaderClasses = useMemo(() => {
    const result = [classes.Preloader];
    if(className) result.push(className);
    return result;
  }, [className, classes]);

  const overlayClasses = useMemo(() => {
    const result = [classes.Overlay, classes[`Overlay_type-${type}`]];
    if(overlayClassName) result.push(overlayClassName);
    if (type !== 'as_is') result.push(classes.Overlay_blocked)
    return result;
  }, [type, classes, overlayClassName]);

  return <div className={overlayClasses.join(" ")}>
    <CircularProgress className={preloaderClasses.join(' ')} {...props} />
  </div>
}

export default Preloader;
