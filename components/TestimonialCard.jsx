import Testimonial from './Testimonial';

const slides = [
  {
    name: 'Adrian',
    company: 'Clarks',
    description: 'Dee has consistently demonstrated exceptional skill and dedication as a front-end developer. She delivered high-quality work and made a noticeable impact.',
  },
  {
    name: 'Leigh',
    company: 'LAT Engagements',
    description: `Dee's attention to detail and dedication to maintaining our website’s functionality and aesthetics greatly contributed to our success. Her expertise in web accessibility ensured that our site was usable for everyone, which was a huge plus for our brand.`,
  },
  {
    name: 'Krutika',
    company: 'Kruti Hair & Beauty',
    description: 'Working with Dee has been an absolute pleasure. Her professionalism, responsiveness, and ability to adapt to our needs make her an invaluable asset to any team.',
  }
];

export default function TestimonialCard() {
  return (
    <div className="container-section testimonials container">
        <h2 id="testimonials">Testimonials</h2>
        <p>People I've worked with have said some nice things...</p>
      <Testimonial slides={slides} />
    </div>
  );
}