import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionHeading from '../../Shared/SectionHeading';

function ContactInfo() {
  const Contact = {
    phones: [
      { number: '+92 326 4140389', href: 'tel:+923264140389' },
      { number: '+92 326 6319502', href: 'tel:+923266319502' },
    ],
    address: {
      line1: 'PIA Road, Lahore',
    },
    emails: [
      {
        address: 'hamzaahmad2003@gmail.com',
        href: 'mailto:hamzaahmad2003@gmail.com',
      },
    ],
  };
  return (
    <motion.div
      className="bg-gray-50 p-8 rounded-2xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <SectionHeading title="Get In Touch" highlightWord="Touch" textAlignment="left" className="!text-left !mb-4"/>

      <div className="space-y-8">
        {/* Phone Numbers */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="flex-shrink-0 bg-emerald-500 h-16 w-16 flex items-center justify-center rounded-full">
            <FaPhone className="text-2xl text-white" />
          </div>
          <div className="ml-6">
            <h3 className="font-semibold text-gray-800">Call for help:</h3>
            {Contact.phones.map((phone, index) => (
              <p key={index} className="text-emerald-500 transition-colors duration-200 hover:text-emerald-600">
                <a href={phone.href}>{phone.number}</a>
              </p>
            ))}
          </div>
        </motion.div>

        {/* Address */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="flex-shrink-0 bg-emerald-500 h-16 w-16 flex items-center justify-center rounded-full">
            <FaMapMarkerAlt className="text-2xl text-white" />
          </div>
          <div className="ml-6">
            <h3 className="font-semibold text-gray-800">Head office address:</h3>
            <p className="text-gray-600">
              {Contact.address.line1}
            </p>
            {Contact.address.line2 && (
              <p className="text-gray-600">{Contact.address.line2}</p>
            )}
          </div>
        </motion.div>

        {/* Emails */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          <div className="flex-shrink-0 bg-emerald-500 h-16 w-16 flex items-center justify-center rounded-full">
            <FaEnvelope className="text-2xl text-white" />
          </div>
          <div className="ml-6">
            <h3 className="font-semibold text-gray-800">Mail for information:</h3>
            {Contact.emails.map((email, index) => (
              <p key={index} className="text-emerald-500 transition-colors duration-200 hover:text-emerald-600">
                <a href={email.href}>{email.address}</a>
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ContactInfo;
