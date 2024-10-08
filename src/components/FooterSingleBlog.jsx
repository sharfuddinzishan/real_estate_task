// eslint-disable-next-line react/prop-types
export default function FooterSingleBlog({ blog }) {
  const { id, image, text } = blog || {};
  return (
    <>
      <a href={`blogs/${id}`} className="group flex items-center gap-[22px]">
        <div className="overflow-hidden rounded">
          <img src={image} alt={text || "blog_image"} className="h-8 w-12" />
        </div>
        <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
          {text.slice(0, 41) + `...`}
        </span>
      </a>
    </>
  );
}
