import React, { useState } from 'react';

const Adduser = () => {
    return (
        <div>
            <form className='form'>
                <div className='form-control'>
                    <label htmlFor='firstName'>Name: </label>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'
                    />
                </div>
                <button type='submit'>Add person</button>
            </form>
        </div>
  );
};

export default Adduser;
