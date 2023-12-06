import { useClock } from "../hooks/useClock";

function MyClock() {
  const [time, anpm] = useClock();

  return (
    <>
      <div id="clock-style">
        <h1>
          {time} <span>{anpm}</span>
        </h1>
      </div>
    </>
  );
}

export default MyClock;
