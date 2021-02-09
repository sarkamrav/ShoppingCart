import React,{useState,useEffect} from 'react'
import styled  from 'styled-components';

const Wrapper = styled.div`
    width: 348px;
    left: 304px;
    top: 73px;
    justify-content: center;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 82px;
    background: green;
    position: fixed;
    z-index: 99999999;`;
   

const FlashMesaage = ({text,time}) => {
    const [showLoading, setShowLoading] = useState(true)
    useEffect(
        () => {
          let timer1 = setTimeout(() => setShowLoading(null), time)

          return () => {
            clearTimeout(timer1)
          }
        },[text]
      )
    return (
        <div>
       { showLoading && <Wrapper>{text}</Wrapper>}
        </div>
    )
}

export default FlashMesaage

