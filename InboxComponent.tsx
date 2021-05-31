import React from 'react'

function InboxComponent() {
    return (
        <div className="flex flex-col space-y-2 px-2 max-h-screen overflow-y-auto pb-24">
            <div className="font-medium text-xl">Chats</div>
            <div className="flex items-center bg-white px-4 rounded-md">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for messages or users"
                    className="focus:ring-white focus:border-white block w-full sm:text-sm border-white"
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#9CA3AF', transform: '-ms-filter' }}><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path></svg>
            </div>
            <div className="flex items-center space-x-2 py-3">
                <div>
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""></img>
                    <div className="truncate overflow-ellipsis w-14">John Travolta</div>
                </div>

            </div>
            <div className="font-medium text-xl">
                Recent Chats
            </div>
            <div className="space-y-3 pt-3">
            <div className="flex overflow-hidden bg-white py-4 px-4 rounded-md space-x-3 items-center">
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""></img>
                <div className="w-full">
                    <div className="flex w-full items-center justify-between">
                        <div>John Travolta</div>
                        <div className="text-sm">9.20 am</div>
                    </div>
                    <div className="truncate overflow-ellipsis w-48">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis explicabo praesentium enim ut amet recusandae asperiores quidem delectus quae consequuntur magni rerum sequi quisquam libero, beatae at ipsum sint deleniti.</div>
                </div>
            </div>
            <div className="flex overflow-hidden bg-white py-4 px-4 rounded-md space-x-3 items-center">
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""></img>
                <div className="w-full">
                    <div className="flex w-full items-center justify-between">
                        <div>John Travolta</div>
                        <div className="text-sm">9.20 am</div>
                    </div>
                    <div className="truncate overflow-ellipsis w-48">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis explicabo praesentium enim ut amet recusandae asperiores quidem delectus quae consequuntur magni rerum sequi quisquam libero, beatae at ipsum sint deleniti.</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default InboxComponent
