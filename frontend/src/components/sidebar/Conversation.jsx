const Conversation = () => {
  return (
    <div className="flex gap-3 items-center hover:bg-slate-800 rounded p-2 py-1 cursor-pointer">
      <div className="avatar avatar-online">
        <div className="w-10 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <h3>John Doe</h3>
        <p className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, beatae.
        </p>
      </div>

      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
};

export default Conversation;
