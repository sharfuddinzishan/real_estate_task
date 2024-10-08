import blogData from "../blogData";
import FooterSingleBlog from "./FooterSingleBlog";

export default function FooterBlogs() {
  return (
    <>
      <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-white">Latest blog</h4>
          <div className="flex flex-col gap-8">
            {/* Show last two blogs */}
            {blogData.slice(-2).map((blog) => {
              return (
                <>
                  <FooterSingleBlog
                    key={blog.id}
                    blog={blog}
                  ></FooterSingleBlog>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
