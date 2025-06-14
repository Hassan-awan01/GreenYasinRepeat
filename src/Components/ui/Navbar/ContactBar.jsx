import { IoMail } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
const ContactItem = ({ icon, text }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span className="text-base">{text}</span>
  </div>
);

const ContactBar = () => (
  <div className="hidden bg-emerald-600 py-3 md:block">
    <div className="global-container flex max-w-screen-xl items-center justify-between text-sm text-white">
      <span className="md:w-96! xl:w-max!">
        Welcome to{' '}
        <span className="text-base font-semibold text-emerald-300">
          Green Yasin
        </span>
        , we hope you will enjoy our services and have a good experience.
      </span>
      <div className="mr-1 flex items-center justify-center space-x-6">
        <ContactItem icon={<IoMail size={25} />} text="info@grenyasin.pk" />
        <ContactItem icon={<FaPhoneAlt size={20} />} text="04235167290" />
      </div>
    </div>
  </div>
);

export default ContactBar;
