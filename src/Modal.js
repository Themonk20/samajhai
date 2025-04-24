import ViewModal from './ViewModal';
import ReactImageMagnify from 'react-image-magnify';
import carImage from './images/carImage.jpg';

function Modal({ closeModal }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <ViewModal />

            <div className="w-4/5 h-4/5 bg-slate-300 rounded-2xl shadow-2xl overflow-hidden relative flex flex-col opacity-80">
                
               
                <div className="flex justify-between items-center bg-slate-900 rounded-t-2xl px-6 py-4">
                    <h1 className="text-2xl text-slate-200 font-light">
                        Hover over the image to zoom
                    </h1>
                    <button
                        className="bg-red-400 px-4 py-2 rounded-xl text-white font-bold"
                        onClick={closeModal}
                    >
                        X
                    </button>
                </div>

               
                <div className="flex justify-center mt-2" style={{ flexGrow: 1 }}>
                    <div style={{ width: '60%', maxWidth: '700px' }}>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Car Image',
                                    isFluidWidth: true,
                                    src: carImage,
                                },
                                largeImage: {
                                    src: carImage,
                                    width: 1400,
                                    height: 1400,
                                },
                                enlargedImageContainerDimensions: {
                                    width: '200px',
                                    height: '200px',
                                },
                                enlargedImagePosition: 'over',
                                lensStyle: {
                                    backgroundColor: 'rgba(255,255,255,0.3)',
                                    border: '2px solid #888',
                                    borderRadius: '50%',
                                },
                            }}
                        />
                    </div>
                </div>

                
                <div className="flex justify-center gap-8 my-6">
                    <button className="bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition">
                        Clear
                    </button>
                    <button className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition">
                        Incorrect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;