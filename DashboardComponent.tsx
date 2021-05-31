import React from 'react'
import ToolbarComponent from '../components/ToolbarComponent'
import SendMessageComponent from '../components/SendMessageComponent'
import MessageComponent from '../components/MessageComponent'
import DetailsComponent from '../components/DetailsComponent'
import InboxComponent from '../components/InboxComponent'
import DialogComponent from '../components/DialogComponent'
import { Switch, Route } from 'react-router-dom'
import ProfileComponent from '../components/ProfileComponent'
import GroupFormComponent from '../components/GroupFormComponent'
import GroupComponent from '../components/GroupComponent'


function DashboardComponent() {
    const [modal, setModal] = React.useState(false)
    const [status, setStatus] = React.useState<any>({
        type: null,
        active: false
    })

    // cancel call
    function cancelCall() {
        setModal(!modal)
    }

    // audio call
    function audioCall() {
        setStatus({ type: 'audio', active: false })
        setModal(true)
    }

    // video call
    function videoCall() {
        setStatus({ type: 'video', active: false })
        setModal(true)
    }

    // accept call
    function acceptCall() {
        const call__type = status.type
        setStatus({ type: call__type, active: true })
    }


    return (
        <>
            {modal && <DialogComponent acceptCall={acceptCall} cancelCall={cancelCall} status={status} />}
            <div className="grid grid-cols-12 gap-8 px-4 absolute inset-0 left-24 top-24">
                <div className="col-span-12 sm:col-span-2 xl:col-span-3  w-full max-h-screen">
                    <div className="hidden xl:block">
                        <Switch>
                            <Route path="/inbox" component={InboxComponent}></Route>
                            <Route path="/profile" component={ProfileComponent}></Route>
                            <Route path="/create-group" component={GroupFormComponent}></Route>
                            <Route path="/group" component={GroupComponent}></Route>
                        </Switch>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-8 xl:col-span-6 w-full max-h-screen">
                    <ToolbarComponent videoCall={videoCall} audioCall={audioCall} />
                    <div className="py-2">
                        <MessageComponent />
                    </div>
                    <SendMessageComponent />
                </div>
                <div className="col-span-12 sm:col-span-2 xl:col-span-3 w-full max-h-screen">
                    <div className="hidden xl:block">
                        <DetailsComponent />
                    </div>
                </div>
            </div>
        </>)
}

export default DashboardComponent
