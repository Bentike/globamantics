import './house.css';

const House = (house) => {
    return ( 
        <div>
            <div className='row mt-2'>
               <h5 className='col-md-12'>{house.house.country}</h5>
            </div>
            <div className='row'>
               <h5 className='col-md-12'>{house.house.address}</h5>
            </div>
            <div className='row'>
                <div className='col-md-7'>
                   <img src={house.house.photo} alt='house'/>
                </div>
                <div className='col-md-5'>
                   <p className='price'>${house.house.price}</p>
                   <p>{house.house.description}</p>
                </div>
            </div>
        </div>
     );
}
 
export default House;