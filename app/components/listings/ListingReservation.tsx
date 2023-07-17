'use client';


import { Range } from "react-date-range";

import Button from "../Button";
import Calendar from "../inputs/Calendar";
import { useRouter } from "next/router";

interface ListingReservationProps {
  price: number;
  dateRange: Range,
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}
const handleButtonClick = () => {

  // burada localden aldığı telefon numarasına bağlanıp whatsapp'a aktarıyor ve mesajlaşma sağlanıyor
  // input telefon numarası çekme ve veritabanına kayıt etme yoktur

  const phoneNumber = ''; // Replace with the desired phone number
  const message = 'Hello, this is a special message!'; // Replace with the desired message

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  console.log("naber",whatsappUrl);
   window.location.href = whatsappUrl;
};

const ListingReservation: React.FC<
  ListingReservationProps
> = ({
  
  dateRange,
  
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates
}) => {
  return ( 
    <div 
      className="
      bg-white 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        overflow-hidden
      "
    >
      
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => 
          onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button 
          disabled={disabled} 
          label="Basvur" 
          onClick={onSubmit}
        />
      </div>
      <div className="p-4">
        <Button 
          disabled={disabled} 
          label="Mesaj At" 

          onClick={handleButtonClick}
        
          
        />
      </div>
      <hr />
      <div 
        className="
          p-4 
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-lg
        "
      >
        
      </div>
    </div>
   );
}
 
export default ListingReservation;