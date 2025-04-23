import Channel from "../components/Channel";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function ChannelPage(){
return(
    <>
    <NavBar/>
    <div className="flex">
        <div className="hidden xl:block">
          <SideBar />
        </div>
        <div className="flex-1 mt-36 px-4">
          <Channel />
        </div>
      </div>
    </>
)
}

export default ChannelPage;
