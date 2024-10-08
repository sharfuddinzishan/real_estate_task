/* eslint-disable react/prop-types */

// Reusable Button Component
/*****************Sign Up & Contact Us Button*********************/
export const BlueLink = ({ title, href, btnClass }) => {
  return (
    <a
      href={href}
      className={`${btnClass} rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark`}
    >
      {title}
    </a>
  );
};

const Buttons = {
  BlueLink,
};

export default Buttons;
