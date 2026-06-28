import React from "react";
import BlogData from "./BlogData";
import View from "./View";

function Blog() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center sm:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Maqaalladii Ugu Dambeeyay
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Kala soco halkan dib-u-eegista agabka tignoolajiyada, falanqaynta
            qalabka, iyo talooyinka nolosha maalinlaha ah.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BlogData.map((post) => (
            <article
              key={post.id}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="shrink-0 relative h-48 bg-gray-200">
                <img
                  className="h-full w-full object-cover"
                  src={post.image}
                  alt={post.title}
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                    <time dateTime={post.date}>{post.date}</time>
                    <span className="text-gray-300">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 leading-snug hover:text-gray-600 transition-colors duration-200">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={`/blog/${post.id}`}
                    className="text-sm font-semibold text-gray-700 hover:text-black inline-flex items-center gap-1 group"
                  >
                    Sii Akhri
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Blog;
