

const Card = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col w-[300px] h-[380px] items-center justify-center bg-two p-5 gap-5">
      <div className="w-[121px] h-[120px]">{icon}</div>
      <span className="w-full text-left font-semibold text-[32px] text-one">{title}</span>
      <span className="font-normal text-[20px] text-seven">{description}</span>
    </div>
  );
};

export default Card;
