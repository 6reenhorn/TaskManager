export const Dashboard = () => {
    return (
        <div className="w-full h-[90vh] p-6 pt-9 flex justify-center items-center">
            <div className="grid gap-7 w-[95%] h-full grid-rows-3 ">
                {/* Row 1: 2 columns */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-200 rounded shadow p-4">Row 1, Col 1</div>
                    <div className="bg-gray-200 rounded shadow p-4">Row 1, Col 2</div>
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