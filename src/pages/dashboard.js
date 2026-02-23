function Dashboard(){
    return(
        <div className="dashboard">
            <ul>
                <li>
                    <a href="/todo">My Tasks</a>
                </li>
                <li>
                    <a href="/friends">Friends</a>
                </li>
                <li>
                    <a href="/login">Logout</a>
                </li>
            </ul>
        </div>
    )
}
export default Dashboard;