function HeaderItem({ title = "", Icon }) {
  return (
    <div className="group flex flex-col cursor-pointer hover:text-white w-12 sm:w-20 items-center">
      <Icon className="group-hover:animate-bounce h-8 mb-1" />
      <p className="opacity-0 group-hover:opacity-100">{title}</p>
    </div>
  );
}

export default HeaderItem;
