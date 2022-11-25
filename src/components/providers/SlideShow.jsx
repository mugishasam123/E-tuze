import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GoVerified } from 'react-icons/go';
import { Autoplay } from 'swiper';
import 'swiper/css';
import './slide-show.css';

const therapists = [
  {
    name: 'Dr. Christine',
    image: 'https://randomuser.me/api/portraits/women/47.jpg',
    description: 'Self-esteem, Depression, Anxiety, Relationships',
  },
  {
    name: 'Brian Smith',
    image: 'https://randomuser.me/api/portraits/men/30.jpg',
    description: 'Self-esteem, Depression, Anxiety, Relationships',
  },
  {
    name: 'Dr. John Doe',
    image: 'https://randomuser.me/api/portraits/men/53.jpg',
    description: 'Self-esteem, Depression, Anxiety, Relationships',
  },
  {
    name: 'Dr. Frank Adams',
    image: 'https://randomuser.me/api/portraits/men/83.jpg',
    description: 'Self-esteem, Depression, Anxiety, Relationships',
  },
  {
    name: 'Dr. Martina',
    image: 'https://randomuser.me/api/portraits/women/30.jpg',
    description: 'Self-esteem, Depression, Anxiety, Relationships',
  },
  {
    name: 'Dr. Mary',
    image: 'https://randomuser.me/api/portraits/women/76.jpg',
    description: 'Self-esteem, Depression, Anxiety, Relationships',
  },
];

const SlideShow = () => (
  <>
    <div className="card">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {therapists.map((therapist) => (
          <SwiperSlide className="card" key={therapist.name}>
            <div>
              <img src={therapist.image} alt={therapist.name} className="card__image" />
              <div className="card__content p-3 text-white absolute bottom-[1%] left-0 z-10">
                <span className="text-md md:text-sm">
                  <GoVerified className="inline text-blue-500" />
                  {' '}
                  Licenced Therapist
                </span>
                <h3 className="font-bold text-5xl md:text-lg">{therapist.name}</h3>
                <p className="text-md font-bold md:text-sm mt-2">{therapist.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
);

export default SlideShow;
