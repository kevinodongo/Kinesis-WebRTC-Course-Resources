import React from 'react'

interface IProps {
    acceptCall: () => void
    cancelCall: () => void
    status: any
}

function DialogComponent({ acceptCall, cancelCall, status }: IProps) {
    return (
        <div>
            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                        <div className="bg-white flex flex-col items-center justify-center px-4 py-8">
                            <div>{status.active && status.type === 'video' ? (
                                <div className="px-4 flex flex-col space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div >
                                            <div className="font-medium">Video session</div>
                                            <p className="text-sm">This video session is powered by Kinesis Video Streams!</p>
                                        </div>
                                        <div className="font-medium text-blue-500">0.00</div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center h-44">
                                        <video src="" controls className="h-full rounded-md w-full"></video>
                                        <video src="" controls className="h-full rounded-md w-full"></video>
                                    </div>
                                    <div className="flex w-full items-center justify-center">
                                        <button onClick={cancelCall} className="bg-red-500 focus:outline-none rounded-md py-2 px-4 text-white font-medium">End Call</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-6 flex flex-col items-center justify-center px-4 py-8">
                                    <div className="flex flex-col items-center justify-center">
                                        <img className="h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""></img>
                                        <div className="pt-2 pb-1 font-medium">John Travolta</div>
                                        <div className="uppercase text-xs">Software Engineer</div>
                                    </div>
                                    {!status.active && <div>Incomming call...</div>}
                                    {status.active && status.type === 'audio' ? 
                                    <div>
                                        <audio src=""></audio>
                                        <div className="font-medium text-blue-500">Conencted: 0.00</div>
                                    </div>
                                    : null }
                                    <div className="space-x-2">
                                        <button onClick={cancelCall} className="bg-red-500 focus:outline-none rounded-full p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'white', transform: '-ms-filter' }}><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"></path></svg>
                                        </button>
                                        {status.type === 'audio' && status.active ? null :
                                            <button onClick={acceptCall} className="bg-green-500 focus:outline-none rounded-full p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'white', transform: '-ms-filter' }}><path d="M17.707,12.293c-0.391-0.391-1.023-0.391-1.414,0l-1.594,1.594c-0.739-0.22-2.118-0.72-2.992-1.594 s-1.374-2.253-1.594-2.992l1.594-1.594c0.391-0.391,0.391-1.023,0-1.414l-4-4c-0.391-0.391-1.023-0.391-1.414,0L3.581,5.005 c-0.38,0.38-0.594,0.902-0.586,1.435c0.023,1.424,0.4,6.37,4.298,10.268s8.844,4.274,10.269,4.298c0.005,0,0.023,0,0.028,0 c0.528,0,1.027-0.208,1.405-0.586l2.712-2.712c0.391-0.391,0.391-1.023,0-1.414L17.707,12.293z M17.58,19.005 c-1.248-0.021-5.518-0.356-8.873-3.712c-3.366-3.366-3.692-7.651-3.712-8.874L7,4.414L9.586,7L8.293,8.293 C8.054,8.531,7.952,8.875,8.021,9.205c0.024,0.115,0.611,2.842,2.271,4.502s4.387,2.247,4.502,2.271 c0.333,0.071,0.674-0.032,0.912-0.271L17,14.414L19.586,17L17.58,19.005z"></path></svg>
                                        </button>
                                        }
                                    </div>
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DialogComponent
