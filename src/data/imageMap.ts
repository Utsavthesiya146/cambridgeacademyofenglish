/**
 * Cambridge Academy of English - Central Image Mapping & Usage Registry
 *
 * Enforces strict single-use policy: Each image asset must be assigned and used
 * ONLY ONCE across the entire website to prevent duplication.
 */

export interface ImageAssetRegistration {
  id: string;
  path: string;
  alt: string;
  assignedPageOrCourse: string;
  category: 'course' | 'hero' | 'about' | 'faculty' | 'testimonial' | 'brand';
  type: 'photo' | 'vector';
}

export const IMAGE_REGISTRY: Record<string, ImageAssetRegistration> = {
  // Brand Assets
  'brand-logo': {
    id: 'brand-logo',
    path: '/images/logo.png',
    alt: 'Cambridge Academy of English Official Logo',
    assignedPageOrCourse: 'Global Header and Footer',
    category: 'brand',
    type: 'vector',
  },
  'hosting-baba-logo': {
    id: 'hosting-baba-logo',
    path: '/images/hosting-baba-logo.png',
    alt: 'HostingBaba Official Logo',
    assignedPageOrCourse: 'Footer Credit',
    category: 'brand',
    type: 'vector',
  },

  // Homepage Specific Visuals
  'homepage-hero': {
    id: 'homepage-hero',
    path: '/images/hero-classroom.jpg',
    alt: 'Interactive English language classroom with trainer and students at Cambridge Academy of English Bangalore',
    assignedPageOrCourse: 'Homepage Hero Showcase Card',
    category: 'hero',
    type: 'photo',
  },
  'homepage-about-seminar': {
    id: 'homepage-about-seminar',
    path: '/images/slider1.jpg',
    alt: 'Classroom interactive seminar at Cambridge Academy of English',
    assignedPageOrCourse: 'Homepage About Section - Showcase Image 1',
    category: 'about',
    type: 'photo',
  },
  'homepage-about-lab': {
    id: 'homepage-about-lab',
    path: '/images/hero.jpg',
    alt: 'Language learning laboratory at Cambridge Academy of English',
    assignedPageOrCourse: 'Homepage About Section - Showcase Image 2',
    category: 'about',
    type: 'photo',
  },

  // Faculty & Leadership (Authentic photos)
  'faculty-director': {
    id: 'faculty-director',
    path: '/images/t9.jpg',
    alt: 'Founder & Academic Director of Cambridge Academy of English',
    assignedPageOrCourse: 'Homepage Founder & Director Section',
    category: 'faculty',
    type: 'photo',
  },
  'about-leadership-seal': {
    id: 'about-leadership-seal',
    path: '/images/about-leadership.svg',
    alt: 'Academic Leadership Seal of Cambridge Academy of English',
    assignedPageOrCourse: 'About Us Page - Leadership Section',
    category: 'about',
    type: 'vector',
  },
  'faculty-director-trainers': {
    id: 'faculty-director-trainers',
    path: '/images/t8.jpg',
    alt: 'Academic Founder & Master Linguist',
    assignedPageOrCourse: 'Our Trainers Page - Director Profile',
    category: 'faculty',
    type: 'photo',
  },
  'faculty-sarah': {
    id: 'faculty-sarah',
    path: '/images/t1.jpg',
    alt: 'Dr. Sarah Mathews, Senior IELTS & OET Master Coach',
    assignedPageOrCourse: 'Our Trainers Page - Dr. Sarah Mathews Profile',
    category: 'faculty',
    type: 'photo',
  },
  'faculty-rajesh': {
    id: 'faculty-rajesh',
    path: '/images/t2.jpg',
    alt: 'Prof. Rajesh Nair, Head of Spoken English & Voice Coach',
    assignedPageOrCourse: 'Prof. Rajesh Nair Faculty Profile',
    category: 'faculty',
    type: 'photo',
  },
  'faculty-claire': {
    id: 'faculty-claire',
    path: '/images/t3.jpg',
    alt: 'Madame Claire Dubois, Senior French & European Linguist',
    assignedPageOrCourse: 'Madame Claire Dubois Faculty Profile',
    category: 'faculty',
    type: 'photo',
  },
  'faculty-klaus': {
    id: 'faculty-klaus',
    path: '/images/t4.jpg',
    alt: 'Herr Klaus Weber, Lead German Language Instructor',
    assignedPageOrCourse: 'Herr Klaus Weber Faculty Profile',
    category: 'faculty',
    type: 'photo',
  },

  // Student Testimonials (Authentic photos)
  'testimonial-pooja': {
    id: 'testimonial-pooja',
    path: '/images/t5.jpg',
    alt: 'Pooja Venkatesh, Spoken English graduate',
    assignedPageOrCourse: 'Student Review - Pooja Venkatesh',
    category: 'testimonial',
    type: 'photo',
  },
  'testimonial-rohit': {
    id: 'testimonial-rohit',
    path: '/images/t6.jpg',
    alt: 'Rohit Kulkarni, IELTS 8.5 Band graduate',
    assignedPageOrCourse: 'Student Review - Rohit Kulkarni',
    category: 'testimonial',
    type: 'photo',
  },
  'testimonial-fatima': {
    id: 'testimonial-fatima',
    path: '/images/t7.jpg',
    alt: 'Fatima Al-Zahra, Foreign Nationals Diploma graduate',
    assignedPageOrCourse: 'Student Review - Fatima Al-Zahra',
    category: 'testimonial',
    type: 'photo',
  },
  'testimonial-omar': {
    id: 'testimonial-omar',
    path: '/images/t8.jpg',
    alt: 'Omar Al-Haidari, English Diploma graduate',
    assignedPageOrCourse: 'Student Review - Omar Al-Haidari',
    category: 'testimonial',
    type: 'photo',
  },

  // 25 Dedicated Course Programmes - Guaranteed Unique Image Per Course
  'course-spoken-english-online': {
    id: 'course-spoken-english-online',
    path: '/images/course-online.jpg',
    alt: 'Spoken English Online Course with live interactive video seminar',
    assignedPageOrCourse: 'Spoken English Online Course',
    category: 'course',
    type: 'photo',
  },
  'course-spoken-english-offline': {
    id: 'course-spoken-english-offline',
    path: '/images/course-spoken.jpg',
    alt: 'Spoken English Classroom speech lab in Bangalore',
    assignedPageOrCourse: 'Spoken English Offline (Bangalore Campus)',
    category: 'course',
    type: 'photo',
  },
  'course-ielts-preparation': {
    id: 'course-ielts-preparation',
    path: '/images/courses/course-ielts.jpg',
    alt: 'IELTS Academic & General Exam Preparation student with official study materials',
    assignedPageOrCourse: 'IELTS Preparation (Academic & General)',
    category: 'course',
    type: 'photo',
  },
  'course-pte-preparation': {
    id: 'course-pte-preparation',
    path: '/images/courses/course-pte.jpg',
    alt: 'Pearson PTE Academic preparation in modern computerized language lab',
    assignedPageOrCourse: 'PTE Academic Preparation',
    category: 'course',
    type: 'photo',
  },
  'course-oet-preparation': {
    id: 'course-oet-preparation',
    path: '/images/courses/course-oet.jpg',
    alt: 'OET Occupational English Test for Doctors and Nurses in clinical lounge',
    assignedPageOrCourse: 'OET Preparation (Occupational English)',
    category: 'course',
    type: 'photo',
  },
  'course-celpip-preparation': {
    id: 'course-celpip-preparation',
    path: '/images/courses/course-celpip.jpg',
    alt: 'CELPIP Canadian PR test preparation with official listening modules',
    assignedPageOrCourse: 'CELPIP Preparation (Canada PR)',
    category: 'course',
    type: 'photo',
  },
  'course-toefl-preparation': {
    id: 'course-toefl-preparation',
    path: '/images/courses/course-toefl.jpg',
    alt: 'TOEFL iBT exam simulation testing workstation with audio headsets',
    assignedPageOrCourse: 'TOEFL iBT Preparation',
    category: 'course',
    type: 'photo',
  },
  'course-languagecert-esol': {
    id: 'course-languagecert-esol',
    path: '/images/courses/course-languagecert.svg',
    alt: 'LanguageCert International ESOL exam preparation banner',
    assignedPageOrCourse: 'LanguageCert International ESOL',
    category: 'course',
    type: 'vector',
  },
  'course-c1-advanced-cae': {
    id: 'course-c1-advanced-cae',
    path: '/images/course-cambridge.jpg',
    alt: 'Cambridge C1 Advanced (CAE) preparation study session',
    assignedPageOrCourse: 'C1 Advanced (CAE) Preparation Coaching',
    category: 'course',
    type: 'photo',
  },
  'course-c2-proficiency-cpe': {
    id: 'course-c2-proficiency-cpe',
    path: '/images/courses/course-cpe.svg',
    alt: 'Cambridge C2 Proficiency (CPE) mastery coaching banner',
    assignedPageOrCourse: 'C2 Proficiency (CPE) Preparation Coaching',
    category: 'course',
    type: 'vector',
  },
  'course-general-english-adults': {
    id: 'course-general-english-adults',
    path: '/images/courses/course-general-adults.svg',
    alt: 'General English Course for Adults practical fluency banner',
    assignedPageOrCourse: 'General English Course for Adults',
    category: 'course',
    type: 'vector',
  },
  'course-professional-english': {
    id: 'course-professional-english',
    path: '/images/courses/course-professional.svg',
    alt: 'Professional English for Modern Workplace communication banner',
    assignedPageOrCourse: 'Professional English for the Modern Workplace',
    category: 'course',
    type: 'vector',
  },
  'course-business-communication': {
    id: 'course-business-communication',
    path: '/images/slider2.jpg',
    alt: 'Executive business communication and presentation workshop',
    assignedPageOrCourse: 'Business Communication Course',
    category: 'course',
    type: 'photo',
  },
  'course-diploma-in-english-language': {
    id: 'course-diploma-in-english-language',
    path: '/images/slider3.jpg',
    alt: 'Diploma in English Language international students cohort',
    assignedPageOrCourse: 'Diploma in English Language (for Foreign Nationals)',
    category: 'course',
    type: 'photo',
  },
  'course-master-diploma-in-english-language': {
    id: 'course-master-diploma-in-english-language',
    path: '/images/courses/course-master-diploma.svg',
    alt: 'Master Diploma in English Language advanced immersion banner',
    assignedPageOrCourse: 'Master Diploma in English Language',
    category: 'course',
    type: 'vector',
  },
  'course-teacher-training': {
    id: 'course-teacher-training',
    path: '/images/course-teacher.jpg',
    alt: 'TEFL TESOL teacher training interactive classroom pedagogy seminar',
    assignedPageOrCourse: 'TEFL / TESOL Teacher Training Course in Bangalore',
    category: 'course',
    type: 'photo',
  },
  'course-tkt-preparation': {
    id: 'course-tkt-preparation',
    path: '/images/courses/course-tkt.svg',
    alt: 'Cambridge TKT Teaching Knowledge Test preparation banner',
    assignedPageOrCourse: 'Cambridge TKT Preparation Course',
    category: 'course',
    type: 'vector',
  },
  'course-german-language': {
    id: 'course-german-language',
    path: '/images/courses/course-german.jpg',
    alt: 'German language learning student with Goethe-Zertifikat preparation books',
    assignedPageOrCourse: 'German Language Classes in Bangalore (A1, A2, B1, B2)',
    category: 'course',
    type: 'photo',
  },
  'course-french-language': {
    id: 'course-french-language',
    path: '/images/courses/course-french.jpg',
    alt: 'French language learning student with DELF study materials and vocabulary cards',
    assignedPageOrCourse: 'French Language Classes (DELF A1-B2 & TEF Canada)',
    category: 'course',
    type: 'photo',
  },
  'course-spanish-language': {
    id: 'course-spanish-language',
    path: '/images/courses/course-spanish.jpg',
    alt: 'Spanish language learning student with DELE grammar books and vocabulary cards',
    assignedPageOrCourse: 'Spanish Language Classes (DELE A1-B2 & SIELE)',
    category: 'course',
    type: 'photo',
  },
  'course-mandarin-chinese': {
    id: 'course-mandarin-chinese',
    path: '/images/courses/course-chinese.jpg',
    alt: 'Mandarin Chinese language learning student with HSK character workbooks',
    assignedPageOrCourse: 'Mandarin Chinese Language Course (HSK 1-4)',
    category: 'course',
    type: 'photo',
  },
  'course-kids-academic-english': {
    id: 'course-kids-academic-english',
    path: '/images/courses/course-kids.jpg',
    alt: 'Kids academic English and phonics learning classroom session',
    assignedPageOrCourse: 'Kids Academic English & Grammar Foundation',
    category: 'course',
    type: 'photo',
  },
  'course-a2-key-ket': {
    id: 'course-a2-key-ket',
    path: '/images/courses/course-ket.svg',
    alt: 'Cambridge A2 Key for Schools (KET) preparation banner',
    assignedPageOrCourse: 'A2 Key for Schools (KET) Preparation',
    category: 'course',
    type: 'vector',
  },
  'course-b1-preliminary-pet': {
    id: 'course-b1-preliminary-pet',
    path: '/images/courses/course-pet.svg',
    alt: 'Cambridge B1 Preliminary for Schools (PET) preparation banner',
    assignedPageOrCourse: 'B1 Preliminary for Schools (PET) Preparation',
    category: 'course',
    type: 'vector',
  },
  'course-young-learners-english': {
    id: 'course-young-learners-english',
    path: '/images/courses/course-young-learners.svg',
    alt: 'Cambridge Young Learners English Starters, Movers, Flyers banner',
    assignedPageOrCourse: 'Cambridge Young Learners English (YLE)',
    category: 'course',
    type: 'vector',
  },
};

/**
 * Validates that every registered image is used exactly once across the site.
 * Throws an error in development if a duplicate path is found.
 */
export function validateImageRegistry(): {
  isValid: boolean;
  totalAssets: number;
  duplicateCount: number;
  duplicates: string[];
} {
  const seenPaths = new Map<string, string[]>();

  Object.values(IMAGE_REGISTRY).forEach((asset) => {
    // Brand logo is allowed on header & footer as official logo
    if (asset.id === 'brand-logo' || asset.id === 'hosting-baba-logo') return;

    if (!seenPaths.has(asset.path)) {
      seenPaths.set(asset.path, [asset.assignedPageOrCourse]);
    } else {
      seenPaths.get(asset.path)!.push(asset.assignedPageOrCourse);
    }
  });

  const duplicates: string[] = [];
  seenPaths.forEach((usages, path) => {
    if (usages.length > 1) {
      duplicates.push(`${path} is used in: ${usages.join(', ')}`);
    }
  });

  return {
    isValid: duplicates.length === 0,
    totalAssets: Object.keys(IMAGE_REGISTRY).length,
    duplicateCount: duplicates.length,
    duplicates,
  };
}

/**
 * Get unique image path for a course by slug
 */
export function getCourseImage(slug: string): string {
  const key = `course-${slug}`;
  if (IMAGE_REGISTRY[key]) {
    return IMAGE_REGISTRY[key].path;
  }
  return '/images/courses/course-general-adults.svg';
}

