import Image from 'next/image'
import imageLoader from '../../../hooks/imageLoader'
import { TypeContact, Contact } from '@constants/introduce'


const Contact = ({ data }: { data: TypeContact}) => {
  return (
    <div className="w-full fixed z-50">
      <ul className="flex flex-nowrap justify-around items-center h-32 ">
        {
          data?.map((item: Contact, index: number) => {
            return <li key={`contact-${index}`}>{item?.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default Contact;