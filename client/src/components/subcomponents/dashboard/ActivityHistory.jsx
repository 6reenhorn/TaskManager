export const ActivityHistory = () => {
    return (
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
    )
}