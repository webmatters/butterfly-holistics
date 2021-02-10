import { useState } from 'react'

import Testimonial from './Testimonial'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(1)

  const renderCurrentTestimonials = () => {
    return testimonials
      .filter(
        testimonial =>
          testimonial.id === currentTestimonial ||
          testimonial.id === currentTestimonial + 1
      )
      .map(testimonial => (
        <Testimonial
          key={testimonial.id}
          text={testimonial.text}
          image={testimonial.image}
          name={testimonial.name}
          location={testimonial.location}
        />
      ))
  }

  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto pb-12 md:pb-16 md:grid md:grid-cols-2 md:px-6 lg:px-16 text-center relative">
        {/* Left Chevron - Back button*/}
        {currentTestimonial > 1 && (
          <button
            onClick={() => setCurrentTestimonial(currentTestimonial - 2)}
            className="absolute inset-y-0 left-2 focus:outline-none"
          >
            <svg
              className="h-16 w-16 text-white opacity-25"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Testimonials */}
        {renderCurrentTestimonials()}

        {/* Right Chevron - Advance button*/}
        {currentTestimonial < testimonials.length - 1 && (
          <button
            onClick={() => setCurrentTestimonial(currentTestimonial + 2)}
            className="absolute inset-y-0 right-2 focus:outline-none"
          >
            <svg
              className="h-16 w-16 text-white  opacity-25"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  )
}

const testimonials = [
  {
    id: 1,
    text:
      'Valerie is wonderful! My family and I live in NJ and have been doing virtual sessions. I suffer from autoimmune diseases and she has been a Godsend in helping with my chronic pain.',
    image: 'Lorraine.jpg',
    name: 'Lorraine G.',
    location: 'New Jersey',
  },
  {
    id: 2,
    text:
      'Working consistently with Valerie is one of the TOP TWO things I did for my business and myself personally... Before seeing Valerie, I was able to work on my mindset and know things intellectually but I was still struggling, so I knew the blocks and areas that needed help were on the subconscious and energetic               level. Valerie helps me clear these blocks so I can fully integrate and be whole and free from all the junk holding me back. I now have a sense of calm, groundedness, and success that I’ve never experienced before in my life.',
    image: 'Sarah_M.jpg',
    name: 'Sarah M.',
    location: 'Holly Springs, NC',
  },
  {
    id: 3,
    text:
      'I recently attended two workshops with Butterfly Holistics. Valerie is amazing, so knowledgeable about the human body and a healer. Not only did I learn specific skills to incorporate into my massage practice, I also benefited from the work as we practiced during class. I am better for attending, body, mind and spirit and will take more classes from her.',
    image: 'Helen.jpg',
    name: 'Helen R.',
    location: 'Holly Springs, NC',
  },
  {
    id: 4,
    text:
      "Valerie has truly changed my life through our regular sessions. She is able to help me narrow down what's going on and provides ways to truly heal from the inside out. I always feel supported, heard and connected. With her help I have been able to let go of pain-inducing habits and mindsets and really find myself again. I can't say enough about how much our sessions have truly impacted my life for the better!",
    image: 'Kate.jpg',
    name: 'Kate M.',
    location: 'Holly Springs, NC',
  },
]
