import React from 'react'
import HexaShowing from '../../../components/HexaShowing/HexaShowing'
import eventVideo from '../../../assets/event.mp4'
import discountImg from '../../../assets/discount.jpg'
const HexaEvtDiscount = () => {
    const evtProps = {
        content:'SỰ KIỆN',
        propSrc: eventVideo,
        propsType:'iframe',
        propsID:'sukien'
    }
    const discountProps = {
        content:'ƯU ĐÃI',
        propSrc:discountImg,
        propsType:'img',
        propsID:'uudai'
    }
    return (
    <div>
        {HexaShowing(evtProps)}
        {HexaShowing(discountProps)}
    </div>
  )
}

export default HexaEvtDiscount
