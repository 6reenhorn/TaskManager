import { TaskCompletionChart } from "../subcomponents/dashboardcomponents/TaskCompletionChart"
import { PriorityPieChart } from "../subcomponents/dashboardcomponents/PriorityPieChart"
import MiniCalendar from '../subcomponents/dashboardcomponents/MiniCalendar'
import { Overview } from '../subcomponents/dashboardcomponents/Overview'
import { UpcomingDeadlines } from "../subcomponents/dashboardcomponents/UpcomingDeadlines"

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
                    {/* Statistics */}
                    <div className="bg-transparent rounded-sm shadow-sm">
                        <h3 className="text-[18px] font-[500] px-4 py-3 shadow">Statistics</h3>
                        <div className="flex flex-col justify-between h-[72%]">
                            <div className="grid grid-cols-2 w-full h-full justify-center items-center">
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <div className="text-[35px] font-[550] border rounded-[50%] px-3 py-1">79</div>
                                    <p className="text-[14px]">Total Tasks</p>
                                </div>
                                <div className="text-[15px] grid grid-cols-2 gap-2 mb-6">
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 2048 2048"><path fill="currentColor" d="m1491 595l90 90l-749 749l-365-365l90-90l275 275l659-659zM1024 0q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37q-141 0-272-36t-245-103t-207-160t-160-208t-103-244t-37-273q0-141 36-272t103-245t160-207t208-160T751 37t273-37zm0 1920q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-123 0-237 32t-214 90t-182 141t-140 181t-91 214t-32 238q0 123 32 237t90 214t141 182t181 140t214 91t238 32z"/></svg>
                                            <p>Completed:</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18Zm11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11Zm-9.996 1.004H11V11h2.004v2.004Zm-5 0H6V11h2.004v2.004Zm10 0H16V11h2.004v2.004Z"/></svg>
                                            <p>Pending:</p>
                                        </div>
                                    </div>
                                    <div className="font-semibold">
                                        <p>10</p>
                                        <p>69</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 text-[14px]">
                                <div>Completion Rate:</div>
                                <div className="flex justify-between items-center">
                                    <div className="dashboard-progress-bar w-[90%] h-[6px] border rounded-sm mt-[3px] overflow-hidden"></div>
                                    <div className="font-semibold">80%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Task Cocompletion chart */}
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
                    <div className="bg-transparent rounded-sm shadow-sm">
                        <div className="flex justify-between items-center px-4 py-3 shadow">
                            <h3 className="text-[18px] font-[500]">Activity History</h3>
                            <div className="flex items-center gap-2">
                                <div className="border-l-[2px] border-r-[2px] rounded-tl-[3px] rounded-br-[3px] px-2 py-1 text-[14px] font-[500]">
                                    <select name="activity-history-filter" id="activity-history-filter">
                                        <option value="today">Today</option>
                                        <option value="this_week">This week</option>
                                        <option value="last_30_days">Last 30 days</option>
                                    </select>
                                </div>
                                <div className="border-l-[2px] border-r-[2px] rounded-tl-[3px] rounded-br-[3px] px-2 py-1 text-[14px] font-[500]">
                                    <select name="activity-history-filter" id="activity-history-filter">
                                        <option value="created">Created</option>
                                        <option value="updated">Updated</option>
                                        <option value="deleted">Deleted</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="activity-history-dashboard-section py-[10px] max-h-[220px] overflow-y-scroll overflow-hidden px-4 mt-[14px]">
                            <ul className="text-[14px]">
                                <li>
                                    <div className="text-gray-700">Created</div>
                                    <div>
                                        <span>5</span>
                                        <p>minutes ago</p>
                                    </div>  
                                    <div>[ Task Title ] has been created</div>
                                </li>
                                <li>
                                    <div className="text-green-600">Completed</div>
                                    <div>
                                        <span>18</span>
                                        <p>hours ago</p>
                                    </div>
                                    <div>[ Task Title ] has been completed</div>
                                </li>
                                <li>
                                    <div className="text-gray-700">Created</div>
                                    <div>
                                        <span>Aug 12, 2025</span>
                                        <p>-</p>
                                        <span>3:49 PM</span>
                                    </div>
                                    <div>[ Task Title ] has been created</div>
                                </li>
                                <li>
                                    <div className="text-red-600">Deleted</div>
                                    <div>
                                        <span>Aug 10, 2025</span>
                                        <p>-</p>
                                        <span>3:33 PM</span>
                                    </div>
                                    <div>[ Task Title ] has been deleted</div>
                                </li>
                                <li>
                                    <div className="text-gray-700">Created</div>
                                    <div>
                                        <span>Aug 10, 2025</span>
                                        <p>-</p>
                                        <span>2:37 PM</span>
                                    </div>
                                    <div>[ Task Title ] has been created</div>
                                </li>
                                <li>
                                    <div className="text-green-600">Completed</div>
                                    <div>
                                        <span>July 28, 2025</span>
                                        <p>-</p>
                                        <span>5:11 PM</span>
                                    </div>
                                    <div>[ Task Title ] has been completed</div>
                                </li>
                                <li>
                                    <div className="text-gray-700">Created</div>
                                    <div>
                                        <span>July 26, 2025</span>
                                        <p>-</p>
                                        <span>9:28 AM</span>
                                    </div>
                                    <div>[ Task Title ] has been created</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}