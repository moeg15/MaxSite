import './contact.css';

export default function Contact() {
  return (
    <div>
    <div className='bold-line'></div>
    <div className='container2'>
      <div className='window'>
        <div className='overlay'></div>
        <div className='content'>
          <div className='welcome'>contact me</div>
          <div className='subtitle'>
          contact me with questions or concerns
          </div>
          <div className='input-fields'>
            <input type='text' placeholder='name' className='input-line full-width' />
            <input type='email' placeholder='Email' className='input-line full-width' />
            <textarea  placeholder='message' className='input-line full-width' style={{resize:"none"}}/>
          </div>
         
          <div>
            <button className='ghost-round full-width'>send messeage</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
