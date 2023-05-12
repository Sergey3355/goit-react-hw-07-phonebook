import * as Loader from "react-loader-spinner";

import s from './LoaderComponent.module.css';

function LoaderComponent() {
  return (
    <div className={s.overlay}>
      <Loader.TailSpin />
    </div>
  );
}

export default LoaderComponent;
