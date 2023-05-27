import React from 'react';

const TabLigne = () => {
  return (
    <div className="entree">
        <div className="cellules">
            <span>Ecran</span>
        </div>
        <div className="cellules">
            <span>15</span>
        </div>
        <div className="cellules">
            <span>50000Ar</span>
        </div>
        <div className="cellules">
            <span>
                <input type='number' value="50" style={{width: '50px', padding: '4px', border: '1px solid #d1cfcf', color: '#333333ad', borderRadius: '3px', outline: 'none'}} />
            </span>
        </div>
        <div className="cellules">
            <span>15000</span>
        </div>
        <div className="cellules"> 
            <span><i className='fas fa-trash-can' style={{color:'#fe3a3a', marginLeft:'25px'}} title='Supprimer'></i></span>
        </div>  
    </div>

  )
}

export default TabLigne