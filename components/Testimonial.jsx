import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
  return (
    <section>
        <h1>Testimonial</h1>
        <div className="testimonials">
       <button type="button"> 1 </button>
        <div className="testimonial">
            <Image src={''} alt='komal photo ' />
            <p>Komal paul  is an exceptional full stack web developer with strong proficiency in JavaScript, React, Node.js, and database management. Their dedication, problem-solving skills, and attention to detail significantly contributed to the success of our project."</p>
        </div>
        <button type="button"> 2 </button>

        </div>
    </section>
  )
}

export default Testimonial