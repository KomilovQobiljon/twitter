import SidebarMenuItem from "./SidebarMenuItem";
import Image from 'next/image';
import { DotsHorizontalIcon, HomeIcon } from '@heroicons/react/solid';
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from '@heroicons/react/outline';

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
        {/* Twitter Logo */}
        <div className='hoverEffect p-0 hover:bg-blue-100 xl:px-1'>
            <Image src='https://help.twitter.com/content/dam/help-twitter/brand/logo.png' width='50' height='50' alt='Twitter Logo' />
        </div>

        {/* Menu */}
        <div className='mt-4 mb-2.5 xl:items-start'>
            <SidebarMenuItem text="Home" Icon={ HomeIcon } />
            <SidebarMenuItem text="Explore" Icon={ HashtagIcon } />
            <SidebarMenuItem text="Notification" Icon={ BellIcon } />
            <SidebarMenuItem text="Messages" Icon={ InboxIcon } />
            <SidebarMenuItem text="Bookmarks" Icon={ BookmarkIcon } />
            <SidebarMenuItem text="Lists" Icon={ ClipboardIcon } />
            <SidebarMenuItem text="Profile" Icon={ UserIcon } />
            <SidebarMenuItem text="More" Icon={ DotsCircleHorizontalIcon } />
        </div>

        {/* Button */}
        <button
            className="bg-blue-400 text_white rounded-full w-56 h-12 font-bold
            shadow-md hover:brightness-95 text-lg hidden xl:inline"
        >
            Tweet
        </button>

        {/* Mini-Profile */}
        <div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto'>
            <img src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png' 
                alt='user-img' 
                width="250"
                height="250"
                className="h-10 w-10 rounded-full xl:mr-2"
            />
            <div className='leading-5 hidden xl:inline'>
                <h4 className='font-bold'>Komilov Kobiljon</h4>
                <p className="text-gray-500">@codewithsahand</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
    </div>
  )
}

export default Sidebar