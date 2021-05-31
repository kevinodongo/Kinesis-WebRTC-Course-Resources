import React from 'react'

interface IProps {
    videoCall: () => void
    audioCall: () => void
}

function ToolbarComponent({ videoCall, audioCall }: IProps) {
    return (
        <div className="bg-white flex items-center justify-between shadow rounded-md px-4 py-4">
            <div className="flex space-x-3 items-center">
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""></img>
                <div>
                    <div className="font-medium">John Travolta</div>
                    <div>Online</div>
                </div>
            </div>
            <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#9CA3AF', transform: '-ms-filter' }}><path d="M12,8c-2.168,0-4,1.832-4,4c0,2.168,1.832,4,4,4s4-1.832,4-4C16,9.832,14.168,8,12,8z M12,14c-1.065,0-2-0.935-2-2 s0.935-2,2-2s2,0.935,2,2S13.065,14,12,14z"></path><path d="M20,5h-2.586l-2.707-2.707C14.52,2.105,14.266,2,14,2h-4C9.734,2,9.48,2.105,9.293,2.293L6.586,5H4C2.897,5,2,5.897,2,7v11 c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V7C22,5.897,21.103,5,20,5z M4,18V7h3c0.266,0,0.52-0.105,0.707-0.293L10.414,4h3.172 l2.707,2.707C16.48,6.895,16.734,7,17,7h3l0.002,11H4z"></path></svg>
                <button onClick={videoCall} className="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#9CA3AF', transform: '-ms-filter' }}><path d="M18,7c0-1.103-0.897-2-2-2H4C2.897,5,2,5.897,2,7v10c0,1.103,0.897,2,2,2h12c1.103,0,2-0.897,2-2v-3.333L22,17V7l-4,3.333 V7z M16.002,17H4V7h12l0.001,4.999L16,12l0.001,0.001L16.002,17z"></path></svg>
                </button>
                <button onClick={audioCall} className="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#9CA3AF', transform: '-ms-filter' }}><path d="M16,12V6c0-2.217-1.785-4.021-3.979-4.021c-0.069,0-0.14,0.009-0.209,0.025C9.693,2.104,8,3.857,8,6v6c0,2.206,1.794,4,4,4 S16,14.206,16,12z M10,12V6c0-1.103,0.897-2,2-2c0.055,0,0.109-0.005,0.163-0.015C13.188,4.06,14,4.935,14,6v6c0,1.103-0.897,2-2,2 S10,13.103,10,12z"></path><path d="M6,12H4c0,4.072,3.061,7.436,7,7.931V22h2v-2.069c3.939-0.495,7-3.858,7-7.931h-2c0,3.309-2.691,6-6,6S6,15.309,6,12z"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default ToolbarComponent
