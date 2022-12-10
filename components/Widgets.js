import { SearchIcon } from "@heroicons/react/outline";
import { useState } from 'react';
import News from './News';

const Widgets = ({ articles }) => {
  const [articleNumber, setArticleNumber] = useState(3);

  const showMoreHandler = () => {
    setArticleNumber((prev)=>{
      if(prev <= articles.length){
        return (prev+3);
      }
    });
  }
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
        <div className="w-[90%] xl:w-[75%] sticky top-0 bg-transparent overflow-hidden">
            <div className="flex items-center p-3 rounded-full bg-red-300 relative">
                <SearchIcon className="h-5 z-50 text-gray-500 " />
                <input type="text" placeholder="Search Twitter" 
                className="absolute inset-0 rounded-full pl-11
                        border-gray-500 text-gray-700 
                        focus:shadow-lg focus:bg-white bg-gray-100 focus:outline-none" />
            </div>
        </div>

        <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
            <h4 className="font-bold text-xl px-4">What's happening?</h4>
            { articles.slice(0,articleNumber).map((article)=> (
                <News key={article.publishedAt} article={article} />
            ))}
            <button className="text-blue-300 pl-4 pb-3 hover:text-blue-400" onClick={showMoreHandler}>Show more</button>
        </div>
        
    </div>
  )
}

export default Widgets