import React from "react";

const Stopwatch = () => {
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  React.useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-sm-12 col-md-12 p-2 p-md-5 d-flex justify-content-center ">
            <h2 className="fs-1">
              React Stopwatch <i className="bi bi-clock-fill mx-2 fs-2"></i>
            </h2>
          </div>
          <div className="col-sm-12 col-md-12 p-4  text-center">
            <h3 className="fs-1 fw-medium">{formatTime(time)}</h3>
          </div>
          <div className="col-sm-12 col-md-12 p-4 d-flex justify-content-center">
            <button
              className="btn btn-lg btn-success mx-2"
              onClick={() => setIsRunning(true)}
            >
              Start
            </button>
            <button
              className="btn btn-lg btn-danger mx-2"
              onClick={() => setIsRunning(false)}
            >
              Stop
            </button>
            <button
              className="btn btn-lg btn-warning mx-2"
              onClick={() => {
                setIsRunning(false);
                setTime(0);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
