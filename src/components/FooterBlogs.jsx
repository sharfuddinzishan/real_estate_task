import blogData from "../blogData";

export default function FooterBlogs() {
  return (
    <>
      <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-white">Latest blog</h4>
          <div className="flex flex-col gap-8">
            {blogData.slice(-2).map((blog) => {
              return (
                <>
                  <a
                    key={blog.id}
                    href={`blogs/${blog.id}`}
                    className="group flex items-center gap-[22px]"
                  >
                    <div className="overflow-hidden rounded">
                      <img
                        src={blog.image}
                        alt={blog.text || "blog_image"}
                        className="h-8 w-12"
                      />
                    </div>
                    <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                      {blog.text.slice(0, 41) + `...`}
                    </span>
                  </a>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
