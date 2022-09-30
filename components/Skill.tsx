type Props = {};

const Skill = (props: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <img
        src="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png"
        alt="Skill"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
    </div>
  );
};

export default Skill;
