

import ViewModal from './ViewModal';
import ReactImageMagnify from 'react-image-magnify';

function Modal ({closeModal}) {
 
    
    const carImage = './iamges/car.jpg';
    return (   
        
       <div>
        <ViewModal/>
      
        <div className="w-4/5 h-4/5 bg-slate-300 rounded-2xl left-20 top-4 drop-shadow-lg shadow-slate-900"> 
        
        <div className=" flex justify-between w-full bg-slate-900 rounded-t-xl my-4 "> 
        
        <h1 className="text-3xl p-4 text-slate-200 relative top-2 left-4 font-thin">Hover over the image to zoom</h1>
        <button className=" bg-red-400 p-4 m-4 h-1/20 rounded-2xl " onClick={ closeModal } >X</button>
      
        </div>
        <div className="w-full relative bottom-4  "> 
        <ReactImageMagnify {...{
    smallImage: {
        alt: 'car Image',
        isFluidWidth: true,
        src: './images/car.src'
    },
    largeImage: {
        src: './images/car.src',
        width: 1/5,
        height: 1/5
    }
}} />
      
        </div>
        
        </div>
        </div>
        
    )
}

export default Modal;