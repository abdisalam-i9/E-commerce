import { useParams, Link } from "react-router-dom";
import BlogData from "./BlogData"; 

function View() {
  const { id } = useParams();

  const post = BlogData.find(function(item) {
    return item.id === Number(id);
  });

 

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="max-w-3xl mx-auto">
        
      

        <div className="bg-white border-gray-400 rounded p-6">
          
          <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
            <span className="text-xs font-bold uppercase bg-gray-200 text-gray-700  border-gray-400 px-2 py-0.5 rounded">
              {post.category}
            </span>
            <span>•</span>
            <time>{post.date}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Cinwaanka Maqaalka */}
          <h1 className="text-3xl font-bold text-black mb-6">
            {post.title}
          </h1>

          <div className="w-full h-80 bg-gray-200 border border-gray-400 rounded mb-6 overflow-hidden">
            <img
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="border-t-2 border-gray-300 pt-4">
            <p className="text-gray-800 text-base leading-relaxed whitespace-pre-line">
              {post.excerpt}
            </p>
          </div>

          

        </div>
      </div>
    </div>
  );
}

export default View;