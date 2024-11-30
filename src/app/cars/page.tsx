import Image from 'next/image'
import React from 'react'


const page = () => {

const carData = [
    {id:1, 
        name: 'BMW', 
        price: 	420000,
        description: '(BMW) is renowned worldwide for its luxury, innovation, and engineering. This brand is for those who seek the perfect blend of performance and elegance.',
        image: '/bmw-car.png'
    }, 
    {id:2, 
        name: 'EXOTIC', 
        price: 6250000,
        description: 'Exotic cars are high-performance, luxury vehicles that are often rare, exclusive, and designed for enthusiasts who seek unparalleled speed, style, and prestige.',
        image: '/exotic-car.png'
    }, 
    {id:3, 
        name: 'LUXUARY', 
        price: 	8200000,
        description: 'Luxury cars are vehicles that combine high-quality materials, cutting-edge technology, superior comfort, and exceptional performance.',
        image: '/luxury-car.png'
    }, 
    {id:4, 
        name: 'Electric', 
        price: 	520000,
        description: 'An electric car (EV) is a vehicle that runs entirely on electricity, powered by an electric motor instead of a traditional internal combustion engine (ICE). These cars use batteries that are charged through an external power source',
        image: '/electric-car.png'
    }, 
    {id:5, 
        name: '720S-GT3', 
        price: 	4200000,
        description: 'The McLaren 720S GT3 is a high-performance race car developed by McLaren Customer Racing, based on the acclaimed 720S from the Super Series',
        image: '/720S-GT3-car.png'
    }, 
    {id:6, 
        name: 'FORD', 
        price: 	8500000,
        description: 'Ford Motor Company, one of the largest and most well-known automakers in the world, is synonymous with durability, innovation, and a wide range of vehicles designed for everyday drivers, performance enthusiasts, and commercial needs',
        image: '/ford-car.png'
    }, 
]

  return (
    <div>
      <div className='cars'>
        {carData.map((car) => (
            <div key={car.id} className='car-card'>
                <Image src={car.image} alt={car.name} width={100} height={50}/>
                <h3>{car.name}</h3>
                <p>{car.description}</p>
                <span>${car.price}</span>
                <br/>
                <button>Add to Card</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default page
