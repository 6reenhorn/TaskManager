import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { format } from 'date-fns'
import '../../../App.css'

const taskMap = {
  '2025-07-09': ['Finish UI', 'Write docs'],
  '2025-07-10': ['Team meeting'],
  '2025-07-11': ['Code refactor'],
}

export default function MiniCalendar({ onDateSelect }) {
  const [value, setValue] = useState(new Date())

  const hasTasks = (date) => {
    const key = format(date, 'yyyy-MM-dd')
    return taskMap[key]?.length > 0
  }

  const handleDayClick = (date) => {
    const key = format(date, 'yyyy-MM-dd')
    setValue(date)
    if (onDateSelect) onDateSelect(key, taskMap[key] || [])
  }

  return (
    <div className="bg-transparent text-[12px] w-full shadow-md overflow-y-scroll max-h-[245px]">
      <Calendar
        onClickDay={handleDayClick}
        value={value}
        tileContent={({ date, view }) =>
          view === 'month' && hasTasks(date) ? (
            <div className="dot-indicator"></div>
          ) : null
        }
      />
    </div>
  )
}
