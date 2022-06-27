import { useContext } from "react";
import { slotTimes } from "../Components/Timetable/Timetable.tsx";
import {
  TimetableContext,
  semesters,
} from "../Pages/ProfessorDataInput/index.tsx";
import { weekdays } from "../Pages/ProfessorDataInput/ProfessorTimetable.tsx";

export function TimeIntervalHelper() {
  const { timetables } = useContext(TimetableContext);
  const time_intervals = {};

  Object.values(timetables as Array<Array<Array<boolean>>>).forEach(
    (semester: Array<Array<boolean>>, semester_idx: number) => {
      const row_len = semester[0].length;
      const col_len = semester.length;
      const semester_t = Array(row_len)
        .fill(false)
        .map(() => new Array(col_len).fill(false));

      for (var i = 0; i < col_len; ++i) {
        for (var j = 0; j < row_len; ++j) {
          semester_t[j][i] = semester[i][j];
        }
      }

      time_intervals[semesters[semester_idx]] = {};
      semester_t.forEach((day: Array<boolean>, day_idx: number) => {
        time_intervals[semesters[semester_idx]][weekdays[day_idx]] = {};

        let prev_state: boolean = false;
        let time_queue: Array<number> = [];

        day.forEach((time_state: boolean, idx: number) => {
          if (time_state !== prev_state) {
            time_queue.push(idx);
          }
          prev_state = time_state;
        });

        let time_strings: Array<string> = [];

        while (time_queue.length) {
          time_strings.push(
            `(“${slotTimes[time_queue.shift() || 0]}” “${
              slotTimes[time_queue.shift() || 0]
            }”)`
          );
        }
        const interval_string = time_strings.join(" ");
        time_intervals[semesters[semester_idx]][weekdays[day_idx]]["times"] =
          interval_string;
      });
    }
  );
  return time_intervals;
}
