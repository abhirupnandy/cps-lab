const Card = ({ title, onClick }) => (
  <div onClick={onClick} className="group p-2 basis-1/2">
    <div className="flex flex-col gap-4 justify-center items-center py-7 mx-auto bg-gray-100 group-hover:bg-[var(--accent)]">
      <div className="w-[80px] h-[80px] rounded-full bg-[url('image.jpeg')] bg-[length:52.64px_auto] bg-repeat border-[1px] border-black"></div>
      <p className="text-[20px] font-bold text-center text-[var(--accent)] group-hover:text-white">
        {title}
      </p>
    </div>
  </div>
);

export default Card;
