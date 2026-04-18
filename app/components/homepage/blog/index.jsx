// @flow strict
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';
import Link from 'next/link';

function Blog({ blogs }) {
  // Show only first 3 blogs on homepage
  const displayedBlogs = blogs.slice(0, 3);
  const hasMore = blogs.length > 3;

  return (
    <div id='blogs' className="relative z-50 border-t my-8 lg:my-16 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-4 lg:py-6">
        <div className="flex  items-center">
          <span className="w-20 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-1.5 px-4 text-lg rounded-md">
            Blogs
          </span>
          <span className="w-20 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
        {
          displayedBlogs.map((blog, i) => (
            blog?.cover_image &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>

      {hasMore && (
        <div className="flex justify-center  mt-3 lg:mt-6">
          <Link href="/blog">
            <button className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-6 py-2 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold">
              <span>View All Blogs</span>
              <FaArrowRight size={14} />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Blog;