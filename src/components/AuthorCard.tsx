import React from 'react';


export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <img
          className="rounded-full object-cover border-2 border-red-500"
          src="/images/image1.png" 
          alt="Author Image1"
          width={64} 
          height={64} 
        />
       <h3 className="text-xl font-bold">Shabana Basra</h3>
       <p className='text-slate-500'>
        {" "}
        Maths Teacher| Teaching in Raunaq-ul-Islam School|web Developer{" "}
        </p>

      </div>

      <p  className='mt-4 text-black leading-relaxed'>
      Shabana Basra is an experienced mathematics educator with a strong passion for web development.
       I excels in combining technology and teaching to create innovative learning experiences.
      </p>
    <div className='mt-4 flex space-x-3'>
      <a href='https://www.facebook.com/shabana.ahmed.1048' 
      className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg:-blue-700 transition duration-300'
      >
        facebook
      </a>

      <a href='https://www.linkedin.com/in/shabana-ahmed-825a731b1'
       className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg:-blue-700 transition duration-300'
      >
        Linkedin
      </a>

      <a href='https://github.com/Shabanabasra' 
      className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg:-blue-700 transition duration-300'
      >
        GitHub
      </a>

    </div>

    </div>
  );
}


