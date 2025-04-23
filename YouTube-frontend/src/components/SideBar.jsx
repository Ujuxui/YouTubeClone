import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import { Link } from 'react-router-dom';

function SideBar(){
    return(
        <>
        <div className="fixed h-screen overflow-y-auto w-62 bg-white mt-16">
        <div className='ml-4 items-center cursor-pointer'>
            <Link to="/home"><div className='bg-gray-100 rounded-lg p-2 font-semibold'><HomeIcon sx={{ fontSize: 30 }}  className='mr-6'/>Home</div></Link>
            <div className='p-2'><SlideshowOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Shorts</div>
            <div className='p-2'><SubscriptionsOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Subscriptions</div>
            <hr className='w-52 font-light text-gray-200 mt-4'/>
        </div>
        <div className='mt-6 ml-4'>
        <h1 className='ml-3 text-lg font-medium'>You<KeyboardArrowRightOutlinedIcon  className='ml-'/></h1>
            <div className='p-2'><HistoryOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>History</div>
            <div className='p-2'><PlaylistPlayOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Playlists</div>
            <div className='p-2'><SmartDisplayOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Your videos</div>
            <div className='p-2'><ScheduleOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Watch Later</div>
            <div className='p-2'><ThumbUpOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Liked videos</div>
            <hr className='w-52 font-light text-gray-200 mt-4'/>
        </div>
        <div className='ml-4 mt-3 items-center cursor-pointer'>
            <h1 className='ml-3 text-lg font-medium'>Explore</h1>
            <div className='p-2'><WhatshotOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Trending</div>
            <div className='p-2'><ShoppingBagOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Shopping</div>
            <div className='p-2'><MusicNoteOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Music</div>
            <div className='p-2'><MovieCreationOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Movies</div>
            <div className='p-2'><SensorsOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Live</div>
            <div className='p-2'><SportsEsportsOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Gaming</div>
            <div className='p-2'><NewspaperIcon sx={{ fontSize: 30 }}  className='mr-6'/>News</div>
            <div className='p-2'><EmojiEventsOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Sports</div>
            <div className='p-2'><SchoolOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Courses</div>
            <div className='p-2'><DryCleaningOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Fashion & Beauty</div>
            <div className='p-2'><PodcastsOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Podcast</div>
            <hr className='w-52 font-light text-gray-200 mt-4'/>
        </div>
        <div className='ml-4 mt-3 items-center cursor-pointer'>
        <h1 className='ml-3 text-lg font-medium mt-4 mb-2'>More from YouTube</h1>
            <div className='flex p-2'><img src='src\assets\YT_premium_logo.png' alt="YT Premium logo"  className='w-6 h-5 mr-6'/>YouTube Premium</div>
            <div className='flex p-2'><img src='src\assets\YT_music_logo.png' alt="YT Music logo"  className='w-6 h-6 mr-6'/>YouTube Music</div>
            <div className='flex p-2'><img src='src\assets\YT_kids_logo.png' alt="YT Kids logo"  className='w-7 h-5 mr-6'/>YouTube Kids</div>
            <hr className='w-52 font-light text-gray-200 mt-4'/>
        </div>
        <div className='ml-4 mt-3 items-center cursor-pointer'>
            <div className='p-2'><SettingsOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Settings   </div>
            <div className='p-2'><FlagOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Report History</div>
            <div className='p-2'><HelpOutlineOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Help</div>
            <div className='p-2'><FeedbackOutlinedIcon sx={{ fontSize: 30 }}  className='mr-6'/>Send feedback</div>
            <hr className='w-52 font-light text-gray-200 mt-4'/>
        </div>
        <div className='ml-6 mt-3 mb-4 space-y-3 text-sm font-medium text-gray-600 cursor-pointer'>
            <p>About Press Copyright <br/>Contact us Creators Advertise<br/> Developers</p>
          <p>Terms Privacy Policy & Safety<br/> How YouTube works<br/> Test new features</p>
          <p className='font-light text-xs text-gray-500 mb-4'>© 2025 Google LLC</p>
        </div>
        </div>
        </>
    )
}
export default SideBar;