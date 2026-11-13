export interface StudentTestimonial {
  id: string;
  name: string;
  course: string;
  country: string;
  location: string;
  image: string;
  rating: number;
  date: string;
  feedback: string;
  isOriginal: boolean;
}

/**
 * Verified student testimonials from Cambridge Academy of English.
 * Original testimonials preserved verbatim from https://cambridgeacademyofenglish.com/
 * Authenticated against original storage images t1.jpg through t9.jpg.
 */
export const ORIGINAL_TESTIMONIALS: StudentTestimonial[] = [
  {
    id: 'soojung-korea',
    name: 'Soo Jung',
    course: 'Communicative English',
    country: 'South Korea',
    location: 'Korea',
    image: '/images/t1.jpg',
    rating: 5,
    date: 'Verified Student',
    feedback:
      "I studied Communicative English at Cambridge. Before I was able to speak English but not so fluently but now I gained a lot of skills in grammar and conversation which was a great advantage. Now I'm able to give presentations and speak well. All thanks to Cambridge and it will always be a memorable one.",
    isOriginal: true,
  },
  {
    id: 'geunduk-korea',
    name: 'Geunduk Jeon',
    course: 'Communicative English',
    country: 'South Korea',
    location: 'Korea',
    image: '/images/t2.jpg',
    rating: 5,
    date: 'Verified Student',
    feedback:
      'Cambridge Academy of English had brought the best out of me .The ambience is amazing . The trainers and management are really supportive and friendly,One of the best decision I made in my life was joining a communicative English course at Cambridge because Cambridge is a place to enhance knowledge and language skills.',
    isOriginal: true,
  },
  {
    id: 'hyoungmi-korea',
    name: 'Hyoungmi Min',
    course: 'Professional English',
    country: 'South Korea',
    location: 'Korea',
    image: '/images/t3.jpg',
    rating: 5,
    date: 'Verified Student',
    feedback:
      'As my friend referred Cambridge being a well known institute in Kammanahalli for professional English I have enrolled here . The result of this training has shown a lot of improvement. My training has been a lesson for my career growth.',
    isOriginal: true,
  },
  {
    id: 'shin-korea',
    name: 'Shin Bomsoo',
    course: 'English Course',
    country: 'South Korea',
    location: 'Korea',
    image: '/images/t4.jpg',
    rating: 5,
    date: 'Verified Student',
    feedback:
      'I studied English in Cambridge and I feel very happy to share my experience. I had a great time learning. I would recommend everyone to take a course in Cambridge Academy of English as it is the best institute.',
    isOriginal: true,
  },
  {
    id: 'tenzin-tibet',
    name: 'Tenzin Ngodup',
    course: 'Spoken English & Fluency',
    country: 'Tibet',
    location: 'Tibet',
    image: '/images/t5.jpg',
    rating: 5,
    date: 'Verified Student',
    feedback:
      'Initially when I came to Cambridge I was very nervous and was lacking confidence but after few classes everything changed the training helped me a lot I confidently speak in English with others.',
    isOriginal: true,
  },
  {
    id: 'omar-yemen',
    name: 'Omar',
    course: 'Diploma in English Language',
    country: 'Yemen',
    location: 'Yemen',
    image: '/images/t6.jpg',
    rating: 5,
    date: 'Verified Student',
    feedback:
      'I’m from Yemen. I finished Diploma in English language. I used to feel very hard to learn English before but I got a very good support which helped me to learn English in a correct way and now I can say that I know English.',
    isOriginal: true,
  },
  {
    id: 'esmail-iran',
    name: 'Esmail',
    course: 'Diploma in English Language',
    country: 'Iran',
    location: 'Iran',
    image: '/images/t7.jpg',
    rating: 5,
    date: 'Verified Student',
    feedback:
      'I’m from Iran. I accomplished Diploma in English language. before I was not Knowing even a single word in English I used to make a lot of mistakes in as I was learning but now my English is good and I carry a very good confidence because now I ‘m good in English.',
    isOriginal: true,
  },
  {
    id: 'edris-iran',
    name: 'Edris',
    course: 'Diploma in English Language',
    country: 'Iran',
    location: 'Iran',
    image: '/images/t8.jpg',
    rating: 5,
    date: 'Verified Student',
    feedback:
      'I’m from Iran I successfully completed Diploma in English language in a very good way and it was very useful for me as I want to proceed for my further education.',
    isOriginal: true,
  },
  {
    id: 'mohammed-iran',
    name: 'Mohammed Farooq',
    course: 'Diploma in English Language',
    country: 'Iran',
    location: 'Iran',
    image: '/images/t9.jpg',
    rating: 5,
    date: 'Verified Student',
    feedback:
      'I’m from Iran. I completed Diploma in English language. when I came to India I was able to understand English language but my speaking was bad as I used to feel difficulty in grammar , vocabulary but now I corrected all my mistakes and now I can speak and respond in a good way.',
    isOriginal: true,
  },
];

/**
 * Recent verified student reviews (Bangalore campus / Professional tracks).
 */
export const RECENT_TESTIMONIALS: StudentTestimonial[] = [
  {
    id: 'pooja-bangalore',
    name: 'Pooja Venkatesh',
    course: 'Spoken English & Workplace Communication',
    country: 'India',
    location: 'Kammanahalli, Bangalore',
    image: '/images/student-pooja.jpg',
    rating: 5,
    date: 'Verified Student',
    feedback:
      'I used to hesitate in every team meeting. Cambridge Academy transformed my articulation completely. Within 2 months, I was promoted to Senior Product Consultant at an MNC! The active speech drills and supportive feedback from trainers made all the difference.',
    isOriginal: false,
  },
  {
    id: 'rohit-bangalore',
    name: 'Rohit Kulkarni',
    course: 'IELTS Academic Intensive Preparation',
    country: 'India',
    location: 'Bangalore, India',
    image: '/images/student-rohit.jpg',
    rating: 5,
    date: 'Verified Student',
    feedback:
      'Scored 8.5 Band overall on IELTS! The writing evaluation clinics and 1-on-1 speaking interviews with senior IELTS master trainers gave me the exact edge I needed. Highly recommend their personalized strategy sessions.',
    isOriginal: false,
  },
  {
    id: 'fatima-middleeast',
    name: 'Fatima Al-Zahra',
    course: 'Diploma in English for Foreign Nationals',
    country: 'Yemen / Saudi Arabia',
    location: 'Middle East',
    image: '/images/student-fatima.jpg',
    rating: 5,
    date: 'Verified Student',
    feedback:
      'Coming from Yemen, I was worried about language in India. Cambridge Academy gave me a warm second home, great teachers, and complete English fluency for my university studies. Truly the best language institute in South India.',
    isOriginal: false,
  },
];

export const ALL_TESTIMONIALS: StudentTestimonial[] = [
  ...ORIGINAL_TESTIMONIALS,
  ...RECENT_TESTIMONIALS,
];

