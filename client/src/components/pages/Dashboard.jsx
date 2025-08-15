import { TaskCompletionChart } from "../subcomponents/dashboard/TaskCompletionChart"
import { PriorityPieChart } from "../subcomponents/dashboard/PriorityPieChart"
import MiniCalendar from '../subcomponents/dashboard/MiniCalendar'
import { Overview } from '../subcomponents/dashboard/Overview'
import { UpcomingDeadlines } from "../subcomponents/dashboard/UpcomingDeadlines"
import { Statistics } from "../subcomponents/dashboard/Statistics"
import { ActivityHistory } from "../subcomponents/dashboard/ActivityHistory"

export const Dashboard = () => {

    const handleDateSelect = (dateKey, tasks) => {
        console.log(`Tasks on ${dateKey}:`, tasks)
        // Open modal or display below
    } 

    return (
        <div className="w-full h-[90vh] p-6 pt-9 flex justify-center items-center">
            <div className="grid gap-7 w-[95%] h-full grid-rows-3 ">
                {/* Row 1: 2 columns */}
                <div className="grid grid-cols-2 gap-6">
                    <Overview />
                    <UpcomingDeadlines />
                </div>
                {/* Row 2: 3 columns */}
                <div className="grid grid-cols-3 gap-6">
                    <Statistics />
                    <div className="bg-transparent rounded-sm shadow-sm">
                        <h3 className="text-[18px] font-[500] px-4 py-3 shadow mb-2">Task Completion Over Time</h3>
                        <TaskCompletionChart />
                    </div>
                    <div className="bg-transparent rounded-sm shadow-sm">
                        <h3 className="text-[18px] font-[500] px-4 py-3 shadow">Task Priority Distribution</h3>
                        <PriorityPieChart />
                    </div>
                </div>
                {/* Row 3: 2 columns */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-transparent rounded-sm shadow-sm">
                        <h3 className="text-[18px] font-[500] px-4 py-3 shadow">Calendar</h3>
                        <MiniCalendar onDateSelect={handleDateSelect} />
                    </div>
                    <ActivityHistory /> 
                </div>
            </div>
        </div>
    )
}