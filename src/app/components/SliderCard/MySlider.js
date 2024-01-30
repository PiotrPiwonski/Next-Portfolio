import React from 'react';
import { DataArray } from '@/app/data';
import SliderCard from './SliderCard';

export default function MySlider() {
  return (
    <div>
        {
            DataArray.map((item, index) => (
                <div className='my-slider' key={index}>
                    <SliderCard item={item} index={index}/>
                </div>
            ))
        }
    </div>
  )
}
