import TodayTab from "../Elements/TodayTab";
import Navbar from "../Elements/Navbar";
import '../index.css';

function Home(){
    return(
        <div className="screen">
            <Navbar/>
            <TodayTab/>
        </div>
    )
}
export default Home;