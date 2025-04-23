import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function SidebarCollapsed(){
    return(
        <>
        <div className='mt-20 fixed h-screen w-20 bg-white ml-2 items-center cursor-pointer space-y-8'>
            <div className="ml-4"><HomeIcon sx={{ fontSize: 30 }} className='mb-2'/><p  style={{ fontSize: 11 }}>Home</p></div>
            <div className="ml-4"><SlideshowOutlinedIcon sx={{ fontSize: 30 }} className='mb-2'/><p  style={{ fontSize: 11 }}>Shorts</p></div>
            <div><SubscriptionsOutlinedIcon sx={{ fontSize: 30 }} className='text-center ml-4 mb-2'/><p style={{ fontSize: 11 }}>Subscriptions</p></div>
            <div className="ml-4"><AccountCircleOutlinedIcon sx={{ fontSize: 30 }} className='mb-2'/><p className='ml-1' style={{ fontSize: 11 }}>You</p></div>
        </div>
        </>
    )
}

export default SidebarCollapsed;