import React from 'react'
import { useHistory } from 'react-router-dom'
import { Auth } from "aws-amplify"

function SignupComponent() {
    const history = useHistory()
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    async function submit() {
        if (email && password) {
            const username = email
            await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                },
            }).then(() => {
                history.push("/")
            })
        }
    }

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-sm w-full space-y-8">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center">
                                <div className="w-8 z-10 h-8 bg-blue-500 rounded-full"></div>
                                <div className="w-8 -ml-2 h-8 bg-blue-100 rounded-full"></div>
                            </div>
                            <div><span className="font-bold">Topson</span> <span className="font-light">Messenger</span></div>
                        </div>
                        <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">Sign up a new account</h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm space-y-3">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email || ""}
                                    onChange={(event: any) => setEmail(event.target.value)}
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password || ""}
                                    onChange={(event: any) => setPassword(event.target.value)}
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <button onClick={() => history.push("/")} className="focus:outline-none font-medium text-blue-600 hover:text-blue-500">
                                    Already have account?
                                </button>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={submit}
                                type="button"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupComponent
