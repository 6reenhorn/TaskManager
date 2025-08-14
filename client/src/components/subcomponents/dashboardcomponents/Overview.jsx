export const Overview = () => {
    return (
        <div className="bg-transparent rounded-sm shadow-sm">
            <h3 className="text-[18px] font-[500] px-4 py-3 shadow">Today's Overview</h3>
            <div className="overview-dashboard-section flex justify-between items-center h-[79%] px-14">
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
    )
}