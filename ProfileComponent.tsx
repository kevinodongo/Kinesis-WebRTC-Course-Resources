import React from 'react'

function ProfileComponent() {
    return (
        <div className="flex flex-col space-y-3 px-2 max-h-screen overflow-y-auto pb-24">
            <div className="bg-white w-full px-4 py-6  rounded-md shadow">
                <div className="flex items-center justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: '#9CA3AF', transform: '-ms-filter' }}><path fill="none" d="M16.589 9L15.003 7.414 5.906 16.511 5.377 18.625 7.491 18.097z"></path><path transform="rotate(134.999 18.003 6)" fill="none" d="M16.882 4.879H19.125V7.122H16.882z"></path><path d="M4.003,21c0.081,0,0.162-0.01,0.242-0.03l4-1c0.176-0.044,0.337-0.135,0.465-0.263L21.003,7.414 c0.378-0.378,0.586-0.88,0.586-1.414s-0.208-1.036-0.586-1.414L19.417,3c-0.756-0.756-2.072-0.756-2.828,0L4.296,15.293 c-0.128,0.128-0.219,0.289-0.263,0.464l-1,4c-0.086,0.341,0.015,0.701,0.263,0.95C3.485,20.897,3.741,21,4.003,21z M18.003,4.414 L19.589,6l-1.586,1.586L16.417,6L18.003,4.414z M5.906,16.511l9.097-9.097L16.589,9l-9.098,9.097l-2.114,0.528L5.906,16.511z"></path></svg>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img className="h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""></img>
                    <div className="pt-2 pb-1 font-medium">John Travolta</div>
                    <div className="uppercase text-xs">Software Engineer</div>
                </div>
            </div>
            <div className="bg-white space-y-3 px-4 py-4 w-full rounded-md shadow">
                <div className="font-medium">Personal Information</div>
                <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                    <div>
                        <div className="text-sm text-gray-500">Country</div>
                        <div>New York City, USA</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#9CA3AF', transform: '-ms-filter' }}><path d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z"></path><path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z"></path></svg>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                    <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div>+324564949589</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#9CA3AF', transform: '-ms-filter' }}><path d="M16,12V6c0-2.217-1.785-4.021-3.979-4.021c-0.069,0-0.14,0.009-0.209,0.025C9.693,2.104,8,3.857,8,6v6c0,2.206,1.794,4,4,4 S16,14.206,16,12z M10,12V6c0-1.103,0.897-2,2-2c0.055,0,0.109-0.005,0.163-0.015C13.188,4.06,14,4.935,14,6v6c0,1.103-0.897,2-2,2 S10,13.103,10,12z"></path><path d="M6,12H4c0,4.072,3.061,7.436,7,7.931V22h2v-2.069c3.939-0.495,7-3.858,7-7.931h-2c0,3.309-2.691,6-6,6S6,15.309,6,12z"></path></svg>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div>johntravolta@aol.com</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#9CA3AF', transform: '-ms-filter' }}><path d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z"></path><path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z"></path></svg>
                </div>
            </div>
            <div className="bg-white space-y-3 px-4 py-4 w-full rounded-md shadow">
                
                <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                    <div>
                    <div className="text-sm text-gray-500">Facebook</div>
                    <div>http://facebook.com</div>
                    </div>
                    
                </div>
                <div className="flex items-center justify-between">
                    <div>
                    <div className="text-sm text-gray-500">Twitter</div>
                    <div>http://twitter.com</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent
