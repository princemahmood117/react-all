import { useState } from "react";
import Pannel from "./Pannel";

const Accordian = () => {
const [activeIndex, setActiveIndex] = useState(0);


  return (
    <>
      <h2>this is sharing components</h2>

      <Pannel title={'Paid Course'} isActive={activeIndex === 0 && true} handleActive={() => setActiveIndex(0)}>
        Corrupti consectetuer dicta, tempore, phasellus voluptatum dignissim officia imperdiet, arcu at parturient, litora habitant omnis rhoncus faucibus magnam! Eos! Accumsan. Pede soluta! Sed? Interdum posuere. Aptent mollit illum nostrud consectetur ullamcorper aute! Quis? Taciti? Imperdiet aliqua?
      </Pannel>

      <Pannel title={'Free Course'} isActive={activeIndex === 1 && true} handleActive={() => setActiveIndex(1)}>
        Leo cras beatae exercitationem quibusdam cumque. Tempore massa minus, pariatur. Sapien esse ultrices aut bibendum magnis cillum lacinia, itaque repudiandae possimus. Ac mollitia purus, nascetur, sociis pharetra montes labore, torquent!      
      </Pannel>

      <Pannel title={'Free Course'} isActive={activeIndex === 2 && true} handleActive={() => setActiveIndex(2)}>
        Leo cras beatae exercitationem quibusdam cumque. Tempore massa minus, pariatur. Sapien esse ultrices aut bibendum magnis cillum lacinia, itaque repudiandae possimus. Ac mollitia purus, nascetur, sociis pharetra montes labore, torquent!      
      </Pannel>
    </>
  );
};

export default Accordian;
