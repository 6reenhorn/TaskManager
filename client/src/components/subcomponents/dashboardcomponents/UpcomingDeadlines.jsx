export const UpcomingDeadlines = () => {
    return (
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
            <div className="upcoming-deadlines-dashboard-section py-[10px] max-h-[186px]
                overflow-y-scroll overflow-hidden px-4 mt-[14px]">
                <ul className="text-[14px]">
                    <li>
                        <div>
                            <span>1:</span>
                            <p>Task Title First</p>
                        </div>
                        <div>
                            <p>00:00:00</p>
                        </div>
                        <div>
                            <p>High</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>2:</span>
                            <p>Task Title</p>
                        </div>
                        <div>
                            <p>00:00:00</p>
                        </div>
                        <div>
                            <p>Medium</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>3:</span>
                            <p>Task Title</p>
                        </div>
                        <div>
                            <p>00:00:00</p>
                        </div>
                        <div>
                            <p>Low</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>4:</span>
                            <p>Task Title</p>
                        </div>
                        <div>
                            <p>00:00:00</p>
                        </div>
                        <div>
                            <p>High</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>5:</span>
                            <p>Task Title</p>
                        </div>
                        <div>
                            <p>00:00:00</p>
                        </div>
                        <div>
                            <p>High</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}