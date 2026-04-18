// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog }) {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="h-24 lg:h-32 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1920}
          alt=""
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-2 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-xs">
          <p className="text-xs">{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-2">
            <p className="flex items-center gap-0.5 text-xs">
              <BsHeartFill size={12} />
              <span className="text-xs">{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 &&
              <p className="flex items-center gap-0.5 text-xs">
                <FaCommentAlt size={12} />
                <span className="text-xs">{blog.comments_count}</span>
              </p>
            }
          </div>
        </div>
        <Link target='_blank' href={blog.url}>
          <p className='my-1 lg:my-1.5 cursor-pointer text-sm text-white sm:text-base font-medium hover:text-violet-500 line-clamp-2'>
            {blog.title}
          </p>
        </Link>
        <p className='mb-1 text-xs text-[#16f2b3]'>
          {`${blog.reading_time_minutes} min`}
        </p>
        <p className='text-xs text-[#d3d8e8] pb-2 lg:pb-3 line-clamp-2'>
          {blog.description}
        </p>
        {/* <div className="">
          <Link target='_blank' href={blog.url}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default BlogCard;