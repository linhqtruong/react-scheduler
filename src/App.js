import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";

export default function App() {
  return (
    <Scheduler
      view="week"
      events={EVENTS}
      selectedDate={new Date(2021, 4, 5)}

    />
  );
}
