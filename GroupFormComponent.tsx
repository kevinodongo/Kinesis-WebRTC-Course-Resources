import React from 'react'

function GroupFormComponent() {
    return (
        <div className="flex flex-col space-y-3 px-2 max-h-screen overflow-y-auto pb-24">
            <div className="font-medium text-xl">
                Create a new group
            </div>
            <div className="bg-white flex flex-col rounded-md px-6 py-6 space-y-3 shadow">
                <div >
                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                                >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex flex-col space-y-3 sm:mt-0">
                    <div>
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                            Group Name
                        </label>
                        <input
                            type="text"
                            name="group_name"
                            id="group_name"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                            About
                        </label>
                        <div className="mt-1">
                            <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                                placeholder="you@example.com"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    <div className="text-right">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <div className="font-medium text-xl">
                Add a member
            </div>
            <div className="bg-white flex flex-col rounded-md px-6 py-6 space-y-3 shadow">
                <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <input
                        type="text"
                        name="group_name"
                        id="group_name"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <p className="text-xs text-gray-400">Please provide the email of the members you want to add to this group on at a time.</p>
                </div>
                <button
                    type="button"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default GroupFormComponent
