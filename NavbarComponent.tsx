import React from 'react'

function NavbarComponent() {
    return (
        <div className="bg-white flex pl-14 pr-8 items-center justify-between py-4 shadow-md">

            <div className="flex items-center space-x-3">
                <div className="flex items-center">
                    <div className="w-8 z-10 h-8 bg-blue-500 rounded-full"></div>
                    <div className="w-8 -ml-2 h-8 bg-blue-100 rounded-full"></div>
                </div>
                <div className="hidden md:block"><span className="font-bold">Topson</span> <span className="font-light">Messenger</span></div>
            </div>

            <div className="flex items-center space-x-8">
                <div className="font-normal hidden md:block">Dark Mode</div>
                <button className="rounded-md hidden md:block focus:outline-none bg-blue-500 py-2 px-4 shadow text-white font-medium text-sm">Invite Friends</button>
                <div>
                    <div className="h-2 w-2 -mb-2 rounded-full bg-blue-500"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#9CA3AF', transform: '-ms-filter' }}><path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707C3.105 15.48 3 15.734 3 16v2c0 .553.447 1 1 1h16c.553 0 1-.447 1-1v-2c0-.266-.105-.52-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707C6.895 14.52 7 14.266 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zM12 22c1.311 0 2.407-.834 2.818-2H9.182C9.593 21.166 10.689 22 12 22z"></path></svg>
                </div>
                <button className="flex focus:outline-none items-center space-x-3">
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""></img>
                    <div className="flex flex-col items-start">
                        <div className="font-medium text-sm">Sarah Rivers</div>
                        <div className="text-xs">FrontEnd Engineer</div>
                    </div>
                </button>
            </div>

        </div>
    )
}

export default NavbarComponent
