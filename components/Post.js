import { DotsHorizontalIcon, ChatIcon, TrashIcon, HeartIcon, ShareIcon, ChartBarIcon } from "@heroicons/react/outline"

const Post = ({ post }) => {
  return (
    <div className="flex cursor-pointer p-3 border-b border-gray-200">
        {/* User Image */}
        <img src={post.userImage} alt="user-image" className="w-11 h-11 rounded-full mr-4" />
        {/* Right side */}
        <div className="">
            {/* Header */}
            <div className="flex justify-between items-center">
                {/* Post and user info */}
                <div className="flex space-x-1 items-center whitespace-nowrap">
                    <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
                    <span className="text-sm sm:text-[15px]">@{post.userName} - </span>
                    <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
                </div>
                {/* Dot icon */}
                <DotsHorizontalIcon className="h-10 w-10 hoverEffect hover:bg-sky-100 hover:text-sky-500 p-2"/>
            </div>
            {/* Post text */}
            <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">{post.text}</p>
            {/* Post Image */}
            <img src={post.img} className="rounded-2xl mr-2"/>
            {/* Post Icons */}
            <div className="flex justify-between text-gray-500 p-2">
                <ChatIcon className="h-9 w-9 cursor-pointer hover:text-sky-500 hover:bg-sky-100 hoverEffect"/>
                <TrashIcon className="h-9 w-9 cursor-pointer hover:text-red-600 hover:bg-red-100 hoverEffect"/>
                <HeartIcon className="h-9 w-9 cursor-pointer hover:text-red-600 hover:bg-red-100 hoverEffect"/>
                <ShareIcon className="h-9 w-9 cursor-pointer hover:text-sky-500 hover:bg-sky-100 hoverEffect"/>
                <ChartBarIcon className="h-9 w-9 cursor-pointer hover:text-sky-500 hover:bg-sky-100 hoverEffect"/>
            </div>
        </div>
    </div>
  )
}

export default Post