export const Dashboard = () => {
    return (
        <div className="w-full h-[90vh] p-6 pt-9 flex justify-center items-center">
            <div className="grid gap-7 w-[95%] h-full grid-rows-3 ">
                {/* Row 1: 2 columns */}
                <div className="grid grid-cols-2 gap-6">
                    {/* Overview */}
                    <div className="bg-transparent rounded-sm shadow-sm">
                        <h3 className="text-[18px] font-[500] px-4 py-3 shadow">Today's Overview</h3>
                        <div className="overview-dashboard-section flex justify-between items-center h-[77%] px-14">
                            <div className="flex flex-col justify-around items-center">
                                <p>
                                    3
                                </p>
                                <p>
                                    Tasks Due
                                </p>
                            </div>
                            <div className="divider"></div>
                            <div className="flex flex-col justify-between items-center">
                                <p>
                                    5
                                </p>
                                <p>
                                    Tasks Completed
                                </p>
                            </div>
                            <div className="divider"></div>
                            <div className="flex flex-col justify-between items-center">
                                <p>
                                    7
                                </p>
                                <p>
                                    Ongoing Tasks
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Upcoming deadlines */}
                    <div className="bg-transparent rounded-sm shadow-sm">
                        <div className="flex justify-between items-center px-4 py-3 shadow">
                            <h3 className="text-[18px] font-[500]">Upcoming Deadlines</h3>
                            <div className="border-l-[2px] border-r-[2px] rounded-tl-[3px] rounded-br-[3px] px-2 py-1 text-[14px] font-[500]">
                                <select name="upcoming-deadlines-filter" id="upcoming-deadlines-filter" className="pr-2">
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                        </div>
                        <div className="upcoming-deadlines-dashboard-section pt-[5px] max-h-[186px]
                         overflow-y-scroll overflow-hidden px-4">
                            <ul>
                                <li>
                                    <div>
                                        <span>1:</span>
                                        <p>Task Title First</p>
                                    </div>
                                    <div>
                                        <span>Due:</span>
                                        <p>00:00:00</p>
                                    </div>
                                    <div>
                                        <span>Priority:</span>
                                        <p>High</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>2:</span>
                                        <p>Task Title</p>
                                    </div>
                                    <div>
                                        <span>Due:</span>
                                        <p>00:00:00</p>
                                    </div>
                                    <div>
                                        <span>Priority:</span>
                                        <p>Medium</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>3:</span>
                                        <p>Task Title</p>
                                    </div>
                                    <div>
                                        <span>Due:</span>
                                        <p>00:00:00</p>
                                    </div>
                                    <div>
                                        <span>Priority:</span>
                                        <p>Low</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>4:</span>
                                        <p>Task Title</p>
                                    </div>
                                    <div>
                                        <span>Due:</span>
                                        <p>00:00:00</p>
                                    </div>
                                    <div>
                                        <span>Priority:</span>
                                        <p>High</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>5:</span>
                                        <p>Task Title</p>
                                    </div>
                                    <div>
                                        <span>Due:</span>
                                        <p>00:00:00</p>
                                    </div>
                                    <div>
                                        <span>Priority:</span>
                                        <p>High</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Row 2: 3 columns */}
                <div className="grid grid-cols-3 gap-6">
                    <div className="bg-gray-200 rounded shadow p-4">Row 2, Col 1</div>
                    <div className="bg-gray-200 rounded shadow p-4">Row 2, Col 2</div>
                    <div className="bg-gray-200 rounded shadow p-4">Row 2, Col 3</div>
                </div>
                {/* Row 3: 2 columns */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-200 rounded shadow p-4">Row 3, Col 1</div>
                    <div className="bg-gray-200 rounded shadow p-4">Row 3, Col 2</div>
                </div>
            </div>
        </div>
    )
}