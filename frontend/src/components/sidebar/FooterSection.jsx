import { MdOutlineLogout, MdPerson, MdSettings } from "react-icons/md";

const FooterSection = () => {
  return (
    <div className="flex sticky bottom-0 mx-15">
      <MdOutlineLogout className="w-8 h-8 rotate-180" />
      <div className="flex gap-5 justify-end w-full">
        <MdSettings className="w-8 h-8" />
        <MdPerson className="w-8 h-8" />
      </div>
    </div>
  );
};

export default FooterSection;
