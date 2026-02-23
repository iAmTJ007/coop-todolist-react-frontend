function Navbar(){
    return(
        <div className="navbar">
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
export default Navbar;