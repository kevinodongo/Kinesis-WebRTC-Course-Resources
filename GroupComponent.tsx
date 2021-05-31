import React from 'react'

function GroupComponent() {
    return (
        <div className="flex flex-col space-y-2">
            <div className="font-medium text-xl">Groups</div>
            <div className="flex items-center bg-white px-4 rounded-md">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search groups"
                    className="focus:ring-white focus:border-white block w-full sm:text-sm border-white"
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#9CA3AF', transform: '-ms-filter' }}><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path></svg>
            </div>
            <div className="space-y-2 pt-2">
            <div className="flex overflow-hidden bg-white py-4 px-4 rounded-md space-x-3 items-center">
                
                <div className="w-full">
                    <div className="font-medium">Family Group</div>
                    <div className="truncate overflow-ellipsis w-56">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis explicabo praesentium enim ut amet recusandae asperiores quidem delectus quae consequuntur magni rerum sequi quisquam libero, beatae at ipsum sint deleniti.</div>
                </div>
            </div>
            <div className="flex overflow-hidden bg-white py-4 px-4 rounded-md space-x-3 items-center">
                
                <div className="w-full">
                    <div className="font-medium">Work Group</div>
                    <div className="truncate overflow-ellipsis w-56">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis explicabo praesentium enim ut amet recusandae asperiores quidem delectus quae consequuntur magni rerum sequi quisquam libero, beatae at ipsum sint deleniti.</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default GroupComponent
