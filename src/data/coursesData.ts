export interface CourseModule {
  title: string;
  description: string;
  topics: string[];
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface CourseTestimonial {
  name: string;
  location: string;
  comment: string;
  rating: number;
}

export interface CourseDetail {
  slug: string;
  title: string;
  shortTitle: string;
  category:
    | 'spoken-english'
    | 'exam-preparation'
    | 'english-adults'
    | 'foreign-nationals'
    | 'teacher-training'
    | 'foreign-languages'
    | 'kids-english';
  categoryName: string;
  tagline: string;
  heroImage: string;
  intro: string;
  whoShouldJoin: string[];
  objectives: string[];
  whatYouLearn: string[];
  curriculum: CourseModule[];
  methodology: string;
  mode: 'Online Live' | 'Classroom (Bangalore Campus)' | 'Both Online & Offline Available';
  duration: string;
  batchTimings: string;
  benefits: string[];
  trainerInfo: string;
  faqs: CourseFAQ[];
  testimonials: CourseTestimonial[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const COURSES_DATA: Record<string, CourseDetail> = {
  // A. SPOKEN ENGLISH
  'spoken-english-online': {
    slug: 'spoken-english-online',
    title: 'Spoken English Online Course',
    shortTitle: 'Spoken English Online',
    category: 'spoken-english',
    categoryName: 'Spoken English',
    tagline: 'Master Conversational English Fluency from Anywhere in the World',
    heroImage: '/images/courses/course-spoken-online.jpg',
    intro:
      'Cambridge Academy of English offers interactive online spoken English training designed to eliminate hesitation, expand vocabulary, and build natural spoken fluency. Delivered via live, small-group video seminars with certified trainers, our curriculum focuses on active oral communication, daily conversational scenarios, and instant pronunciation feedback.',
    whoShouldJoin: [
      'Working professionals seeking career growth and presentation fluency',
      'College students and graduates preparing for job interviews',
      'Homemakers and non-native speakers wanting daily conversational confidence',
      'International learners requiring flexible remote English training',
    ],
    objectives: [
      'Eliminate hesitation, anxiety, and stage fear when speaking English',
      'Develop spontaneous speech production without mental translation',
      'Enhance pronunciation, intonation, and conversational clarity',
      'Build a strong lexical resource of modern vocabulary and everyday idioms',
    ],
    whatYouLearn: [
      'Dynamic conversation starters, active listening, and dialogue handling',
      'Practical English grammar applied intuitively to spoken sentences',
      'Voice modulation, accent neutralization, and phonetics practice',
      'Professional interview skills, group discussions, and impromptu speech',
      'Idiomatic English, phrasing, and contextual business vocabulary',
    ],
    curriculum: [
      {
        title: 'Module 1: Foundations of Spoken Fluency',
        description: 'Building speech stamina and breaking mother-tongue influence.',
        topics: ['Sentence framing in real time', 'Overcoming mental translation', 'Pronunciation and phonetic awareness'],
      },
      {
        title: 'Module 2: Vocabulary in Real-Life Scenarios',
        description: 'Contextual lexical expansion for work, social life, and travel.',
        topics: ['Idiomatic expressions', 'Situational dialogues (meetings, social gatherings, shopping)', 'Tone and register'],
      },
      {
        title: 'Module 3: Public Speaking and Presentation',
        description: 'Interactive presentation techniques, storytelling, and structured argument.',
        topics: ['Storytelling and debate drills', 'Body language on camera', 'Q&A management and rapid response'],
      },
      {
        title: 'Module 4: Career & Professional Communication',
        description: 'Preparing for corporate assessments and global workplace interactions.',
        topics: ['Mock interview drills', 'Group discussion tactics', 'Email writing basics and telephone etiquette'],
      },
    ],
    methodology:
      '100% communicative methodology. 80% student speaking time in every session with guided roleplays, extempore drills, and personalized corrective feedback.',
    mode: 'Online Live',
    duration: '4 to 8 Weeks (Weekday & Weekend options)',
    batchTimings: 'Flexible batches: Morning (7-9 AM), Afternoon (2-4 PM), Evening (7-9 PM)',
    benefits: [
      'Live interactive video seminars (not recorded videos)',
      'Small batch sizes ensuring individual speaking time',
      'Comprehensive study notes and audio speech drills',
      'Certificate of Completion from Cambridge Academy of English',
    ],
    trainerInfo:
      'Delivered by senior certified language coaches with 10+ years of corporate and communicative training expertise.',
    faqs: [
      {
        question: 'How are online spoken English classes conducted?',
        answer: 'Sessions are conducted live via high-definition video conferencing (Zoom/Google Meet) with interactive breakout rooms, screen sharing, and continuous speaking practice.',
      },
      {
        question: 'Will I receive personal attention in an online batch?',
        answer: 'Yes. We strictly cap batch sizes to ensure every learner receives individual speaking turns, personal feedback, and tailored fluency correction.',
      },
      {
        question: 'Can I attend a free demo or counselling session before enrolling?',
        answer: 'Absolutely. You can book a free level assessment and counselling session with our academic advisors.',
      },
    ],
    testimonials: [
      {
        name: 'Priyanka Sen',
        location: 'Bangalore, India',
        comment: 'I was hesitant to speak in client calls. Within 6 weeks of Cambridge Academy’s online classes, my confidence transformed completely.',
        rating: 5,
      },
    ],
    metaTitle: 'Spoken English Online Course | Cambridge Academy of English',
    metaDescription:
      'Join India’s premier Spoken English online course. Live interactive speaking sessions, accent correction, and confidence building with certified trainers.',
    keywords: [
      'spoken english online',
      'online english speaking course',
      'learn english online bangalore',
      'english fluency classes online',
    ],
  },

  'spoken-english-offline': {
    slug: 'spoken-english-offline',
    title: 'Spoken English Classes in Bangalore (Campus Training)',
    shortTitle: 'Spoken English Offline',
    category: 'spoken-english',
    categoryName: 'Spoken English',
    tagline: 'Immersive In-Person Speaking Practice at Our Kammanahalli Campus',
    heroImage: '/images/courses/course-spoken-offline.jpg',
    intro:
      'Experience dynamic, face-to-face English fluency training at our state-of-the-art campus in Kammanahalli, Bangalore. Designed for learners who thrive in an immersive physical classroom, this course combines speech labs, live debates, roleplays, and interpersonal drills to banish fear and establish effortless verbal communication.',
    whoShouldJoin: [
      'Bangalore residents seeking face-to-face classroom interactions',
      'Job seekers targeting IT, customer success, and multinational corporate roles',
      'Students looking to excel in campus placements and viva voce exams',
      'Anyone wishing to overcome public speaking anxiety through live group practice',
    ],
    objectives: [
      'Build immediate spoken fluency in spontaneous real-world situations',
      'Overcome stage fright and hesitation through regular classroom presentations',
      'Master correct grammatical structures without tedious memorization',
      'Perfect pronunciation, intonation, and body language during speeches',
    ],
    whatYouLearn: [
      'Extempore speaking, debate participation, and group discussion skills',
      'Corporate interview mastery including HR and technical round communication',
      'Accent neutralization and clear phonetic articulation',
      'Active listening and collaborative conversational strategies',
      'Everyday social, professional, and academic language etiquette',
    ],
    curriculum: [
      {
        title: 'Module 1: Classroom Confidence & Ice-Breaking',
        description: 'Breaking hesitation through interactive pair work and group games.',
        topics: ['Fear-elimination drills', 'Voice projection in room', 'Basic sentence structure and framing'],
      },
      {
        title: 'Module 2: Practical Grammar & Lexicon Expansion',
        description: 'Grammar in action: tenses, prepositions, and natural phrasing.',
        topics: ['Tense mastery in conversation', 'Common Indian English errors to avoid', 'Everyday idioms and collocations'],
      },
      {
        title: 'Module 3: Stage Speaking & Debates',
        description: 'Standing before an audience, microphone practice, and body language.',
        topics: ['Podium speaking practice', 'Constructive debate and rebuttals', 'Handling interruptions professionally'],
      },
      {
        title: 'Module 4: Career Readiness & Placement Drills',
        description: 'Complete interview simulation and executive presence.',
        topics: ['Mock face-to-face interviews', 'Group discussion dynamics', 'Professional networking communication'],
      },
    ],
    methodology:
      'Immersive classroom training with speech lab audio sessions, video-recorded presentations for student self-review, and daily interactive round-table dialogues.',
    mode: 'Classroom (Bangalore Campus)',
    duration: '4 to 12 Weeks (Weekday and Weekend Batches)',
    batchTimings: 'Morning (9:30 - 11:30 AM), Afternoon (2:00 - 4:00 PM), Evening (6:00 - 8:00 PM)',
    benefits: [
      'Prime location in Kammanahalli, Bangalore with modern facilities',
      'Direct personal mentoring and daily spoken correction',
      'Campus library and dedicated multimedia speech lab access',
      'Recognized institutional certificate backed by 21 years of heritage',
    ],
    trainerInfo:
      'Conducted by Cambridge-trained senior facilitators and seasoned speech coaches with decades of classroom experience.',
    faqs: [
      {
        question: 'Where is the Bangalore campus located?',
        answer: 'Our campus is centrally located at No 87, 2nd Floor, Nehru Road, Kammanahalli, Bangalore 560084, with excellent transit connectivity.',
      },
      {
        question: 'Can beginners join the classroom course?',
        answer: 'Yes. We conduct a preliminary diagnostic assessment to assign you to a batch tailored to your exact proficiency level (Beginner, Intermediate, or Advanced).',
      },
      {
        question: 'Are weekend batches available for working professionals?',
        answer: 'Yes, we provide dedicated Saturday-Sunday batches for IT professionals and corporate executives.',
      },
    ],
    testimonials: [
      {
        name: 'Karthik Raja',
        location: 'Kammanahalli, Bangalore',
        comment: 'The podium sessions and debate rounds transformed my speaking style. I cracked my TCS interview within a month of completion!',
        rating: 5,
      },
    ],
    metaTitle: 'Spoken English Classes in Bangalore | Kammanahalli Campus | Cambridge Academy',
    metaDescription:
      'Top-rated spoken English classes in Kammanahalli, Bangalore. Classroom training with speech labs, debate practice, and interview preparation with 21 years of excellence.',
    keywords: [
      'spoken english classes in bangalore',
      'best english speaking institute kammanahalli',
      'english coaching bangalore',
      'english speaking course bangalore',
    ],
  },

  // B. EXAMINATION PREPARATION COURSES
  'ielts-preparation': {
    slug: 'ielts-preparation',
    title: 'IELTS Preparation Coaching in Bangalore (Academic & General)',
    shortTitle: 'IELTS Preparation',
    category: 'exam-preparation',
    categoryName: 'Examination Courses',
    tagline: 'Target 8.0+ Band Score with Official British Council & IDP Partner Support',
    heroImage: '/images/courses/course-ielts.jpg',
    intro:
      'Achieve your dream IELTS band score with Cambridge Academy of English, an authorized British Council and IDP registration partner in Bangalore. Our comprehensive IELTS coaching covers all four modules—Listening, Reading, Writing, and Speaking—with proven band 8+ strategies, genuine Cambridge practice materials, and individual writing assessment.',
    whoShouldJoin: [
      'Study abroad aspirants applying to universities in UK, Canada, Australia, and USA',
      'Professionals applying for permanent residency (Canada Express Entry, Australia PR)',
      'Healthcare professionals (nurses, doctors) needing IELTS for registration',
      'Repeat test-takers looking to elevate their Writing and Speaking scores from 6.5 to 8.0+',
    ],
    objectives: [
      'Master time management strategies across all 4 exam modules',
      'Score 8.0+ in Reading and Listening through rapid scanning and skimming techniques',
      'Produce Band 8 Task 1 and Task 2 essays with impeccable coherence, cohesion, and vocabulary',
      'Deliver fluent, coherent, and idiomatic Speaking responses with native-like intonation',
    ],
    whatYouLearn: [
      'In-depth breakdown of IELTS Academic & General Training test formats',
      'Complex grammatical structures and academic collocations for Task 2 essays',
      'Data interpretation strategies for Academic Task 1 graphs, tables, and diagrams',
      'Letter writing formats and formal registers for General Training Task 1',
      'One-on-one mock speaking interviews under simulated exam conditions',
    ],
    curriculum: [
      {
        title: 'Module 1: Listening Mastery',
        description: 'Tackling all 4 audio sections and multiple question variations.',
        topics: ['Predicting audio content', 'Handling map labeling and form completion', 'Avoiding common distractor traps'],
      },
      {
        title: 'Module 2: Reading Strategies',
        description: 'Speed reading, keyword analysis, and deep comprehension.',
        topics: ['Skimming and scanning methods', 'True/False/Not Given and Yes/No/Not Given', 'Matching headings and summary completion'],
      },
      {
        title: 'Module 3: Writing Task 1 & Task 2',
        description: 'Band descriptor analysis, paragraph architecture, and essay models.',
        topics: ['Task Achievement & Coherence', 'Lexical Resource & Grammatical Range', 'Detailed essay correction & scoring'],
      },
      {
        title: 'Module 4: Speaking Interview Drills',
        description: 'Part 1 intro, Part 2 cue cards, and Part 3 abstract discussions.',
        topics: ['Cue card structuring in 1 minute', 'Developing abstract answers for Part 3', 'Pronunciation and fluency refinement'],
      },
    ],
    methodology:
      'Diagnostic baseline test, weekly full-length timed mock tests, line-by-line essay feedback against official IELTS band descriptors, and private 1-on-1 speaking assessments.',
    mode: 'Both Online & Offline Available',
    duration: '4 to 8 Weeks (Intensive & Regular options)',
    batchTimings: 'Weekday mornings, evenings, and weekend-only batches available',
    benefits: [
      'Authorized British Council & IDP registration assistance',
      'Unlimited access to Cambridge IELTS official past papers (Books 1 to 19)',
      'Regular full-length computer-delivered and paper-based mock tests',
      'Individual doubt-clearing sessions and personalized score prediction',
    ],
    trainerInfo:
      'Taught by certified IELTS Master Trainers with over 15 years of test-prep coaching experience.',
    faqs: [
      {
        question: 'Do you offer coaching for both Academic and General Training?',
        answer: 'Yes, we provide specialized coaching tracks for both IELTS Academic (university admissions) and IELTS General Training (PR and migration).',
      },
      {
        question: 'How many mock tests are included in the course?',
        answer: 'Students receive 10+ full-length mock examinations with detailed performance reviews and band score assessments.',
      },
      {
        question: 'Is computer-delivered IELTS preparation available?',
        answer: 'Yes, our computer lab is fully equipped to practice for the Computer-Delivered IELTS test with identical test interfaces.',
      },
    ],
    testimonials: [
      {
        name: 'Arun Varma',
        location: 'Bangalore, India',
        comment: 'Secured an Overall Band 8.5 (L:9, R:8.5, W:7.5, S:8) on my first attempt! The essay evaluation sessions were invaluable.',
        rating: 5,
      },
    ],
    metaTitle: 'IELTS Coaching in Bangalore | Best IELTS Training Institute | Cambridge Academy',
    metaDescription:
      'Premier IELTS coaching in Bangalore with British Council & IDP certified trainers. Proven Band 8.0+ strategies, authentic mock tests, and personalized essay evaluation.',
    keywords: [
      'ielts coaching in bangalore',
      'best ielts training institute bangalore',
      'ielts classes kammanahalli',
      'ielts academic training bangalore',
      'ielts general coaching bangalore',
    ],
  },

  'pte-preparation': {
    slug: 'pte-preparation',
    title: 'PTE Academic Preparation Coaching in Bangalore',
    shortTitle: 'PTE Preparation',
    category: 'exam-preparation',
    categoryName: 'Examination Courses',
    tagline: 'Crack 79+ (Band 8 Equivalent) with AI Scoring Algorithms & Strategy',
    heroImage: '/images/courses/course-pte.jpg',
    intro:
      'Master the Pearson Test of English (PTE Academic) with our specialized coaching program designed around Pearson’s automated scoring criteria. We demystify the AI scoring algorithm, teaching precise templates for Describe Image, Retell Lecture, and Write Essay, alongside high-speed Read Aloud and Repeat Sentence drills.',
    whoShouldJoin: [
      'Aspirants seeking Australia and New Zealand permanent residency or student visas',
      'Students looking for fast test results and computer-scored fairness',
      'Test-takers aiming for a score of 79+ across all 4 communicative skills',
    ],
    objectives: [
      'Understand PTE automated scoring criteria: oral fluency, pronunciation, and content',
      'Master proven high-scoring templates for Speaking, Writing, and Summarization',
      'Build rapid typing speed, note-taking skills, and listening accuracy',
      'Eliminate hesitation, speech pauses, and background noise penalties',
    ],
    whatYouLearn: [
      'Read Aloud, Repeat Sentence, Describe Image, and Re-tell Lecture mastery',
      'Summarize Written Text and Write Essay templates for full marks',
      'Reading Fill in the Blanks and Re-order Paragraphs grammar shortcuts',
      'Write from Dictation and Listening Fill in the Blanks memory strategies',
      'Real exam portal simulation and automated AI mock feedback',
    ],
    curriculum: [
      {
        title: 'Module 1: Speaking & Writing Core Strategies',
        description: 'Unlocking maximum points through oral fluency and proven structural templates.',
        topics: ['Microphone technique & pitch control', 'Describe Image & Retell Lecture templates', 'Essay structuring for AI scoring'],
      },
      {
        title: 'Module 2: Reading Skills & Collocations',
        description: 'Conquering the most challenging section of the PTE Academic test.',
        topics: ['Academic collocation lists', 'Re-order paragraphs logic', 'Reading & Writing Fill in the blanks techniques'],
      },
      {
        title: 'Module 3: Listening & Dictation Drills',
        description: 'Securing critical cross-credited marks for writing and listening.',
        topics: ['Write from dictation memory hacks', 'Highlight incorrect words speed drills', 'Summarize spoken text templates'],
      },
      {
        title: 'Module 4: Full-Length AI Portal Mock Exams',
        description: 'Simulated computer testing with score analysis.',
        topics: ['Timed full mock tests', 'Detailed scorecard diagnostics', 'Last-minute score boosting tactics'],
      },
    ],
    methodology:
      'Daily lab practice on PTE simulation software, algorithm-aligned pronunciation training, and targeted repeated exam question drills.',
    mode: 'Both Online & Offline Available',
    duration: '3 to 6 Weeks (Fast-Track & Regular options)',
    batchTimings: 'Flexible batch options: Morning, Evening, and Weekend batches',
    benefits: [
      'Access to premium PTE simulation software with instant AI scoring',
      'High-yield repeated exam question bank updated every month',
      'Individual pronunciation and oral fluency diagnostic feedback',
      'Dedicated computer lab with test-standard headsets',
    ],
    trainerInfo:
      'Coached by certified Pearson PTE specialists with consistent student track records of 79+ and 90 overall scores.',
    faqs: [
      {
        question: 'How quickly can I prepare for the PTE Academic exam?',
        answer: 'With our intensive fast-track program, dedicated students often achieve target scores within 3 to 4 weeks.',
      },
      {
        question: 'Do you provide mock tests with automated scoring?',
        answer: 'Yes, our portal provides full-length tests that mirror the Pearson testing engine with instant scorecards.',
      },
    ],
    testimonials: [
      {
        name: 'Mohammed Farhan',
        location: 'Bangalore, India',
        comment: 'Scored 84 overall on PTE Academic! The Write from Dictation and Describe Image templates made all the difference.',
        rating: 5,
      },
    ],
    metaTitle: 'PTE Coaching in Bangalore | Best PTE Academic Training | Cambridge Academy',
    metaDescription:
      'Top PTE Academic coaching in Bangalore. Proven 79+ templates, AI portal practice, and personalized feedback at Cambridge Academy of English.',
    keywords: ['pte coaching in bangalore', 'best pte training bangalore', 'pte academic classes kammanahalli', 'pte 79 plus coaching'],
  },

  'oet-preparation': {
    slug: 'oet-preparation',
    title: 'OET Preparation Coaching in Bangalore (Occupational English Test)',
    shortTitle: 'OET Preparation',
    category: 'exam-preparation',
    categoryName: 'Examination Courses',
    tagline: 'Healthcare-Specific English for Doctors, Nurses, and Medical Professionals',
    heroImage: '/images/courses/course-oet.jpg',
    intro:
      'Cambridge Academy of English offers specialized OET (Occupational English Test) training for healthcare professionals seeking registration and employment in the UK (NMC/GMC), Ireland, Australia, New Zealand, and Dubai. Our curriculum is tailored exclusively to medical scenarios, referral letter writing, and clinical patient consultations.',
    whoShouldJoin: [
      'Nurses preparing for UK NMC registration and NHS recruitment',
      'Doctors preparing for GMC registration in the UK and Australia',
      'Pharmacists, physiotherapists, and dentists requiring OET certification',
    ],
    objectives: [
      'Achieve Grade B (350+ points) or higher across all 4 sub-tests',
      'Master clinical communication criteria: empathy, relationship building, and active listening',
      'Write flawless referral, transfer, and discharge letters within 45 minutes',
      'Comprehend medical consultations, ward handovers, and healthcare journal texts',
    ],
    whatYouLearn: [
      'Medical consultation roleplay simulations with expert clinical feedback',
      'Case note filtering and concise clinical letter construction',
      'Healthcare-focused listening sub-tests (patient consultations & lectures)',
      'Medical reading sub-tests: workplace guidelines, policy documents, and clinical research',
      'Professional tone, empathy, and bedside manner language',
    ],
    curriculum: [
      {
        title: 'Module 1: OET Speaking for Healthcare',
        description: 'Simulating doctor-patient and nurse-patient clinical interactions.',
        topics: ['Building rapport and reassuring anxious patients', 'Explaining medical conditions in layman terms', 'Handling difficult consultations'],
      },
      {
        title: 'Module 2: OET Writing (Referral & Discharge Letters)',
        description: 'Selecting relevant case notes and structuring formal medical correspondence.',
        topics: ['Case note analysis and filtering', 'Letter structure, layout, and purpose', 'Grammatical accuracy in medical contexts'],
      },
      {
        title: 'Module 3: OET Listening (A, B, and C)',
        description: 'Comprehending consultations, healthcare briefings, and medical presentations.',
        topics: ['Note-completion in consultation audio', 'Short workplace dialogue comprehension', 'Long healthcare lecture analysis'],
      },
      {
        title: 'Module 4: OET Reading (A, B, and C)',
        description: 'Speed-reading dosage charts, hospital guidelines, and clinical papers.',
        topics: ['Part A rapid text-matching', 'Part B hospital policy understanding', 'Part C medical literature analysis'],
      },
    ],
    methodology:
      'Individual medical roleplays recorded for review, line-by-line clinical letter correction, and authentic OET healthcare test materials.',
    mode: 'Both Online & Offline Available',
    duration: '4 to 8 Weeks',
    batchTimings: 'Flexible batches tailored around hospital and clinic duty shifts',
    benefits: [
      'Specialized curriculum for Nursing and Medicine candidates',
      'Extensive referral letter correction against official OET criteria',
      'Flexible scheduling accommodating irregular hospital shift patterns',
      'High first-time pass rate for UK NMC and GMC applicants',
    ],
    trainerInfo:
      'Mentored by experienced OET specialist language trainers with in-depth knowledge of medical communication standards.',
    faqs: [
      {
        question: 'Is OET easier than IELTS for healthcare professionals?',
        answer: 'Most nurses and doctors find OET more relevant and natural because all vocabulary, reading materials, and roleplays are drawn directly from daily clinical workplace scenarios.',
      },
      {
        question: 'Do you provide profession-specific materials for nursing and medicine?',
        answer: 'Yes, our training is strictly customized for your specific healthcare profession.',
      },
    ],
    testimonials: [
      {
        name: 'Sister Mary Joseph',
        location: 'Bangalore, India',
        comment: 'Secured Grade B in all four sub-tests! The letter evaluation sessions gave me total clarity on what the examiners look for.',
        rating: 5,
      },
    ],
    metaTitle: 'OET Coaching in Bangalore | Best OET Training for Nurses & Doctors | Cambridge Academy',
    metaDescription:
      'Premier OET preparation in Bangalore. Specialized clinical communication, medical referral writing, and mock tests for nurses and doctors.',
    keywords: ['oet coaching in bangalore', 'oet training for nurses bangalore', 'oet exam preparation', 'oet classes kammanahalli'],
  },

  'celpip-preparation': {
    slug: 'celpip-preparation',
    title: 'CELPIP Preparation Coaching in Bangalore',
    shortTitle: 'CELPIP Preparation',
    category: 'exam-preparation',
    categoryName: 'Examination Courses',
    tagline: 'Target CLB 9+ for Canada PR & Express Entry Immigration',
    heroImage: '/images/courses/course-celpip.jpg',
    intro:
      'Prepare for the Canadian English Language Proficiency Index Program (CELPIP-General) at Cambridge Academy of English. Tailored specifically for Canadian immigration and citizenship applicants, our training focuses on functional Canadian English, computer-delivered test strategies, and score-maximizing response templates for all 8 speaking tasks.',
    whoShouldJoin: [
      'Candidates applying for Canadian Permanent Residency via Express Entry',
      'Provincial Nominee Program (PNP) and Canadian Experience Class (CEC) applicants',
      'Learners who prefer a 100% computer-based Canadian English assessment over IELTS',
    ],
    objectives: [
      'Achieve CLB 9 (scores of 9, 9, 9, 9) or higher to maximize Canadian CRS points',
      'Master Canadian cultural contexts, idioms, and workplace communication norms',
      'Complete all 8 speaking tasks comfortably within tight computer timers',
      'Compose clear, structured emails and survey responses for CELPIP Writing',
    ],
    whatYouLearn: [
      'Detailed strategies for all 8 CELPIP Speaking tasks (advice, visuals, predictions, opinions)',
      'Email writing and responding to survey questions for CELPIP Writing Tasks 1 and 2',
      'Listening for problem solving, daily conversations, and news items',
      'Reading correspondence, diagrams, viewpoints, and informational texts',
      'Time management and keyboarding strategies on the official computer layout',
    ],
    curriculum: [
      {
        title: 'Module 1: CELPIP Speaking Mastery',
        description: 'Step-by-step breakdown of all 8 speaking prompts with timing discipline.',
        topics: ['Giving advice and personal experiences', 'Describing a scene from visual diagrams', 'Expressing opinions and difficult situations'],
      },
      {
        title: 'Module 2: CELPIP Writing Excellence',
        description: 'Crafting high-scoring Canadian emails and persuasive survey responses.',
        topics: ['Email tone, purpose, and formatting', 'Survey response paragraphing and persuasive reasoning', 'Proofreading and lexical range'],
      },
      {
        title: 'Module 3: CELPIP Listening & Canadian Accents',
        description: 'Tackling everyday Canadian interactions and news broadcasts.',
        topics: ['Listening to problem solving', 'Conversations between colleagues', 'Viewing video conversations and answering questions'],
      },
      {
        title: 'Module 4: CELPIP Reading & Mock Testing',
        description: 'Navigating correspondence and interpreting diagrams rapidly.',
        topics: ['Reading correspondence and applying information', 'Reading for viewpoints and editorial nuance', 'Full-length computer mock tests'],
      },
    ],
    methodology:
      'Computerized test simulations, microphone recording analysis, and targeted feedback on CLB scoring rubric benchmarks.',
    mode: 'Both Online & Offline Available',
    duration: '3 to 6 Weeks',
    batchTimings: 'Evening and weekend batches available',
    benefits: [
      'Comprehensive Canadian English study modules and practice sets',
      'Proven speaking templates for all 8 distinct tasks',
      'Line-by-line evaluation of email and survey submissions',
      'Computer lab practice matching the real Paragon testing interface',
    ],
    trainerInfo:
      'Coached by senior test-prep experts certified in Canadian language benchmarking and immigration English standards.',
    faqs: [
      {
        question: 'Is CELPIP accepted for Canadian Express Entry PR?',
        answer: 'Yes, CELPIP-General is officially designated by IRCC (Immigration, Refugees and Citizenship Canada) for Express Entry, PNP, and citizenship.',
      },
      {
        question: 'Is CELPIP easier than IELTS General?',
        answer: 'Many test-takers find CELPIP easier because the entire test (including speaking) is completed in one sitting on a computer, and tests everyday practical situations.',
      },
    ],
    testimonials: [
      {
        name: 'Deepak Nair',
        location: 'Bangalore, India',
        comment: 'Secured CLB 10 across all sections on CELPIP! The speaking task templates gave me huge confidence.',
        rating: 5,
      },
    ],
    metaTitle: 'CELPIP Coaching in Bangalore | Best CELPIP Training for Canada PR | Cambridge Academy',
    metaDescription:
      'Top CELPIP coaching in Bangalore for Canadian Express Entry. Target CLB 9+ with computer-delivered mock tests and expert speaking templates.',
    keywords: ['celpip coaching in bangalore', 'celpip classes bangalore', 'celpip canada pr coaching', 'best celpip training institute'],
  },

  'toefl-preparation': {
    slug: 'toefl-preparation',
    title: 'TOEFL iBT Preparation Coaching in Bangalore',
    shortTitle: 'TOEFL Preparation',
    category: 'exam-preparation',
    categoryName: 'Examination Courses',
    tagline: 'Achieve 105+ for Top American and Global Universities',
    heroImage: '/images/courses/course-toefl.jpg',
    intro:
      'Excel in the TOEFL iBT (Test of English as a Foreign Language) with specialized test-prep coaching from Cambridge Academy of English. Tailored for undergraduate and graduate applicants to top universities in the United States, Canada, Europe, and Asia, our curriculum covers the newly updated shortened TOEFL format with integrated speaking and academic discussion writing.',
    whoShouldJoin: [
      'Students applying for MS, MBA, PhD, and undergraduate programs in the USA and Canada',
      'Candidates looking to achieve a competitive score of 100+ on the TOEFL iBT',
      'Learners who need to master integrated academic speaking and lecture listening',
    ],
    objectives: [
      'Achieve a target score of 100 to 115 on the TOEFL iBT examination',
      'Master the new "Writing for an Academic Discussion" task within 10 minutes',
      'Deliver coherent integrated speaking answers combining reading texts and audio lectures',
      'Comprehend complex university-level academic passages and lecture recordings',
    ],
    whatYouLearn: [
      'Speed reading strategies for long, dense university textbook passages',
      'Note-taking techniques for academic lectures and campus conversations',
      'Integrated speaking templates combining reading passages and professor audio',
      'Mastery of Writing Task 1 (Integrated) and Task 2 (Academic Discussion)',
      'Strategies for handling the shortened 2-hour official test format',
    ],
    curriculum: [
      {
        title: 'Module 1: Reading Academic Texts',
        description: 'Tackling vocabulary-in-context, factual information, and sentence insertion questions.',
        topics: ['Academic reading speed drills', 'Inference and purpose questions', 'Summary and table completion'],
      },
      {
        title: 'Module 2: Listening to University Lectures',
        description: 'Effective note-taking, identifying professor attitudes, and lecture structure.',
        topics: ['Campus conversations', 'Multi-speaker academic lectures', 'Understanding tone and rhetorical intent'],
      },
      {
        title: 'Module 3: Integrated & Independent Speaking',
        description: 'Microphone practice under strict 45-60 second response limits.',
        topics: ['Independent choice prompt', 'Campus announcement integration', 'Academic lecture synthesis'],
      },
      {
        title: 'Module 4: Writing for Academic Discussion',
        description: 'Expressing well-reasoned contributions to online classroom discussions.',
        topics: ['Integrated writing essay synthesis', '10-minute academic discussion task', 'Grammar precision and lexical variety'],
      },
    ],
    methodology:
      'Computer lab simulation, audio-recorder speaking reviews, and real-time ETS score rubric evaluations.',
    mode: 'Both Online & Offline Available',
    duration: '4 to 6 Weeks',
    batchTimings: 'Weekday mornings, evenings, and weekend batches available',
    benefits: [
      'Updated curriculum aligned with ETS’s shortened test format',
      'Full-length computerized mock examinations',
      'Individual essay correction with ETS-calibrated feedback',
      'Access to official TOEFL practice materials',
    ],
    trainerInfo:
      'Led by certified ETS TOEFL coaches with over a decade of North American university prep experience.',
    faqs: [
      {
        question: 'Is this course updated for the new shortened TOEFL format?',
        answer: 'Yes, our entire curriculum and mock tests strictly reflect ETS’s latest shortened format, including the new Academic Discussion writing task.',
      },
      {
        question: 'Can I take mock tests in your computer lab?',
        answer: 'Yes, our lab is equipped with official-style test workstations and noise-canceling headsets.',
      },
    ],
    testimonials: [
      {
        name: 'Siddharth Iyer',
        location: 'Bangalore, India',
        comment: 'Scored 112/120 on TOEFL iBT! The integrated speaking strategies and note-taking methods were pure gold.',
        rating: 5,
      },
    ],
    metaTitle: 'TOEFL Coaching in Bangalore | Best TOEFL iBT Classes | Cambridge Academy',
    metaDescription:
      'Score 100+ on TOEFL iBT with premier coaching in Bangalore. Comprehensive training on the updated test format, integrated speaking, and mock exams.',
    keywords: ['toefl coaching in bangalore', 'toefl classes kammanahalli', 'toefl ibt training bangalore', 'best toefl coaching institute'],
  },

  'languagecert-preparation': {
    slug: 'languagecert-preparation',
    title: 'LanguageCert International ESOL Preparation',
    shortTitle: 'LanguageCert Preparation',
    category: 'exam-preparation',
    categoryName: 'Examination Courses',
    tagline: 'Fast, Flexible International English Qualifications for Global Visas & Study',
    heroImage: '/images/courses/course-languagecert.jpg',
    intro:
      'Prepare for LanguageCert International ESOL examinations (levels B1, B2 Communicator, C1 Expert, and C2 Mastery). Widely recognized by UK Visas and Immigration (SELT), international universities, and government ministries, LanguageCert offers flexible remote-proctored online and test-center exams with swift results.',
    whoShouldJoin: [
      'Applicants requiring UK SELT certification for work and student visas',
      'Students targeting universities that accept LanguageCert International ESOL',
      'Learners seeking standalone Speaking or Written certificates',
    ],
    objectives: [
      'Master the LanguageCert exam format across Listening, Reading, Writing, and Speaking',
      'Pass with High Pass grading aligned to CEFR standards',
      'Prepare for live online proctored exam conditions and speaking interviews',
    ],
    whatYouLearn: [
      'Spoken exam interview etiquette and prompt interaction techniques',
      'Written test essay, article, and report writing conventions',
      'Reading comprehension across communicative texts and opinion pieces',
      'Audio comprehension for diverse international accents',
    ],
    curriculum: [
      {
        title: 'Module 1: LanguageCert Spoken Exam Focus',
        description: 'Interactive conversation, roleplay, and topical discourse with examiner.',
        topics: ['Part 1 personal introduction', 'Part 2 situational roleplays', 'Part 3 & 4 structured discussion and presentation'],
      },
      {
        title: 'Module 2: LanguageCert Written Exam (Listening & Reading)',
        description: 'Techniques for multiple choice, note-taking, and sentence completion.',
        topics: ['Listening strategies', 'Reading matching and text analysis', 'Grammar and usage'],
      },
      {
        title: 'Module 3: LanguageCert Writing Tasks',
        description: 'Formal letters, essays, reports, and articles for CEFR B2/C1.',
        topics: ['Task analysis and layout', 'Coherence and vocabulary register', 'Timed mock writing evaluation'],
      },
    ],
    methodology:
      'CEFR-aligned communicative training, practice tests, and simulated 1-on-1 speaking interview sessions.',
    mode: 'Both Online & Offline Available',
    duration: '3 to 6 Weeks',
    batchTimings: 'Weekday and weekend options',
    benefits: [
      'Dedicated practice for UKVI SELT requirements',
      'Official practice test materials and sample answers',
      'Fast-track preparation options for urgent visa deadlines',
    ],
    trainerInfo:
      'Trained by CEFR-certified linguists and international ESOL preparation experts.',
    faqs: [
      {
        question: 'Is LanguageCert accepted for UK visas?',
        answer: 'Yes, LanguageCert SELT exams are officially approved by UK Visas and Immigration (UKVI) for work, study, and citizenship applications.',
      },
    ],
    testimonials: [
      {
        name: 'Rachel Thomas',
        location: 'Bangalore, India',
        comment: 'Passed LanguageCert C1 Expert with High Pass! The trainer guided me thoroughly through the spoken interview format.',
        rating: 5,
      },
    ],
    metaTitle: 'LanguageCert Coaching in Bangalore | UK SELT Preparation | Cambridge Academy',
    metaDescription:
      'Prepare for LanguageCert International ESOL & UKVI SELT exams in Bangalore. Expert guidance, mock tests, and fast-track coaching.',
    keywords: ['languagecert coaching bangalore', 'languagecert selt ukvi', 'languagecert esol classes'],
  },

  'cae-preparation': {
    slug: 'cae-preparation',
    title: 'C1 Advanced (CAE) Preparation Coaching',
    shortTitle: 'CAE (C1 Advanced)',
    category: 'exam-preparation',
    categoryName: 'Examination Courses',
    tagline: 'Master High-Level English for Academic & Professional Distinction',
    heroImage: '/images/courses/course-cae.jpg',
    intro:
      'The Cambridge English C1 Advanced (formerly known as CAE) is the gold standard in in-depth English language proficiency. Trusted by over 9,000 educational institutions, governments, and employers worldwide, C1 Advanced demonstrates that you have the language skills required for complex academic study and high-level corporate roles.',
    whoShouldJoin: [
      'Academics and professionals targeting top-tier global universities and multinational employers',
      'Teachers and linguists seeking prestigious Cambridge C1 qualification credentials',
      'Advanced speakers looking to refine nuances, idioms, and sophisticated grammatical structures',
    ],
    objectives: [
      'Score Grade A or B on the Cambridge C1 Advanced examination',
      'Master the Use of English paper (collocations, idioms, key word transformations)',
      'Write compelling academic proposals, reviews, reports, and persuasive essays',
      'Discuss complex, abstract topics fluently in paired speaking interviews',
    ],
    whatYouLearn: [
      'In-depth mastery of Reading and Use of English parts 1 through 8',
      'Sophisticated writing formats: proposals, formal reports, essays, and reviews',
      'Listening strategies for rapid academic discussions, interviews, and radio programs',
      'Paired speaking test dynamics: negotiating, turn-taking, and collaborative tasks',
    ],
    curriculum: [
      {
        title: 'Module 1: Use of English & Grammar Mastery',
        description: 'Advanced collocations, inversion, idioms, and key word transformations.',
        topics: ['Multiple-choice cloze & open cloze', 'Word formation exercises', 'Key word transformation mastery'],
      },
      {
        title: 'Module 2: Advanced Writing Portfolio',
        description: 'Formal register, persuasive discourse, and sophisticated paragraph architecture.',
        topics: ['Compulsory essay writing', 'Proposals, reports, reviews, and letters', 'Advanced cohesive devices'],
      },
      {
        title: 'Module 3: Listening & Reading Comprehension',
        description: 'Deep inference, attitude detection, and understanding abstract viewpoints.',
        topics: ['Cross-text multiple matching', 'Gapped text extraction', 'Multiple-matching listening tasks'],
      },
      {
        title: 'Module 4: Paired Speaking Interview Simulations',
        description: 'Collaborative task mastery, individual long turn, and discussion.',
        topics: ['Part 2 visual comparison in 1 minute', 'Part 3 collaborative decision making', 'Part 4 abstract discussion'],
      },
    ],
    methodology:
      'Rigorous Cambridge University Press materials, in-depth syntactic analysis, and paired speaking simulation sessions.',
    mode: 'Both Online & Offline Available',
    duration: '8 to 12 Weeks',
    batchTimings: 'Weekday evenings and weekend batches',
    benefits: [
      'Cambridge exam certified senior faculty',
      'Full-length authentic past paper mock test series',
      'Lifetime validity of Cambridge C1 Advanced certification',
    ],
    trainerInfo:
      'Coached by Cambridge-certified diploma holders with specialized expertise in advanced English syntax and rhetoric.',
    faqs: [
      {
        question: 'Does the Cambridge C1 Advanced certificate expire?',
        answer: 'Unlike IELTS or TOEFL which expire after 2 years, Cambridge English Qualifications (CAE) have lifetime validity.',
      },
    ],
    testimonials: [
      {
        name: 'Ananya Deshmukh',
        location: 'Bangalore, India',
        comment: 'Secured Grade A in C1 Advanced. The trainer’s breakdown of the Use of English paper was world-class.',
        rating: 5,
      },
    ],
    metaTitle: 'Cambridge C1 Advanced (CAE) Preparation in Bangalore | Cambridge Academy',
    metaDescription:
      'Expert coaching for Cambridge C1 Advanced (CAE) in Bangalore. Master Use of English, advanced writing, and paired speaking for lifetime certification.',
    keywords: ['cae coaching bangalore', 'c1 advanced preparation bangalore', 'cambridge exam coaching bangalore'],
  },

  'cpe-preparation': {
    slug: 'cpe-preparation',
    title: 'C2 Proficiency (CPE) Preparation Coaching',
    shortTitle: 'CPE (C2 Proficiency)',
    category: 'exam-preparation',
    categoryName: 'Examination Courses',
    tagline: 'The Pinnacle of English Language Mastery – Highest Level Cambridge Qualification',
    heroImage: '/images/courses/course-cpe.jpg',
    intro:
      'Cambridge English C2 Proficiency (formerly known as CPE) is the highest qualification offered by Cambridge English, demonstrating an exceptional level of English approaching native speaker fluency. Our specialized coaching prepares candidates to communicate with native-level nuance, precision, and sophistication in high-level academic, diplomatic, and executive spheres.',
    whoShouldJoin: [
      'Senior educators, translators, diplomats, and international business leaders',
      'Scholars pursuing postgraduate research at Oxford, Cambridge, and Ivy League universities',
      'English trainers and linguists aiming for peak professional accreditation',
    ],
    objectives: [
      'Achieve Grade A, B, or C on the Cambridge C2 Proficiency examination',
      'Master the most challenging linguistic nuances, historical idioms, and syntactic structures',
      'Produce immaculate academic articles, proposals, reports, and critical reviews',
      'Engage effortlessly in sophisticated philosophical, scientific, and cultural discourse',
    ],
    whatYouLearn: [
      'Complex lexical subtleties, phrasal collocations, and register shifts',
      'Advanced comprehension of dense academic, literary, and journalistic texts',
      'Critical analysis and synthesis of multiple source texts into concise essays',
      'Nuanced spoken expression: irony, skepticism, humor, and delicate negotiations',
    ],
    curriculum: [
      {
        title: 'Module 1: Mastery Level Use of English & Lexis',
        description: 'Elite grammatical transformations and esoteric vocabulary.',
        topics: ['C2 key word transformations', 'Idiomatic expressions & phrasal subtleties', 'Word formation and morphological analysis'],
      },
      {
        title: 'Module 2: Advanced Text Synthesis & Writing',
        description: 'Summarizing and evaluating opposing arguments from complex texts.',
        topics: ['Compulsory summary & evaluation essay', 'High-level articles, reviews, and reports', 'Rhetorical devices and styling'],
      },
      {
        title: 'Module 3: Fast-Paced Native Listening & Reading',
        description: 'Deciphering rapid-fire colloquial and formal speech from radio and symposiums.',
        topics: ['Literary text extraction', 'Complex academic arguments', 'Fast multi-accent audio analysis'],
      },
      {
        title: 'Module 4: Spoken Eloquence & Discourse Management',
        description: '2-minute monologue on abstract prompt and cooperative debate.',
        topics: ['Sustained 2-minute speech', 'Collaborative evaluation', 'Philosophical dialogue handling'],
      },
    ],
    methodology:
      'Rigorous intellectual discourse, native-level text deconstruction, and comprehensive Cambridge C2 past paper simulations.',
    mode: 'Both Online & Offline Available',
    duration: '8 to 16 Weeks',
    batchTimings: 'Customized batch schedules for executive and academic candidates',
    benefits: [
      'Elite Cambridge certified master instructors',
      'Exhaustive feedback on essay synthesis and rhetorical quality',
      'Permanent lifetime credential recognized internationally by top universities',
    ],
    trainerInfo:
      'Mentored exclusively by senior master linguists and international Cambridge assessment specialists.',
    faqs: [
      {
        question: 'What level of English is required to join C2 Proficiency preparation?',
        answer: 'Candidates should ideally possess strong C1-level fluency or have cleared C1 Advanced / IELTS 7.5+ before enrolling.',
      },
    ],
    testimonials: [
      {
        name: 'Dr. Vikram Malhotra',
        location: 'Bangalore, India',
        comment: 'Achieved Grade A in C2 Proficiency. The intellectual rigor and pedagogical depth of Cambridge Academy are truly peerless.',
        rating: 5,
      },
    ],
    metaTitle: 'Cambridge C2 Proficiency (CPE) Coaching in Bangalore | Cambridge Academy',
    metaDescription:
      'Prepare for the highest Cambridge qualification: C2 Proficiency (CPE). Master native-level English fluency, synthesis writing, and eloquent discourse.',
    keywords: ['cpe coaching bangalore', 'c2 proficiency preparation', 'cambridge cpe classes bangalore'],
  },

  // C. ENGLISH FOR ADULTS
  'general-english': {
    slug: 'general-english',
    title: 'General English Course for Adults',
    shortTitle: 'General English',
    category: 'english-adults',
    categoryName: 'English for Adults',
    tagline: 'Practical Everyday English for Social Confidence and Personal Growth',
    heroImage: '/images/courses/course-general-adults.jpg',
    intro:
      'Our General English course for adults is tailored for individuals who want to communicate naturally in everyday life—at social events, family gatherings, travel destinations, and daily community interactions. We focus on speaking fluency, listening comprehension, functional grammar, and real-life vocabulary in a supportive, judgment-free setting.',
    whoShouldJoin: [
      'Adults who feel shy or embarrassed when speaking English in social situations',
      'Parents wanting to converse comfortably at school meetings and community events',
      'Travel enthusiasts wishing to travel internationally with independent confidence',
      'Anyone seeking to strengthen foundational English grammar and conversational skills',
    ],
    objectives: [
      'Speak English effortlessly in social, community, and travel situations',
      'Overcome the fear of making grammatical errors while speaking',
      'Understand native and non-native speakers across diverse accents',
      'Read and write everyday emails, messages, and social media posts accurately',
    ],
    whatYouLearn: [
      'Everyday conversations: greetings, introductions, making plans, expressing opinions',
      'Travel English: navigating airports, hotels, restaurants, and shopping overseas',
      'Essential grammar taught intuitively through speech rather than dry rule memorization',
      'Pronunciation, syllable stress, and clear voice delivery',
      'Reading comprehension for newspapers, novels, and digital content',
    ],
    curriculum: [
      {
        title: 'Module 1: Building Foundational Confidence',
        description: 'Breaking hesitation and building simple, correct sentence structures.',
        topics: ['Daily routine conversations', 'Self-introductions and describing people/places', 'Basic tenses in conversation'],
      },
      {
        title: 'Module 2: Expanding Social Conversations',
        description: 'Handling everyday life situations with ease.',
        topics: ['Shopping, dining out, and travel conversations', 'Making requests and asking for directions', 'Telephone conversations'],
      },
      {
        title: 'Module 3: Expressing Views and Stories',
        description: 'Sharing personal experiences, opinions, and feelings.',
        topics: ['Storytelling using past tenses', 'Expressing agreement and polite disagreement', 'Giving suggestions and advice'],
      },
      {
        title: 'Module 4: Everyday Reading and Writing',
        description: 'Functional literacy for modern adult life.',
        topics: ['Writing clear personal emails and messages', 'Reading articles and discussing news stories', 'Social media communication etiquette'],
      },
    ],
    methodology:
      'Friendly, interactive, communicative methodology with peer conversations, visual prompts, audio drills, and gentle corrective mentoring.',
    mode: 'Both Online & Offline Available',
    duration: '6 to 12 Weeks',
    batchTimings: 'Morning, afternoon, and evening batches to fit adult work and family routines',
    benefits: [
      'Warm, encouraging, and judgment-free adult classroom atmosphere',
      'Small groups with peer learners of similar age and skill levels',
      'Practical roleplays that mirror real-world adult interactions',
      'Certificate of Completion from Cambridge Academy of English',
    ],
    trainerInfo:
      'Patient, empathetic trainers specialized in adult language learning psychology and confidence building.',
    faqs: [
      {
        question: 'Is there an age limit for this course?',
        answer: 'No! We welcome adult learners of all age groups, from young adults to seniors.',
      },
      {
        question: 'What if my English is very basic?',
        answer: 'We start from absolute essentials and progress at a pace that ensures you feel comfortable, supported, and confident every step of the way.',
      },
    ],
    testimonials: [
      {
        name: 'Sunita Mehra',
        location: 'Bangalore, India',
        comment: 'At 45, I was nervous about returning to a classroom. The trainers were so warm and patient. Now I speak English with my children’s teachers without hesitation!',
        rating: 5,
      },
    ],
    metaTitle: 'General English Course for Adults in Bangalore | Cambridge Academy',
    metaDescription:
      'Build everyday English fluency and confidence with Cambridge Academy’s General English for Adults. Supportive, practical, and interactive learning in Bangalore.',
    keywords: ['general english for adults', 'english classes for adults bangalore', 'spoken english for homemakers', 'learn english adults'],
  },

  'professional-english': {
    slug: 'professional-english',
    title: 'Professional English for the Modern Workplace',
    shortTitle: 'Professional English',
    category: 'english-adults',
    categoryName: 'English for Adults',
    tagline: 'Communicate with Authority, Precision, and Executive Poise',
    heroImage: '/images/courses/course-professional.jpg',
    intro:
      'Equip yourself with the sophisticated communication skills demanded by top multinational companies, corporate boardrooms, and fast-growing startups. Our Professional English course focuses on high-impact meeting participation, executive presentations, persuasive business email writing, and confident cross-functional collaboration.',
    whoShouldJoin: [
      'Software engineers, team leads, and project managers communicating with US/European clients',
      'Mid-career executives aiming for senior management promotions',
      'Sales and marketing professionals pitching to corporate decision makers',
      'Professionals seeking to articulate ideas clearly and authoritatively in corporate meetings',
    ],
    objectives: [
      'Lead and participate actively in high-stakes corporate meetings and scrums',
      'Deliver persuasive, engaging business presentations with executive presence',
      'Write clear, concise, professional emails, project briefs, and proposals',
      'Master cross-cultural corporate communication with international global teams',
    ],
    whatYouLearn: [
      'Meeting language: interjecting politely, summarizing, steering discussions, and action-planning',
      'Executive presentation techniques: framing hooks, data storytelling, and Q&A handling',
      'Advanced corporate email writing: professional tone, conciseness, and diplomatic phrasing',
      'Negotiation, conflict resolution, and constructive feedback language',
      'Polite assertiveness and speaking up in high-pressure leadership scenarios',
    ],
    curriculum: [
      {
        title: 'Module 1: Corporate Meeting Mastery',
        description: 'Speaking up with confidence in hybrid and in-person scrums and strategy sessions.',
        topics: ['Opening and structuring meetings', 'Agreeing, disagreeing diplomatically, and clarifying', 'Handling difficult questions from stakeholders'],
      },
      {
        title: 'Module 2: High-Impact Presentations & Data Storytelling',
        description: 'Engaging audiences and delivering clear project narratives.',
        topics: ['Structuring 10-minute executive presentations', 'Describing graphs, metrics, and trends effortlessly', 'Vocal delivery, pacing, and visual storytelling'],
      },
      {
        title: 'Module 3: Business Writing & Email Diplomacy',
        description: 'Writing emails that get fast, positive responses.',
        topics: ['Email etiquette and eliminating wordiness', 'Escalation emails and delivering difficult news', 'Writing structured project updates and executive summaries'],
      },
      {
        title: 'Module 4: Cross-Cultural Communication & Leadership',
        description: 'Working smoothly across diverse global business cultures.',
        topics: ['Western vs. Asian workplace communication styles', 'Small talk and executive rapport building', 'Negotiation phrases and conflict de-escalation'],
      },
    ],
    methodology:
      'Case study simulations, recorded mock business presentations with executive coaching feedback, and practical email redrafting clinics.',
    mode: 'Both Online & Offline Available',
    duration: '6 to 8 Weeks',
    batchTimings: 'Early morning (7:30 - 9:00 AM) and evening (7:30 - 9:00 PM) batches designed for working professionals',
    benefits: [
      'Real-world business case studies and roleplay simulations',
      'One-on-one executive presentation critique and vocal coaching',
      'Practical templates for corporate emails, status updates, and reports',
      'Immediate workplace impact on meeting confidence and performance reviews',
    ],
    trainerInfo:
      'Taught by corporate communication coaches who have trained leaders at Fortune 500 tech companies and consultancies.',
    faqs: [
      {
        question: 'Will this course help me speak more comfortably with onshore clients?',
        answer: 'Yes! A core pillar of the course is cross-cultural client communication, eliminating filler words, and presenting project updates with clarity and poise.',
      },
      {
        question: 'Are classes compatible with full-time corporate work hours?',
        answer: 'Yes, batches are specifically scheduled before or after office hours and on weekends.',
      },
    ],
    testimonials: [
      {
        name: 'Gaurav Kulkarni',
        location: 'Bangalore, India',
        comment: 'As a tech lead, I used to freeze during client syncs. This course helped me structure my thoughts, eliminate filler words, and speak like an executive.',
        rating: 5,
      },
    ],
    metaTitle: 'Professional English Course for Workplace in Bangalore | Cambridge Academy',
    metaDescription:
      'Elevate your career with Professional English training in Bangalore. Master meetings, presentations, corporate emails, and client communication.',
    keywords: ['professional english course bangalore', 'business english training', 'corporate communication classes bangalore', 'english for it professionals'],
  },

  'business-communication': {
    slug: 'business-communication',
    title: 'Business Communication Course',
    shortTitle: 'Business Communication',
    category: 'english-adults',
    categoryName: 'English for Adults',
    tagline: 'Strategic Verbal and Written Communication for Modern Enterprise Leaders',
    heroImage: '/images/courses/course-advanced-diploma.jpg',
    intro:
      'Master the strategic art of business communication. Designed for entrepreneurs, senior executives, business analysts, and managers, this intensive program covers corporate negotiations, commercial proposals, stakeholder management, boardroom diplomacy, and crisis communication in English.',
    whoShouldJoin: [
      'Business founders, startup leaders, and entrepreneurs pitching to investors',
      'Consultants, business analysts, and customer success managers',
      'Corporate executives handling cross-departmental stakeholder negotiations',
    ],
    objectives: [
      'Negotiate contracts and resolve commercial disagreements with diplomatic precision',
      'Deliver high-stakes business pitches and executive briefings',
      'Write compelling commercial proposals, executive memos, and whitepapers',
      'Navigate crisis communication and sensitive corporate messaging smoothly',
    ],
    whatYouLearn: [
      'Principles of persuasive rhetoric and strategic business dialogue',
      'Pitching products, services, and business proposals convincingly',
      'Commercial contract negotiation phrases and win-win compromise language',
      'High-level business writing: whitepapers, investor updates, and policy documents',
      'Corporate body language, non-verbal cues, and boardroom presence',
    ],
    curriculum: [
      {
        title: 'Module 1: Strategic Persuasion & Pitching',
        description: 'Structuring compelling business arguments that win buy-in.',
        topics: ['The art of the elevator pitch', 'Persuasive frameworks (Problem-Agitate-Solve)', 'Audience analysis and strategic framing'],
      },
      {
        title: 'Module 2: Negotiation & Boardroom Diplomacy',
        description: 'Tactical vocabulary for high-value deal-making.',
        topics: ['Opening terms and anchoring positions', 'Concessions, counter-offers, and trade-offs', 'Closing deals with clarity'],
      },
      {
        title: 'Module 3: Executive Business Documentation',
        description: 'Authoring crisp, publication-grade commercial collateral.',
        topics: ['Writing commercial proposals & statements of work (SOW)', 'Executive memos & board briefing notes', 'Proofreading for professional polish'],
      },
      {
        title: 'Module 4: Crisis Management & Public Relations',
        description: 'Communicating under pressure with transparency and poise.',
        topics: ['Handling customer escalations', 'Addressing internal team crises', 'Media and press statement language'],
      },
    ],
    methodology:
      'Executive workshop format with Harvard-style business case discussions, mock negotiation simulations, and peer review sessions.',
    mode: 'Both Online & Offline Available',
    duration: '6 to 10 Weeks',
    batchTimings: 'Executive weekend seminars and evening masterclasses',
    benefits: [
      'Comprehensive business communication playbook and templates',
      'High-impact simulated boardroom negotiations',
      'Networking with senior peers across diverse Bangalore industries',
      'Executive Certificate from Cambridge Academy of English',
    ],
    trainerInfo:
      'Facilitated by seasoned corporate communication consultants and MBA-trained language strategists.',
    faqs: [
      {
        question: 'How is this course different from Spoken English?',
        answer: 'While Spoken English focuses on general fluency, Business Communication is an executive program focused on strategic persuasion, commercial negotiation, proposal writing, and boardroom leadership.',
      },
    ],
    testimonials: [
      {
        name: 'Venkatesh Rao',
        location: 'Bangalore, India',
        comment: 'Helped us close two enterprise client contracts! The negotiation frameworks and proposal writing modules are exceptional.',
        rating: 5,
      },
    ],
    metaTitle: 'Business Communication Course in Bangalore | Executive Training | Cambridge Academy',
    metaDescription:
      'Master strategic business communication in Bangalore. High-impact negotiations, investor pitches, executive writing, and leadership presence.',
    keywords: ['business communication course bangalore', 'corporate communication training', 'executive english coaching bangalore'],
  },

  // D. ENGLISH FOR FOREIGN NATIONALS
  'diploma-in-english-language': {
    slug: 'diploma-in-english-language',
    title: 'Diploma in English Language (for Foreign Nationals & International Students)',
    shortTitle: 'Diploma in English',
    category: 'foreign-nationals',
    categoryName: 'English for Foreign Nationals',
    tagline: 'Structured Immersion Program for International Learners in Bangalore',
    heroImage: '/images/courses/course-foreign-nationals.jpg',
    intro:
      'For over two decades, Cambridge Academy of English has welcomed international learners from over 18 countries across the Middle East, East Asia, Africa, and Europe. Our Diploma in English Language provides a structured, immersive pathway from elementary communication to academic competence, combining daily classroom instruction, cultural integration, and practical English fluency.',
    whoShouldJoin: [
      'International students planning to pursue undergraduate or postgraduate degrees in India',
      'Foreign diplomats, expatriates, and embassy staff stationed in Bangalore',
      'Learners from Saudi Arabia, Yemen, Oman, Thailand, Japan, Korea, and African nations',
      'Non-English speaking international professionals relocating to India',
    ],
    objectives: [
      'Develop complete functional fluency in spoken and written English',
      'Transition smoothly from native language dependency to spontaneous English thinking',
      'Acquire academic listening and lecture note-taking skills',
      'Integrate comfortably into Indian university campuses and international communities',
    ],
    whatYouLearn: [
      'Comprehensive English grammar, sentence architecture, and phonetics',
      'Everyday conversational communication, social interaction, and survival English',
      'Academic reading: textbooks, research papers, and literary extracts',
      'Essay writing, paragraph structuring, and university assignments',
      'Indian cultural orientation, Bangalore navigation, and conversational etiquette',
    ],
    curriculum: [
      {
        title: 'Level 1: Intensive Language Foundations',
        description: 'Alphabetics, basic vocabulary, phonetics, and essential sentence framing.',
        topics: ['Pronunciation of English phonemes', 'Basic nouns, verbs, and tenses', 'Everyday survival dialogues'],
      },
      {
        title: 'Level 2: Conversational Fluency & Vocabulary',
        description: 'Expanding vocabulary for everyday social and community life.',
        topics: ['Shopping, banking, and medical conversations', 'Expressing feelings and narrating stories', 'Interactive pair dialogues'],
      },
      {
        title: 'Level 3: Intermediate Language Structure',
        description: 'Complex sentence structures, passive voice, and conditionals.',
        topics: ['Reading comprehension drills', 'Writing formal letters and short essays', 'Participating in classroom discussions'],
      },
      {
        title: 'Level 4: Academic English & Presentation',
        description: 'Preparing for university coursework and public speaking.',
        topics: ['Delivering formal PowerPoint presentations', 'Academic research reading', 'Final diploma assessment & viva'],
      },
    ],
    methodology:
      'Immersive, multi-sensory communicative learning with daily vocabulary clinics, speech lab audio exercises, and international peer interaction.',
    mode: 'Classroom (Bangalore Campus)',
    duration: '3 Months to 6 Months (Intensive full-time immersion)',
    batchTimings: 'Morning to Afternoon daily immersion schedule (Monday to Friday)',
    benefits: [
      'Official admission letter and documentation assistance for foreign students',
      'Dedicated international student coordinators assisting with local accommodation',
      'Diverse peer community with classmates from 18+ nations',
      'Prestigious institutional Diploma Certificate upon successful examination',
    ],
    trainerInfo:
      'Instructors certified in Teaching English to Speakers of Other Languages (TESOL/CELTA) with extensive cross-cultural sensitivity.',
    faqs: [
      {
        question: 'Do you provide admission documentation for international students?',
        answer: 'Yes, we provide official admission letters and course acceptance documentation to registered foreign students.',
      },
      {
        question: 'Do you help with accommodation in Kammanahalli, Bangalore?',
        answer: 'Our dedicated student welfare team guides international students to verified hostels, serviced apartments, and homestays near our campus.',
      },
    ],
    testimonials: [
      {
        name: 'Ahmed Al-Mansoor',
        location: 'Saudi Arabia',
        comment: 'I arrived in Bangalore knowing very little English. After 6 months of the Diploma course, I joined an engineering college with total confidence. Cambridge Academy is the best!',
        rating: 5,
      },
    ],
    metaTitle: 'Diploma in English for Foreign Nationals | Cambridge Academy Bangalore',
    metaDescription:
      'Comprehensive Diploma in English Language for international students in Bangalore. Full-time immersion, visa documentation support, and students from 18+ countries.',
    keywords: [
      'english course for foreign students bangalore',
      'diploma in english language bangalore',
      'learn english for international students india',
      'english classes for foreign nationals',
    ],
  },

  'master-diploma-in-english-language': {
    slug: 'master-diploma-in-english-language',
    title: 'Master Diploma in English Language (Advanced Immersion)',
    shortTitle: 'Master Diploma in English',
    category: 'foreign-nationals',
    categoryName: 'English for Foreign Nationals',
    tagline: 'Advanced Academic, Literary, and Professional English for International Scholars',
    heroImage: '/images/courses/course-master-diploma.jpg',
    intro:
      'The Master Diploma in English Language is our most comprehensive postgraduate-level immersion program for foreign nationals. Designed for international scholars, government fellows, and university lecturers, this rigorous multi-semester program covers advanced linguistics, rhetorical writing, critical literature analysis, and professional diplomatic communication.',
    whoShouldJoin: [
      'International graduates pursuing Master’s and PhD programs in English-medium universities',
      'Foreign government delegates, embassy staff, and international civil servants',
      'Non-native English teachers from foreign countries seeking advanced language refinement',
    ],
    objectives: [
      'Achieve advanced C1/C2 CEFR language proficiency across all communicative domains',
      'Write publication-grade academic papers, theses, and policy reports in English',
      'Deliver keynote presentations and participate effortlessly in international symposiums',
      'Deconstruct complex literary, philosophical, and legal English texts',
    ],
    whatYouLearn: [
      'Advanced syntactic structures, morphological analysis, and stylistic variation',
      'Academic writing: literature reviews, methodology drafting, and thesis compilation',
      'Critical listening and real-time comprehension of rapid academic discourse',
      'Rhetorical devices, public oratory, and diplomatic negotiation language',
      'Editing and proofreading English publications for international journals',
    ],
    curriculum: [
      {
        title: 'Semester 1: Advanced Syntax & Critical Reading',
        description: 'Deconstructing sophisticated prose and mastering nuanced grammatical structures.',
        topics: ['Advanced clause analysis and subordination', 'Critical reading of scholarly articles', 'Stylistic register and tone'],
      },
      {
        title: 'Semester 2: Scholarly Writing & Research Methods',
        description: 'Writing academic papers aligned to international publishing guidelines.',
        topics: ['Thesis statement architecture', 'Citation styles (APA, MLA, Harvard)', 'Synthesizing conflicting academic arguments'],
      },
      {
        title: 'Semester 3: Oratory, Debate & Symposium Leadership',
        description: 'Delivering keynote addresses and chairing international seminars.',
        topics: ['Advanced rhetorical devices in public speaking', 'Moderating international panels', 'Cross-cultural diplomatic negotiations'],
      },
      {
        title: 'Semester 4: Capstone Dissertation & Viva Voce',
        description: 'Independent research project defended before an academic panel.',
        topics: ['Dissertation drafting under mentor guidance', 'Formal viva voce presentation', 'Master Diploma graduation award'],
      },
    ],
    methodology:
      'Seminar-style academic discussions, individual research mentoring, and formal defense presentations before our academic board.',
    mode: 'Classroom (Bangalore Campus)',
    duration: '6 Months to 1 Year',
    batchTimings: 'Full-time academic schedule (Monday to Friday)',
    benefits: [
      'Highest institutional credential offered by Cambridge Academy of English',
      'Personal thesis supervision by senior linguistic scholars',
      'Access to extensive campus academic library and electronic research resources',
      'Formal graduation ceremony and transcript documentation',
    ],
    trainerInfo:
      'Taught by distinguished faculty members holding Master’s and Doctoral degrees in English Linguistics and Literature.',
    faqs: [
      {
        question: 'What qualification do I receive upon completion?',
        answer: 'Graduates receive the prestigious Master Diploma in English Language with comprehensive academic transcripts.',
      },
    ],
    testimonials: [
      {
        name: 'Fatima Al-Husseini',
        location: 'Yemen',
        comment: 'The Master Diploma prepared me to write my Master’s dissertation with complete linguistic independence. An incredible academic institution!',
        rating: 5,
      },
    ],
    metaTitle: 'Master Diploma in English Language for International Students | Cambridge Academy',
    metaDescription:
      'Premier Master Diploma in English Language in Bangalore. Advanced immersion in academic writing, scholarly research, and international oratory.',
    keywords: [
      'master diploma in english language',
      'advanced english for foreign students bangalore',
      'academic english diploma india',
    ],
  },

  // E. ENGLISH FOR TEACHERS
  'teacher-training': {
    slug: 'teacher-training',
    title: 'TEFL / TESOL Teacher Training Course in Bangalore',
    shortTitle: 'Teacher Training',
    category: 'teacher-training',
    categoryName: 'English for Teachers',
    tagline: 'Launch an International English Teaching Career with Certified Pedagogy',
    heroImage: '/images/courses/course-tefl.jpg',
    intro:
      'Transform your passion for language into a rewarding global career. Our TEFL (Teaching English as a Foreign Language) / TESOL Teacher Training program at Cambridge Academy of English equips aspiring and experienced educators with international communicative teaching methodology, classroom management skills, lesson planning frameworks, and observed teaching practice.',
    whoShouldJoin: [
      'Graduates and professionals aspiring to teach English abroad (Europe, East Asia, Middle East, Latin America)',
      'School teachers seeking to modernize classroom pedagogy and student engagement techniques',
      'Freelance corporate trainers and online ESL tutors wanting certified teaching credentials',
    ],
    objectives: [
      'Master modern Communicative Language Teaching (CLT) methodologies',
      'Design engaging, learner-centered 45-to-60 minute lesson plans (PPP, TBL, ESA)',
      'Manage diverse classrooms, handle discipline, and maximize student speaking time',
      'Gain real teaching practice with live students and detailed observer feedback',
    ],
    whatYouLearn: [
      'Teaching the four skills: Reading, Writing, Listening, and Speaking',
      'Grammar presentation techniques (inductive vs. deductive approaches)',
      'Teaching phonetics, pronunciation, and vocabulary through interactive games',
      'Classroom management: seating arrangements, teacher talk time (TTT), and instructions',
      'Digital classroom tools and online ESL teaching platform mastery',
    ],
    curriculum: [
      {
        title: 'Module 1: Language Awareness & ESL Foundations',
        description: 'Analyzing English from the perspective of an international language teacher.',
        topics: ['Grammar analysis for teachers', 'Phonology and phonetic transcription', 'Second language acquisition theories'],
      },
      {
        title: 'Module 2: Methodology & Lesson Planning',
        description: 'Structuring effective, learner-centric lesson flows.',
        topics: ['PPP (Presentation-Practice-Production) framework', 'Task-Based Learning (TBL)', 'Creating supplementary worksheets and flashcards'],
      },
      {
        title: 'Module 3: Teaching Receptive & Productive Skills',
        description: 'Techniques for teaching reading, writing, listening, and speaking.',
        topics: ['Pre, during, and post-reading activities', 'Running debates and roleplay speaking tasks', 'Correcting student writing constructively'],
      },
      {
        title: 'Module 4: Observed Teaching Practice (TP)',
        description: 'Delivering live lessons to real students under expert observation.',
        topics: ['Live classroom teaching practice', 'Peer feedback sessions', 'Post-lesson self-reflection and mentoring'],
      },
    ],
    methodology:
      'Experiential, hands-on workshop training with mandatory observed teaching practice hours and constructive mentor feedback.',
    mode: 'Both Online & Offline Available',
    duration: '4 to 8 Weeks (120-Hour Certificate Program)',
    batchTimings: 'Full-time intensive weekday batches and flexible weekend batches',
    benefits: [
      '120-Hour TEFL/TESOL internationally aligned certificate',
      'Practical observed teaching practice with real ESL students',
      'Resume building and international ESL job placement guidance',
      'Access to a rich digital library of ESL lesson plans and teaching resources',
    ],
    trainerInfo:
      'Directed by international CELTA/Delta qualified teacher trainers with over 15 years of teacher education experience.',
    faqs: [
      {
        question: 'Does this certificate allow me to teach English abroad?',
        answer: 'Yes! A 120-hour TEFL/TESOL certification is the standard benchmark required by language schools, international academies, and online ESL employers worldwide.',
      },
      {
        question: 'Do I need prior teaching experience to join?',
        answer: 'No prior teaching experience is required. We take you from fundamental concepts to confident classroom delivery.',
      },
    ],
    testimonials: [
      {
        name: 'Meenakshi Sundaram',
        location: 'Bangalore, India',
        comment: 'The observed teaching practice gave me the confidence I needed. Within two months of graduating, I secured an ESL teaching position in Vietnam!',
        rating: 5,
      },
    ],
    metaTitle: 'TEFL / TESOL Teacher Training Course in Bangalore | Cambridge Academy',
    metaDescription:
      'Get certified to teach English globally. 120-hour TEFL/TESOL teacher training in Bangalore with observed teaching practice and international methodology.',
    keywords: [
      'tefl courses in bangalore',
      'teacher training in bangalore',
      'tesol certification bangalore',
      'english teacher training institute',
    ],
  },

  'tkt-preparation': {
    slug: 'tkt-preparation',
    title: 'Cambridge TKT (Teaching Knowledge Test) Preparation Course',
    shortTitle: 'TKT Preparation',
    category: 'teacher-training',
    categoryName: 'English for Teachers',
    tagline: 'Earn Cambridge English Teaching Credentials Recognized in Over 60 Countries',
    heroImage: '/images/courses/course-tkt.jpg',
    intro:
      'Prepare for the Cambridge English Teaching Knowledge Test (TKT) with Bangalore’s premier Cambridge test preparation center. TKT is an internationally recognized test from Cambridge English that proves your knowledge of core concepts in teaching English to speakers of other languages, giving you an edge in leading schools and international academies.',
    whoShouldJoin: [
      'Current primary and secondary school English teachers seeking official Cambridge credentials',
      'Aspiring teachers wanting a globally respected pedagogical foundation',
      'Educators looking to benchmark their knowledge against international standards',
    ],
    objectives: [
      'Score Band 3 or Band 4 across TKT Modules 1, 2, and 3',
      'Master language concepts, terminology, and background to language learning',
      'Understand lesson planning, assessment, and selection of teaching resources',
      'Demonstrate mastery in managing the teaching and learning process',
    ],
    whatYouLearn: [
      'TKT Module 1: Language and background to language learning and teaching',
      'TKT Module 2: Lesson planning and use of resources for language teaching',
      'TKT Module 3: Managing the teaching and learning process',
      'Official Cambridge TKT exam techniques and question pattern analysis',
    ],
    curriculum: [
      {
        title: 'Module 1: Language Concepts & Second Language Acquisition',
        description: 'Grammar terms, lexis, phonology, and learner motivation factors.',
        topics: ['Grammatical terms and functions', 'Phonemes, stress, and intonation', 'First vs. second language acquisition differences'],
      },
      {
        title: 'Module 2: Lesson Planning & Materials Selection',
        description: 'Aims, stages, materials adaptation, and formal/informal assessment.',
        topics: ['Identifying main and subsidiary lesson aims', 'Adapting coursebook materials', 'Formative and summative assessment types'],
      },
      {
        title: 'Module 3: Classroom Management & Teacher Language',
        description: 'Managing interactions, teacher talk, giving instructions, and error correction.',
        topics: ['Teacher talk time vs. student talk time', 'Instruction checking questions (ICQs)', 'Categorizing and treating student errors'],
      },
      {
        title: 'Module 4: TKT Exam Practice & Mock Drills',
        description: 'Past papers, timing strategies, and Cambridge scoring rubrics.',
        topics: ['Solving 80-question mock test papers', 'Analyzing tricky multiple-matching questions', 'Final exam readiness review'],
      },
    ],
    methodology:
      'Systematic deconstruction of the Cambridge TKT syllabus, past paper analysis, and intensive concept revision workshops.',
    mode: 'Both Online & Offline Available',
    duration: '4 to 6 Weeks',
    batchTimings: 'Weekend batches specially designed for working school educators',
    benefits: [
      'Official Cambridge TKT syllabus alignment',
      'Full sets of official Cambridge TKT sample papers with answer explanations',
      'Cambridge exam registration support in Bangalore',
      'Substantial career enhancement in CBSE, ICSE, and IB international schools',
    ],
    trainerInfo:
      'Coached by Cambridge-accredited teacher trainers with proven records of coaching educators to Band 4 distinctions.',
    faqs: [
      {
        question: 'What is the format of the Cambridge TKT exam?',
        answer: 'Each TKT module consists of 80 objective multiple-choice and matching questions completed in 80 minutes.',
      },
      {
        question: 'Are the modules taken together or separately?',
        answer: 'Candidates have the flexibility to take Modules 1, 2, and 3 together or separately as per their preference.',
      },
    ],
    testimonials: [
      {
        name: 'Shalini Nambiar',
        location: 'Bangalore, India',
        comment: 'Scored Band 4 across all three TKT modules! The conceptual clarity provided by Cambridge Academy made the exam feel so straightforward.',
        rating: 5,
      },
    ],
    metaTitle: 'Cambridge TKT Training in Bangalore | Teaching Knowledge Test Prep',
    metaDescription:
      'Comprehensive Cambridge TKT preparation in Bangalore. Master Modules 1, 2, and 3 with official practice papers and certified Cambridge trainers.',
    keywords: ['tkt training in bangalore', 'cambridge tkt preparation', 'teaching knowledge test classes', 'tkt exam coaching bangalore'],
  },

  // F. FOREIGN LANGUAGES
  'german-language': {
    slug: 'german-language',
    title: 'German Language Classes in Bangalore (A1, A2, B1, B2)',
    shortTitle: 'German Language',
    category: 'foreign-languages',
    categoryName: 'Foreign Languages',
    tagline: 'Learn German with Native & Certified Instructors Aligned to Goethe-Zertifikat Standards',
    heroImage: '/images/courses/course-german.jpg',
    intro:
      'Master the German language (Deutsch) at Cambridge Academy of English in Bangalore. Whether you are aiming for higher education in tuition-free German universities, pursuing work visas (Chancenkarte / Opportunity Card), or working in German multinational engineering firms, our CEFR-aligned courses prepare you for real-world fluency and Goethe-Institut certification.',
    whoShouldJoin: [
      'Students planning to study engineering, medicine, and sciences at public universities in Germany',
      'Job seekers pursuing the German Opportunity Card (Chancenkarte) or EU Blue Card',
      'Healthcare professionals and nurses aiming for German hospital appointments',
      'Language enthusiasts wanting to master one of Europe’s most influential languages',
    ],
    objectives: [
      'Achieve certified proficiency across CEFR levels A1, A2, B1, and B2',
      'Speak German confidently in everyday living, academic, and professional environments',
      'Pass the official Goethe-Zertifikat / ÖSD / telc examinations with high marks',
      'Understand spoken German across standard German, Austrian, and Swiss dialects',
    ],
    whatYouLearn: [
      'Accurate German pronunciation, alphabet phonetics, and umlaut sounds',
      'Essential German grammar: articles (der/die/das), cases (Nominativ, Akkusativ, Dativ, Genitiv)',
      'Conversational skills: introducing yourself, shopping, dining, commuting, and socializing',
      'German workplace communication, professional emails, and interview skills',
      'Preparation for Goethe-Institut examination modules (Hören, Lesen, Schreiben, Sprechen)',
    ],
    curriculum: [
      {
        title: 'Level A1: Beginner Foundations',
        description: 'First steps in German: greetings, personal details, family, and daily routines.',
        topics: ['Alphabet, pronunciation, and numbers', 'Articles and basic verb conjugation', 'Daily life vocabulary and Goethe A1 exam preparation'],
      },
      {
        title: 'Level A2: Elementary Communication',
        description: 'Expressing past events, describing surroundings, and simple work discussions.',
        topics: ['Perfekt and Präteritum past tenses', 'Dative and accusative prepositions', 'Goethe A2 exam practice'],
      },
      {
        title: 'Level B1: Independent Speaker (University & Visa Benchmark)',
        description: 'Managing most situations encountered while traveling or working in Germany.',
        topics: ['Subordinate clauses (weil, dass, obwohl)', 'Expressing wishes, opinions, and abstract ideas', 'Goethe B1 full module training'],
      },
      {
        title: 'Level B2: Professional Fluency',
        description: 'Spontaneous, fluent expression on complex technical and literary topics.',
        topics: ['Passiv voice and Konjunktiv II', 'Advanced business and academic German', 'Goethe B2 examination drills'],
      },
    ],
    methodology:
      'Immersive communicative German practice using standard Netzwerk / Menschen course materials, interactive audio-visual drills, and simulated Goethe exam modules.',
    mode: 'Both Online & Offline Available',
    duration: '8 to 10 Weeks per CEFR Level',
    batchTimings: 'Weekday mornings, evenings, and weekend-only batches available',
    benefits: [
      'Goethe-Zertifikat aligned syllabus and test practice',
      'Certified, highly proficient German linguists with European training',
      'Free study materials, audio files, and practice exam papers',
      'Guidance for university admissions and visa requirements in Germany',
    ],
    trainerInfo:
      'Taught by certified German language experts holding C1/C2 Goethe credentials with years of pedagogical excellence.',
    faqs: [
      {
        question: 'Which level is required for studying at a German university?',
        answer: 'Most English-taught programs require A1 or A2 for visa purposes, while German-taught degree programs typically require B2 or C1 certification.',
      },
      {
        question: 'Do you help students register for the official Goethe exam?',
        answer: 'Yes, we guide our students through the examination registration process with the Goethe-Institut / Max Mueller Bhavan.',
      },
    ],
    testimonials: [
      {
        name: 'Naveen Kumar',
        location: 'Bangalore, India',
        comment: 'Cleared Goethe-Zertifikat B1 with 88%! The grammar explanations and speaking drills made German feel logical and enjoyable.',
        rating: 5,
      },
    ],
    metaTitle: 'German Language Classes in Bangalore | Learn German A1-B2 | Cambridge Academy',
    metaDescription:
      'Learn German in Bangalore with certified experts. CEFR A1, A2, B1, and B2 training aligned with Goethe-Zertifikat exams for study and work in Germany.',
    keywords: [
      'german language classes in bangalore',
      'learn german bangalore',
      'german a1 classes kammanahalli',
      'goethe zertifikat preparation bangalore',
    ],
  },

  'french-language': {
    slug: 'french-language',
    title: 'French Language Classes in Bangalore (DELF A1, A2, B1, B2)',
    shortTitle: 'French Language',
    category: 'foreign-languages',
    categoryName: 'Foreign Languages',
    tagline: 'Master the Language of Global Diplomacy, Culture, and Canadian Immigration',
    heroImage: '/images/courses/course-french.jpg',
    intro:
      'Learn French (Français) with experienced linguists at Cambridge Academy of English in Bangalore. French is an official language of the United Nations, European Union, and Canada (attracting extra CRS immigration points for Express Entry). Our training follows the CEFR framework and prepares students for DELF/DALF and TEF/TCF Canada exams.',
    whoShouldJoin: [
      'Immigration applicants aiming for bonus Canadian Express Entry CRS points via TEF/TCF Canada',
      'Students planning to pursue higher education in France, Belgium, Switzerland, or Canada',
      'Professionals in luxury, hospitality, international relations, and multinational corporations',
      'Culture and language enthusiasts eager to read and speak French fluently',
    ],
    objectives: [
      'Achieve certified proficiency across CEFR levels A1, A2, B1, and B2',
      'Converse fluently in French for social, academic, and business situations',
      'Pass official DELF A1-B2 or TEF Canada examinations with flying colors',
      'Master accurate French pronunciation, nasal vowels, and liaison rules',
    ],
    whatYouLearn: [
      'French phonetics, silent letters, accents (é, è, ê, ç), and natural rhythm',
      'Essential grammar: verb conjugations (er, ir, re), past tenses (passé composé, imparfait)',
      'Everyday conversational skills: ordering at cafés, shopping, directions, making friends',
      'Professional French: writing formal emails, CV preparation, and interview skills',
      'Extensive DELF and TEF Canada test preparation modules',
    ],
    curriculum: [
      {
        title: 'Level A1: Découverte (Discovery)',
        description: 'First steps in French: basic vocabulary, numbers, introductions, and everyday life.',
        topics: ['Pronunciation & alphabet', 'Present tense conjugations & articles', 'DELF A1 sample exam practice'],
      },
      {
        title: 'Level A2: Survie (Survival)',
        description: 'Describing past events, future plans, shopping, and social interactions.',
        topics: ['Passé composé and futur simple', 'Direct and indirect object pronouns (COD/COI)', 'DELF A2 examination training'],
      },
      {
        title: 'Level B1: Seuil (Threshold - Canadian Immigration Target)',
        description: 'Independent conversation, expressing opinions, feelings, and handling unexpected situations.',
        topics: ['Subjunctive mood (subjonctif)', 'Complex narratives and debates', 'TEF/TCF Canada & DELF B1 preparation'],
      },
      {
        title: 'Level B2: Indépendant (Vantage)',
        description: 'Fluent, spontaneous interaction on complex, abstract, and professional topics.',
        topics: ['Nuanced argumentative discourse', 'Advanced literary and professional vocabulary', 'DELF B2 examination mastery'],
      },
    ],
    methodology:
      'Dynamic communicative practice using standard international French methods (Saison / Cosmopolite), audio dialogue listening, and cultural workshops.',
    mode: 'Both Online & Offline Available',
    duration: '8 to 10 Weeks per CEFR Level',
    batchTimings: 'Weekday mornings, evenings, and weekend batches available',
    benefits: [
      'DELF and TEF Canada aligned curriculum',
      'Experienced French instructors with native-level proficiency',
      'Dedicated speaking salons and interactive conversational practice',
      'Guidance for Alliance Française examination registrations',
    ],
    trainerInfo:
      'Coached by certified French educators holding Master’s degrees in French Studies and DALF C1/C2 credentials.',
    faqs: [
      {
        question: 'Will learning French give me extra points for Canadian PR?',
        answer: 'Yes! Under Canada Express Entry, French language proficiency (NCLC 7 / B2 level) can grant you up to 50 additional CRS points.',
      },
      {
        question: 'Are classes suitable for complete beginners?',
        answer: 'Yes, our A1 program begins from the absolute basics of pronunciation and alphabet.',
      },
    ],
    testimonials: [
      {
        name: 'Aishwarya Raman',
        location: 'Bangalore, India',
        comment: 'Cleared DELF B1 in 6 months! The focus on spoken pronunciation and listening made French feel so intuitive.',
        rating: 5,
      },
    ],
    metaTitle: 'French Language Classes in Bangalore | Learn French A1-B2 | Cambridge Academy',
    metaDescription:
      'Top-rated French classes in Bangalore for DELF and TEF Canada. Master French speaking, listening, and grammar with certified instructors.',
    keywords: [
      'french language classes in bangalore',
      'learn french bangalore',
      'french classes for canada pr',
      'delf exam coaching bangalore',
    ],
  },

  'spanish-language': {
    slug: 'spanish-language',
    title: 'Spanish Language Classes in Bangalore (DELE A1, A2, B1, B2)',
    shortTitle: 'Spanish Language',
    category: 'foreign-languages',
    categoryName: 'Foreign Languages',
    tagline: 'Learn the World’s Second Most Spoken Native Language with Certified Coaches',
    heroImage: '/images/courses/course-spanish.jpg',
    intro:
      'Discover the vibrancy of the Spanish language (Español) at Cambridge Academy of English in Bangalore. Spoken by over 500 million people across Spain and Latin America, Spanish opens doors to global business opportunities, international travel, and cultural richness. Our program follows the Instituto Cervantes DELE/SIELE examination curriculum.',
    whoShouldJoin: [
      'Professionals working with Latin American and US Hispanic markets',
      'Students planning to study or volunteer in Spain, Mexico, Argentina, or Colombia',
      'Travelers wishing to explore Spanish-speaking countries with linguistic independence',
      'Language enthusiasts wanting an enjoyable, fast-progressing romance language',
    ],
    objectives: [
      'Achieve certified proficiency across CEFR levels A1, A2, B1, and B2',
      'Converse fluently with native Spanish speakers in social and business environments',
      'Pass official DELE or SIELE examinations certified by the Instituto Cervantes',
      'Master Spanish phonetics, rolled "rr", and natural conversational rhythm',
    ],
    whatYouLearn: [
      'Clear Spanish pronunciation, accentuation rules, and listening cadence',
      'Essential grammar: ser vs. estar, regular and irregular verb conjugations',
      'Conversational fluency: travel, dining, family, hobbies, culture, and business',
      'Past tenses (pretérito indefinido, imperfecto) and subjunctive mood',
      'Comprehensive DELE/SIELE examination practice and mock assessments',
    ],
    curriculum: [
      {
        title: 'Level A1: Acceso (Access)',
        description: 'First steps in Spanish: greetings, personal descriptions, and everyday life.',
        topics: ['Alphabet, sounds, and greetings', 'Ser vs. estar & present tense', 'Everyday vocabulary and DELE A1 practice'],
      },
      {
        title: 'Level A2: Plataforma (Platform)',
        description: 'Past tenses, describing past memories, shopping, and travel.',
        topics: ['Pretérito indefinido and pretérito perfecto', 'Direct and indirect object pronouns', 'DELE A2 examination training'],
      },
      {
        title: 'Level B1: Umbral (Threshold)',
        description: 'Independent communication, expressing hypothetical situations and feelings.',
        topics: ['Present and past subjunctive (subjuntivo)', 'Expressing doubts, emotions, and conditions', 'DELE B1 examination drills'],
      },
      {
        title: 'Level B2: Avanzado (Advanced)',
        description: 'Fluent, spontaneous discussion on complex social, technical, and cultural themes.',
        topics: ['Complex grammatical nuance & colloquial idioms', 'Formal business Spanish writing', 'Full DELE B2 mock exams'],
      },
    ],
    methodology:
      'Lively, interactive communicative sessions using standard Aula Internacional materials, music, cultural videos, and simulated DELE exam tasks.',
    mode: 'Both Online & Offline Available',
    duration: '8 to 10 Weeks per CEFR Level',
    batchTimings: 'Weekday evenings and weekend batches available',
    benefits: [
      'Curriculum fully aligned with Instituto Cervantes DELE/SIELE standards',
      'Passionate certified Spanish educators with international teaching credentials',
      'Interactive cultural workshops celebrating Spanish and Latin American traditions',
      'Course completion certificate from Cambridge Academy of English',
    ],
    trainerInfo:
      'Delivered by certified Hispanic language specialists holding DELE C1/C2 credentials.',
    faqs: [
      {
        question: 'Is Spanish difficult for Indian learners to pick up?',
        answer: 'Spanish is one of the most phonetic languages in the world—words are pronounced almost exactly as they are written, making it very accessible and enjoyable for Indian learners.',
      },
    ],
    testimonials: [
      {
        name: 'Suresh Menon',
        location: 'Bangalore, India',
        comment: 'The interactive conversational practice made learning Spanish an absolute joy. Cleared DELE A2 with high scores!',
        rating: 5,
      },
    ],
    metaTitle: 'Spanish Language Classes in Bangalore | Learn Spanish A1-B2 | Cambridge Academy',
    metaDescription:
      'Learn Spanish in Bangalore with certified linguists. Complete DELE/SIELE preparation from A1 to B2 with native-level methodology and cultural immersion.',
    keywords: ['spanish language classes in bangalore', 'learn spanish bangalore', 'dele exam coaching bangalore', 'spanish institute kammanahalli'],
  },

  'chinese-mandarin-language': {
    slug: 'chinese-mandarin-language',
    title: 'Chinese (Mandarin) Language Classes in Bangalore (HSK 1 to 4)',
    shortTitle: 'Chinese (Mandarin)',
    category: 'foreign-languages',
    categoryName: 'Foreign Languages',
    tagline: 'Master the World’s Most Spoken Language for Global Business & Trade',
    heroImage: '/images/courses/course-chinese.jpg',
    intro:
      'Learn Standard Mandarin Chinese (Putonghua) at Cambridge Academy of English in Bangalore. As China continues to lead global manufacturing, international trade, supply chains, and technology, Mandarin proficiency is one of the most valuable career assets. Our curriculum aligns with the official HSK (Hanyu Shuiping Kaoshi) examination system.',
    whoShouldJoin: [
      'Business owners, sourcing managers, and entrepreneurs dealing with Chinese suppliers',
      'Engineers and tech professionals collaborating with global Asian hardware and software firms',
      'Students seeking scholarships at top Chinese universities',
      'Anyone curious to master Mandarin tones, Pinyin, and Chinese character writing',
    ],
    objectives: [
      'Master the four tones of Mandarin Chinese and accurate Pinyin pronunciation',
      'Read and write essential Chinese characters (Hanzi) with stroke-order discipline',
      'Converse fluently in everyday social, travel, and business situations',
      'Pass the official HSK 1, HSK 2, or HSK 3 examinations with high scores',
    ],
    whatYouLearn: [
      'Pinyin phonetic system, initials, finals, and tone sandhi rules',
      'Basic to intermediate Chinese Hanzi character recognition and stroke order',
      'Conversational Mandarin: greetings, business meetings, pricing, and factory visits',
      'Essential Chinese sentence structures (Subject-Time-Location-Verb-Object)',
      'HSK official examination strategies, listening drills, and reading tests',
    ],
    curriculum: [
      {
        title: 'Level 1: HSK 1 (Basic Foundations)',
        description: 'Pinyin, the four tones, 150 essential words, and daily survival conversations.',
        topics: ['Pinyin and tone mastery', 'Basic greetings and family members', 'Numbers, dates, and prices'],
      },
      {
        title: 'Level 2: HSK 2 (Elementary Communication)',
        description: 'Expanding vocabulary to 300 words, simple sentence structures, and daily life.',
        topics: ['Ordering food, shopping, and transport', 'Expressing simple opinions and comparisons', 'HSK 2 sample paper drills'],
      },
      {
        title: 'Level 3: HSK 3 (Intermediate Fluency)',
        description: '600 words, reading characters without Pinyin assistance, and workplace Mandarin.',
        topics: ['Business visits and factory discussions', 'Complex grammatical structures', 'HSK 3 mock examinations'],
      },
      {
        title: 'Level 4: HSK 4 (Professional Fluency)',
        description: '1,200 words, discussing abstract topics, news, and formal business negotiations.',
        topics: ['Commercial negotiation terminology', 'Reading short Chinese essays and business reports', 'HSK 4 comprehensive training'],
      },
    ],
    methodology:
      'Tone-correction speech drills, visual Hanzi flashcard mnemonics, audio-visual dialogues, and structured HSK mock tests.',
    mode: 'Both Online & Offline Available',
    duration: '8 to 12 Weeks per HSK Level',
    batchTimings: 'Weekday evenings and weekend batches available',
    benefits: [
      'Official HSK syllabus alignment and mock tests',
      'Experienced Mandarin trainers with specialized phonetic training',
      'Focus on practical business trade and supply chain terminology',
      'Course completion certificate from Cambridge Academy of English',
    ],
    trainerInfo:
      'Instructors certified in Teaching Chinese as a Foreign Language with verified HSK 6 credentials.',
    faqs: [
      {
        question: 'Are the tones in Mandarin difficult to learn?',
        answer: 'While Mandarin has four tones, our systematic phonetic coaching and ear-training exercises ensure you master accurate tonal differentiation within the first two weeks.',
      },
    ],
    testimonials: [
      {
        name: 'Rohan Gupta',
        location: 'Bangalore, India',
        comment: 'As a supply chain manager, learning Mandarin helped me communicate directly with factory heads in Shenzhen without translators. Cleared HSK 2 with 94%!',
        rating: 5,
      },
    ],
    metaTitle: 'Chinese (Mandarin) Language Classes in Bangalore | HSK Training | Cambridge Academy',
    metaDescription:
      'Learn Mandarin Chinese in Bangalore. Official HSK 1 to 4 preparation, business Chinese, tone mastery, and character writing with expert linguists.',
    keywords: ['chinese language classes in bangalore', 'learn mandarin bangalore', 'hsk coaching bangalore', 'chinese classes kammanahalli'],
  },

  // G. ENGLISH FOR KIDS
  'kids-academic-english': {
    slug: 'kids-academic-english',
    title: 'Academic English for Kids (Young Learners Programme)',
    shortTitle: 'Kids Academic English',
    category: 'kids-english',
    categoryName: 'English for Kids',
    tagline: 'Inspiring Confident Communication, Phonics, and Creative Writing for Young Learners',
    heroImage: '/images/courses/course-kids.jpg',
    intro:
      'Nurture your child’s linguistic confidence with Cambridge Academy of English’s specialized Young Learners Programme. Designed for school students, this engaging, activity-based course develops reading comprehension, phonics, vocabulary, creative storytelling, and public speaking in a warm, child-friendly educational setting.',
    whoShouldJoin: [
      'School children looking to excel in school English curriculum (ICSE, CBSE, IB, IGCSE)',
      'Kids who feel shy or hesitant when answering questions in class or during school assemblies',
      'Young learners needing foundational support in phonics, spelling, and grammar',
      'Children aiming to develop an early love for reading and creative storytelling',
    ],
    objectives: [
      'Build strong phonemic awareness, correct pronunciation, and clear speech delivery',
      'Eliminate hesitation during school presentations, show-and-tell, and elocution',
      'Develop imaginative creative writing skills (stories, letters, descriptions)',
      'Cultivate a lifelong habit of avid book reading and critical comprehension',
    ],
    whatYouLearn: [
      'Jolly Phonics and sound blending for early and intermediate readers',
      'Grammar fundamentals explained through engaging stories, games, and puzzles',
      'Creative writing: story sequencing, character development, and descriptive prose',
      'Public speaking drills: show-and-tell, declamation, and expressive poetry recitation',
      'Comprehension strategies for school exams and international English Olympiads',
    ],
    curriculum: [
      {
        title: 'Module 1: Phonics & Expressive Speech',
        description: 'Mastering letter sounds, blends, and voice projection without fear.',
        topics: ['Phonics and word families', 'Voice modulation and clear enunciation', 'Show-and-tell confidence drills'],
      },
      {
        title: 'Module 2: Grammar Through Play',
        description: 'Understanding parts of speech intuitively through interactive games.',
        topics: ['Nouns, pronouns, verbs, and playful adjectives', 'Sentence building and punctuation', 'Fun grammar puzzles and quizzes'],
      },
      {
        title: 'Module 3: The Young Author (Creative Writing)',
        description: 'Writing colorful stories with beginning, middle, and exciting climaxes.',
        topics: ['Story-starter prompts and visual cue writing', 'Describing characters and magical settings', 'Writing personal diary entries and letters'],
      },
      {
        title: 'Module 4: Reading Champions & Public Oratory',
        description: 'Reading aloud with emotion and speaking before peers.',
        topics: ['Guided reading circles', 'Elocution and short speech presentations', 'End-of-term presentation to parents'],
      },
    ],
    methodology:
      'Play-way, multi-sensory educational methodology using storytelling, roleplays, flashcard games, drama, and encouraging mentor recognition.',
    mode: 'Both Online & Offline Available',
    duration: 'Ongoing term-time and intensive holiday batches (Editable field: Age groups 6-14 years)',
    batchTimings: 'After-school weekday batches and Saturday/Sunday weekend batches',
    benefits: [
      'Warm, encouraging, and safe child-centric learning environment',
      'Small batch sizes ensuring individual attention and speaking time for every child',
      'Regular parent-teacher feedback sessions to track milestone progress',
      'Cambridge Academy Young Learner Certificate of Excellence',
    ],
    trainerInfo:
      'Delivered by caring, certified child educators specialized in early childhood linguistics and cognitive language development.',
    faqs: [
      {
        question: 'What is the age eligibility for the Kids Academic English course?',
        answer: 'The program is organized into age-appropriate cohorts typically spanning ages 6 to 14 years (Primary and Middle School).',
      },
      {
        question: 'How do you keep young children engaged during sessions?',
        answer: 'Our classes blend storytelling, puppet interactions, roleplays, creative arts, and gamified challenges to keep children enthusiastic and active throughout.',
      },
    ],
    testimonials: [
      {
        name: 'Deepa Krishnan (Parent of 8-year-old Aarav)',
        location: 'Bangalore, India',
        comment: 'Aarav was so shy to speak in school. After two months at Cambridge Academy, he won second prize in his school elocution contest! We are thrilled.',
        rating: 5,
      },
    ],
    metaTitle: 'Academic English Classes for Kids in Bangalore | Cambridge Academy',
    metaDescription:
      'Inspiring English classes for kids in Bangalore. Phonics, creative writing, public speaking, and school curriculum support in a child-friendly environment.',
    keywords: ['english classes for kids bangalore', 'phonics classes bangalore', 'creative writing for children', 'kids public speaking classes'],
  },

  'a2-key-for-schools': {
    slug: 'a2-key-for-schools',
    title: 'Cambridge A2 Key for Schools (KET) Preparation',
    shortTitle: 'A2 Key for Schools',
    category: 'kids-english',
    categoryName: 'English for Kids',
    tagline: 'Build an Internationally Certified English Foundation for School Students',
    heroImage: '/images/courses/course-ket.jpg',
    intro:
      'The Cambridge English A2 Key for Schools (formerly known as KET for Schools) is an internationally recognized qualification that proves a student can communicate in simple, everyday English. Tailored specifically for school-age students, this qualification builds real-world confidence and provides an ideal first step toward higher Cambridge English qualifications.',
    whoShouldJoin: [
      'Middle school students aiming to benchmark their English skills against international CEFR standards',
      'Children preparing for higher-level Cambridge exams (B1 Preliminary, B2 First)',
      'Students looking to build solid grammatical foundations, listening comprehension, and speaking confidence',
    ],
    objectives: [
      'Achieve certified Cambridge A2 Key for Schools qualification',
      'Understand and use basic phrases, expressions, and everyday conversational English',
      'Write short simple notes, emails, and descriptive paragraphs with correct punctuation',
      'Interact with confidence during face-to-face paired speaking interviews',
    ],
    whatYouLearn: [
      'Reading and Writing: understanding signs, brochures, magazines, and writing short messages',
      'Listening: identifying key details in announcements, instructions, and daily conversations',
      'Speaking: responding to questions, discussing likes/dislikes, and collaborative dialogue',
      'Exam technique and official Cambridge practice test familiarity',
    ],
    curriculum: [
      {
        title: 'Module 1: Reading & Everyday Signs',
        description: 'Comprehending notices, short factual texts, and messages.',
        topics: ['Multiple choice short texts', 'Matching information to profiles', 'Vocabulary for school, hobbies, and sports'],
      },
      {
        title: 'Module 2: Practical Writing for Young Learners',
        description: 'Writing short notes, messages, and simple 35-word stories.',
        topics: ['Writing short emails answering 3 prompts', 'Writing a story based on 3 pictures', 'Spelling and punctuation checks'],
      },
      {
        title: 'Module 3: Listening Comprehension',
        description: 'Extracting key details from conversations and public announcements.',
        topics: ['Matching speakers to information', 'Note-taking from phone messages', 'Multiple choice dialogue comprehension'],
      },
      {
        title: 'Module 4: Paired Speaking Interview Training',
        description: 'Face-to-face interview practice with paired candidate simulations.',
        topics: ['Part 1 personal questions and hobbies', 'Part 2 discussing pictures and making choices with a partner', 'Pronunciation and interactive communication'],
      },
    ],
    methodology:
      'Official Cambridge University Press young learner materials, interactive paired practice, and mock test simulations.',
    mode: 'Both Online & Offline Available',
    duration: '6 to 10 Weeks (Editable field: Recommended for ages 9 to 13 years)',
    batchTimings: 'Weekend batches and after-school evening sessions',
    benefits: [
      'Official Cambridge English Qualification with lifetime validity',
      'Boosts academic confidence across ICSE, CBSE, and IB boards',
      'Full mock exam simulations under Cambridge test conditions',
      'Detailed diagnostic feedback to parents on all four communicative skills',
    ],
    trainerInfo:
      'Taught by Cambridge Young Learners certified educators experienced in motivating school children.',
    faqs: [
      {
        question: 'What is the relationship between KET and A2 Key for Schools?',
        answer: 'KET (Key English Test) was the former name of the examination. Cambridge English officially updated the title to "A2 Key for Schools" to better reflect its alignment with the international CEFR A2 proficiency level.',
      },
    ],
    testimonials: [
      {
        name: 'Pradeep Shenoy (Parent of 11-year-old Rohan)',
        location: 'Bangalore, India',
        comment: 'Rohan passed A2 Key for Schools with Pass with Distinction! The course gave him immense confidence in his school English.',
        rating: 5,
      },
    ],
    metaTitle: 'Cambridge A2 Key for Schools (KET) Preparation in Bangalore | Cambridge Academy',
    metaDescription:
      'Prepare school students for Cambridge A2 Key for Schools (KET). Internationally recognized qualification, mock tests, and expert child educators.',
    keywords: ['a2 key for schools bangalore', 'ket for schools preparation', 'cambridge english for kids bangalore', 'cambridge ket classes'],
  },

  'b1-preliminary-for-schools': {
    slug: 'b1-preliminary-for-schools',
    title: 'Cambridge B1 Preliminary for Schools (PET) Preparation',
    shortTitle: 'B1 Preliminary for Schools',
    category: 'kids-english',
    categoryName: 'English for Kids',
    tagline: 'Practical Intermediate English for School Students & Future Global Pathways',
    heroImage: '/images/courses/course-pet.jpg',
    intro:
      'The Cambridge English B1 Preliminary for Schools (formerly known as PET for Schools) is an intermediate-level qualification showing that a school student has mastered the basics of English and possesses practical language skills for everyday academic and social use. It represents a vital milestone on the journey toward B2 First and C1 Advanced.',
    whoShouldJoin: [
      'Students in high school (approx. ages 11 to 16) aiming for an intermediate international English certification',
      'School students preparing for future study abroad and global academic competitions',
      'Learners who have cleared A2 Key and are ready for the next level of Cambridge challenge',
    ],
    objectives: [
      'Achieve certified Cambridge B1 Preliminary for Schools qualification',
      'Understand factual articles and the opinions and attitudes expressed in longer texts',
      'Write coherent 100-word letters, stories, and articles expressing personal views',
      'Take part in spontaneous conversations on familiar academic and leisure topics',
    ],
    whatYouLearn: [
      'Reading longer factual texts, articles, and identifying opinion/writer purpose',
      'Writing structured 100-word emails and stories/articles with rich vocabulary',
      'Listening for attitude, gist, and detail in longer interviews and monologues',
      'Speaking fluently in extended pair discussions, comparing photographs, and making decisions',
    ],
    curriculum: [
      {
        title: 'Module 1: Reading Comprehension & Text Structure',
        description: 'Tackling longer articles, multiple choice, and gapped text exercises.',
        topics: ['Understanding writer attitude and purpose', 'Gapped text insertion drills', 'Vocabulary building across school and technology themes'],
      },
      {
        title: 'Module 2: Creative & Formal Writing (100 words)',
        description: 'Crafting well-structured letters, articles, and imaginative stories.',
        topics: ['Replying to an email prompt with 4 points', 'Writing an engaging magazine article or story', 'Paragraphing, connectors, and complex sentences'],
      },
      {
        title: 'Module 3: Listening to Extended Discussions',
        description: 'Extracting key facts from radio shows, interviews, and presentations.',
        topics: ['Multiple choice monologue comprehension', 'Filling gaps in informational notes', 'Identifying speaker agreement and disagreement'],
      },
      {
        title: 'Module 4: Paired Speaking Interview Mastery',
        description: 'Discussing photos, collaborating on plans, and extended reasoning.',
        topics: ['Part 2 describing color photographs for 1 minute', 'Part 3 collaborative decision making with partner', 'Part 4 discussing opinions and preferences'],
      },
    ],
    methodology:
      'Communicative pair work, Cambridge past paper drills, photo description clinics, and timed essay writing evaluations.',
    mode: 'Both Online & Offline Available',
    duration: '8 to 12 Weeks (Editable field: Recommended for ages 11 to 16 years)',
    batchTimings: 'Weekend batches and evening batches',
    benefits: [
      'Internationally prestigious Cambridge English certificate with lifetime validity',
      'Develops advanced writing and debate skills valuable for high school board exams',
      'Complete mock tests graded according to Cambridge B1 band rubrics',
    ],
    trainerInfo:
      'Instructors certified by Cambridge English to deliver intermediate young learner preparation.',
    faqs: [
      {
        question: 'What is the relationship between PET and B1 Preliminary for Schools?',
        answer: 'PET (Preliminary English Test) was the former designation. Cambridge English modernized the title to "B1 Preliminary for Schools" to align transparently with CEFR Level B1.',
      },
    ],
    testimonials: [
      {
        name: 'Lavanya Hegde (Parent of 13-year-old Ananya)',
        location: 'Bangalore, India',
        comment: 'Ananya cleared B1 Preliminary for Schools with Grade A! Her writing structure and vocabulary improved dramatically during the course.',
        rating: 5,
      },
    ],
    metaTitle: 'Cambridge B1 Preliminary for Schools (PET) in Bangalore | Cambridge Academy',
    metaDescription:
      'Prepare high school students for Cambridge B1 Preliminary for Schools (PET). Intermediate English qualification, mock tests, and lifetime certification.',
    keywords: ['b1 preliminary for schools bangalore', 'pet for schools preparation', 'cambridge pet classes bangalore', 'intermediate english for school students'],
  },

  'ket-for-schools': {
    slug: 'ket-for-schools',
    title: 'KET for Schools (A2 Key for Schools Legacy Programme)',
    shortTitle: 'KET for Schools',
    category: 'kids-english',
    categoryName: 'English for Kids',
    tagline: 'Comprehensive Foundation in Cambridge English for Young Learners',
    heroImage: '/images/courses/course-young-learners.jpg',
    intro:
      'Looking for KET for Schools? "KET for Schools" (Key English Test) has officially been updated by Cambridge English to "A2 Key for Schools". While the name was modernized to clearly reflect its CEFR Level A2 alignment, the core value remains unchanged: it provides young learners with an internationally accredited certificate demonstrating their ability to understand and use everyday spoken and written English.',
    whoShouldJoin: [
      'Parents and students searching for KET for Schools preparation in Bangalore',
      'School students seeking a recognized international qualification to validate their English progress',
      'Young learners building foundational skills in Reading, Writing, Listening, and Speaking',
    ],
    objectives: [
      'Master the complete updated A2 Key for Schools (KET) exam curriculum',
      'Build confidence in understanding simple written signs, instructions, and messages',
      'Converse naturally during the paired Cambridge speaking interview',
      'Understand the historical evolution from KET to the modern A2 Key examination format',
    ],
    whatYouLearn: [
      'The modern format of the Cambridge A2 Key exam (formerly KET)',
      'Strategies for Reading and Writing parts 1 through 7',
      'Listening for names, numbers, prices, and everyday factual instructions',
      'Speaking confidently in pair interviews with Cambridge examiners',
    ],
    curriculum: [
      {
        title: 'Module 1: From KET to A2 Key – Understanding the Format',
        description: 'Comprehensive overview of the modern test layout and question types.',
        topics: ['Exam structure comparison', 'CEFR A2 benchmark skills', 'Essential school vocabulary'],
      },
      {
        title: 'Module 2: Reading & Writing Mastery',
        description: 'Notices, factual texts, short email writing, and picture stories.',
        topics: ['Short text comprehension', 'Writing a 25-word note or email', 'Spelling and grammar accuracy'],
      },
      {
        title: 'Module 3: Listening & Audio Skills',
        description: 'Comprehending everyday school and home audio scenarios.',
        topics: ['Short conversations multiple choice', 'Note completion from announcements', 'Distractor trap identification'],
      },
      {
        title: 'Module 4: Paired Speaking Interview Simulations',
        description: 'Full-length speaking mock interviews with examiner feedback.',
        topics: ['Part 1 personal questions', 'Part 2 collaborative pair discussions', 'Examiner rubric deconstruction'],
      },
    ],
    methodology:
      'Engaging interactive drills, authentic past KET and current A2 Key practice papers, and supportive mentor guidance.',
    mode: 'Both Online & Offline Available',
    duration: '6 to 10 Weeks (Editable field: Recommended for ages 9 to 13 years)',
    batchTimings: 'After-school weekday batches and Saturday/Sunday weekend batches',
    benefits: [
      'Clarifies the exact equivalence between legacy KET and modern A2 Key credentials',
      'Prepares students for Cambridge registration in Bangalore',
      'Encouraging environment that eliminates test anxiety for children',
    ],
    trainerInfo:
      'Coached by Cambridge Young Learners specialist educators.',
    faqs: [
      {
        question: 'Is KET for Schools still accepted by schools and institutions?',
        answer: 'Yes! KET is the traditional name for what Cambridge now terms A2 Key for Schools. Past certificates remain permanently valid, and current preparation directly leads to the A2 Key for Schools qualification.',
      },
    ],
    testimonials: [
      {
        name: 'Meera Nambiar (Parent)',
        location: 'Bangalore, India',
        comment: 'We were searching for KET classes and Cambridge Academy guided us clearly on the updated A2 Key format. My son scored Pass with Merit!',
        rating: 5,
      },
    ],
    metaTitle: 'KET for Schools Coaching in Bangalore | Cambridge A2 Key Prep',
    metaDescription:
      'Looking for KET for Schools in Bangalore? Cambridge Academy of English prepares young learners for the updated Cambridge A2 Key for Schools qualification.',
    keywords: ['ket for schools bangalore', 'ket english coaching', 'cambridge ket classes bangalore', 'a2 key for schools preparation'],
  },
};

