import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      // Legacy Static URL Mappings -> Canonical Routes (301 Permanent)
      { source: '/about/vision-mission', destination: '/about/vision-mision', permanent: true },
      { source: '/accomodation/Academic-Extracts', destination: '/admission/academic-extracts', permanent: true },
      { source: '/accomodation/Admission-form-For-Foreign-Students', destination: '/admission/foreign-students', permanent: true },
      { source: '/accomodation/Admission-Form-For-Indian-Students', destination: '/admission/indian-students', permanent: true },
      { source: '/accomodation/Admission-Terms-and-Process', destination: '/admission/terms-process', permanent: true },
      { source: '/book-your-course', destination: '/book', permanent: true },
      { source: '/cambridge-academy-group', destination: '/about', permanent: true },
      { source: '/cambridge-academy-of-english', destination: '/about', permanent: true },
      { source: '/cambridge-academy-online', destination: '/courses/spoken-english-online', permanent: true },
      { source: '/certi', destination: '/certificate', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/the-cambridge-academy-communication', destination: '/about', permanent: true },

      // Legacy Policies
      { source: '/policy', destination: '/privacy-policy', permanent: true },
      { source: '/policy/Cancellation-and-Refund-Policy', destination: '/refund-policy', permanent: true },
      { source: '/policy/Privacy-Policy-and-Disclaimer', destination: '/privacy-policy', permanent: true },
      { source: '/policy/Terms-and-Conditions', destination: '/terms-conditions', permanent: true },

      // Legacy Courses -> Modern Canonical Course Landing Pages
      { source: '/courses/ielts-coaching-in-bangalore', destination: '/courses/ielts-preparation', permanent: true },
      { source: '/courses/ielts-preparation-academic-or-general', destination: '/courses/ielts-preparation', permanent: true },
      { source: '/courses/ielts-training', destination: '/courses/ielts-preparation', permanent: true },
      { source: '/courses/online-ielts-preparation-academic-or-general', destination: '/courses/ielts-preparation', permanent: true },
      { source: '/courses/pte-academic', destination: '/courses/pte-preparation', permanent: true },
      { source: '/courses/pte-preparation-academic-or-general', destination: '/courses/pte-preparation', permanent: true },
      { source: '/courses/online-pte-preparation-academic-or-general', destination: '/courses/pte-preparation', permanent: true },
      { source: '/courses/OET-Training-Centres-In-Bangalore', destination: '/courses/oet-preparation', permanent: true },
      { source: '/courses/TOEFL-Online-Classes-in-Bangalore', destination: '/courses/toefl-preparation', permanent: true },
      { source: '/courses/CAE-Proficiency', destination: '/courses/cae-preparation', permanent: true },
      { source: '/courses/CPE-Proficiency', destination: '/courses/cpe-preparation', permanent: true },
      { source: '/courses/First-FCE', destination: '/courses/cae-preparation', permanent: true },
      { source: '/courses/Cambridge-Exam', destination: '/courses/cae-preparation', permanent: true },
      { source: '/courses/class-room-english-course', destination: '/courses/spoken-english-offline', permanent: true },
      { source: '/courses/learn-english-speaking-course-online', destination: '/courses/spoken-english-online', permanent: true },
      { source: '/courses/english-course-online', destination: '/courses/spoken-english-online', permanent: true },
      { source: '/courses/communicative-english-course-general', destination: '/courses/general-english', permanent: true },
      { source: '/courses/online-communicative-english-course-general', destination: '/courses/spoken-english-online', permanent: true },
      { source: '/courses/communicative-english-course-professional', destination: '/courses/professional-english', permanent: true },
      { source: '/courses/online-communicative-english-course-professional', destination: '/courses/professional-english', permanent: true },
      { source: '/courses/communicative-english-course-academic', destination: '/courses/general-english', permanent: true },
      { source: '/courses/online-communicative-english-course-academic', destination: '/courses/general-english', permanent: true },
      { source: '/courses/business-english-communication', destination: '/courses/business-communication', permanent: true },
      { source: '/courses/online-business-english-communication', destination: '/courses/business-communication', permanent: true },
      { source: '/courses/BEC-Business-English-Certificate-Higher', destination: '/courses/business-communication', permanent: true },
      { source: '/courses/BEC-Business-English-certificate-vantage', destination: '/courses/business-communication', permanent: true },
      { source: '/courses/BEC-preliminary', destination: '/courses/business-communication', permanent: true },
      { source: '/courses/BULATS', destination: '/courses/business-communication', permanent: true },
      { source: '/courses/germanlanguageclasses', destination: '/courses/german-language', permanent: true },
      { source: '/courses/French', destination: '/courses/french-language', permanent: true },
      { source: '/courses/LearnSpanishlanguage', destination: '/courses/spanish-language', permanent: true },
      { source: '/courses/ChineseLanguage', destination: '/courses/chinese-mandarin-language', permanent: true },
      { source: '/courses/foreign-language-courses-in-bangalore-india', destination: '/courses/foreign-language-courses', permanent: true },
      { source: '/courses/advanced-diploma-in-english-training-in-bangalore', destination: '/courses/master-diploma-in-english-language', permanent: true },
      { source: '/courses/teacher-training-in-banglore', destination: '/courses/teacher-training', permanent: true },
      { source: '/courses/TEFL-Courses-In-Bangalore', destination: '/courses/teacher-training', permanent: true },
      { source: '/courses/TKT-training-in-Bangalore', destination: '/courses/tkt-preparation', permanent: true },
      { source: '/courses/NurseryTeachersTrainingCourse', destination: '/courses/teacher-training', permanent: true },
      { source: '/courses/KET', destination: '/courses/ket-for-schools', permanent: true },
      { source: '/courses/KET-Key-School', destination: '/courses/ket-for-schools', permanent: true },
      { source: '/courses/PET-Preliminary', destination: '/courses/b1-preliminary-for-schools', permanent: true },
      { source: '/courses/PET-Preliminary-For-Schools', destination: '/courses/b1-preliminary-for-schools', permanent: true },
      { source: '/courses/YLE-Flyers', destination: '/courses/kids-academic-english', permanent: true },
      { source: '/courses/YLE-Movers', destination: '/courses/kids-academic-english', permanent: true },
      { source: '/courses/YLE-Starters', destination: '/courses/kids-academic-english', permanent: true },
    ];
  },
};

export default nextConfig;
