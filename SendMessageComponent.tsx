import React from 'react'

function SendMessageComponent() {
    return (
        <div className="bg-white flex items-center px-4 space-x-3 rounded-md shadow py-6">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#9CA3AF', transform: '-ms-filter' }}><path d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z"></path></svg>
            </button>
            <input
                id="message"
                name="message"
                className="block py-2 w-full placeholder-gray-500 focus:ring-blue-500 focus:outline-none focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                placeholder="Type your message"
            ></input>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#9CA3AF', transform: '-ms-filter' }}><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M14.829,14.828c-0.185,0.184-0.384,0.349-0.592,0.489c-0.217,0.146-0.445,0.27-0.68,0.369 c-0.244,0.103-0.496,0.181-0.749,0.233c-0.531,0.108-1.087,0.108-1.616,0c-0.254-0.052-0.506-0.13-0.75-0.233 c-0.234-0.099-0.463-0.223-0.679-0.369c-0.209-0.141-0.408-0.305-0.593-0.489c-0.181-0.181-0.346-0.38-0.488-0.592l-1.658,1.119 c0.215,0.318,0.462,0.617,0.734,0.889c0.273,0.273,0.572,0.52,0.887,0.731c0.323,0.218,0.666,0.404,1.02,0.553 c0.365,0.154,0.744,0.272,1.128,0.35C11.189,17.959,11.596,18,12,18s0.811-0.041,1.208-0.122c0.383-0.078,0.762-0.196,1.127-0.35 c0.354-0.149,0.696-0.335,1.021-0.553c0.313-0.212,0.612-0.458,0.886-0.731c0.272-0.271,0.52-0.571,0.734-0.889l-1.658-1.119 C15.175,14.448,15.01,14.647,14.829,14.828z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle></svg>
            </button>
            <button className="rounded-full py-2 px-2 flex items-center justify-center bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'white', transform: '-ms-filter' }}><path d="M21.426,11.095l-17-8c-0.35-0.163-0.763-0.112-1.061,0.133C3.066,3.473,2.937,3.868,3.03,4.242L4.969,12L3.03,19.758 c-0.094,0.374,0.036,0.77,0.335,1.015C3.548,20.923,3.772,21,4,21c0.145,0,0.29-0.031,0.426-0.095l17-8 C21.776,12.74,22,12.388,22,12S21.776,11.26,21.426,11.095z M5.481,18.197L6.32,14.84L12,12L6.32,9.16L5.481,5.803L18.651,12 L5.481,18.197z"></path></svg>
            </button>
        </div>
    )
}

export default SendMessageComponent
