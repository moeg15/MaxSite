import Flippy from './Flippy';
import './home2.css'

export default function Divder() {
  const img1 = '../../max3.JPG';
  const img2 = '../../max1.JPG'
    const img3 = '../../max2.JPG'
  return (
    <section className="tilt">
      <div className='left-content'>
        <h1>resume</h1>
       
      </div>
      <div className="right-content">
        <Flippy backimg={img3} header={"im heading 1"}/>
        <Flippy backimg={img2} header={"im heading 2"}/>
        <Flippy backimg={img1} header={"im heading 3"}/>
      </div>
 
    </section>
  );
}
