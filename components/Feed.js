import { SparklesIcon } from "@heroicons/react/outline";
import Input from './Input';
import Post from './Post';

const Feed = () => {
    const posts = [
        {
            id: '1',
            name: "Komilov Qobiljon",
            userName: "codewithqobil",
            userImage: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
            img: "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            text: "nice view!",
            timestamp:"2 hours ago",
        },
        {
            id: '2',
            name: "Komilov Nodirbek",
            userName: "codewithnodir",
            userImage: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
            img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            text: "wow this mountains!",
            timestamp:"2 days ago",
        }
    ]
    return (
        <div className="xl:ml-[370px] border-l border-r xl:min-w-[570px] sm:ml-[73px] flex-grow max-w-xl">
            <div className="flex items-center py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
                <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                    <SparklesIcon className='h-5' />
                </div>
            </div>
            <Input />
            {posts.map(post=>(
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Feed;