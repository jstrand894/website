// Teaching philosophy content. Text fields accept inline HTML.
import carabids from '../assets/teaching/carabids.png';
import pesticides from '../assets/teaching/pesticides.png';
import stacking from '../assets/teaching/stackingtraits.png';

export const heroTitle = 'Students learn best when they show up <em>as themselves</em>.';

// Hero paragraphs: the first sets out the approach, the second says why it is personal to me.
export const intro = [
  'My approach to teaching is grounded in the belief that learning is a collaborative and inclusive process. A productive classroom is one in which all students feel welcome, respected, and empowered to contribute. I aim to create an environment that values curiosity, open dialogue, and intellectual risk taking, while maintaining clear expectations and academic rigor.',
  'It is easy to believe that students have lost interest in real learning, that they are most comfortable living in their electronics and handing their assignments to AI. I do not think that is true. Students engage when an assignment gives them a reason to do it beyond checking a box. The key is giving them a reason to show up as themselves, and I have found that hands-on work and public communication are the best way to do it.',
];

export const principles = [
  { id: 'inclusive', icon: 'fa-solid fa-people-group', title: 'An inclusive learning environment', tagline: 'A space where the real student feels welcome to show up.' },
  { id: 'participation', icon: 'fa-solid fa-comments', title: 'Participation and communication', tagline: 'Moving beyond memorization, and learning to explain what you know.' },
  { id: 'reading', icon: 'fa-solid fa-book-open', title: 'Learning to read science', tagline: 'Dense papers get less scary once you put in the work.' },
  { id: 'ai', icon: 'fa-solid fa-microchip', title: 'Learning in the age of AI', tagline: 'AI cannot replace discussion, debate, and face-to-face communication.' },
];

export const sections = [
  {
    id: 'inclusive',
    title: 'An Inclusive Learning Environment',
    paragraphs: [
      'All students are welcome in my classroom. Students arrive with diverse backgrounds, experiences, and ways of thinking, and these differences strengthen the learning experience for everyone. I strive to create a space where students feel comfortable asking questions, expressing uncertainty, and engaging with challenging material. Respectful discourse and mutual support are foundational to effective learning and scientific inquiry.',
      'I do not believe students are uninterested in learning. When they have a chance to do hands-on work and to share what they have learned in front of other people, the real person comes through. They show what they are curious about, and they express their identities to the class and to me. That is the student I want to teach.',
    ],
  },
  {
    id: 'participation',
    title: 'Active Participation and Engagement',
    paragraphs: [
      'Learning is not limited to mastering course content. It also involves understanding the perspectives of fellow classmates and applying knowledge to real world problems. I encourage active participation through discussion, collaborative activities, and problem solving exercises that require students to engage with both the material and one another. By hearing how peers approach the same question from different backgrounds and experiences, students gain a deeper and more nuanced understanding of the subject.',
      'Active engagement helps students move beyond memorization toward synthesis and application. Through discussion, group work, and presentations, students practice translating theoretical concepts into practical insights, mirroring how scientific and professional challenges are addressed outside the classroom. This approach builds critical thinking skills, strengthens communication, and prepares students to work effectively in interdisciplinary and collaborative environments.',
      'Presenting and communicating information is truly important, even in a world of artificial intelligence. That is why I build presentations into my courses. Making a video to share with classmates pushes students to organize what they know, and it gets them comfortable presenting virtually and to a wider audience.',
    ],
    caseStudy: {
      label: 'Example from my IPM course',
      title: 'From written posts to five-minute presentations',
      course: 'AGSC 401: Integrated Pest Management',
      term: 'Fall 2025 · Montana State University',
      paragraphs: [
        'This upper level course is built around weekly readings and instructor provided discussion prompts. Students work in small, consistent groups of five to six and engage with the material through structured discussion each week. In earlier versions of the course, the weekly discussion leader answered the prompt with a written post, and the rest of the group replied in text threads.',
        'Because I was concerned that students were handing the work to AI, and because the course is asynchronous and online, I changed the format. Now the rotating leader of each group records a five-minute presentation that teaches their group-mates the key ideas of the week and starts the discussion.',
        'What surprised me was the work ethic. Many students put a lot of time and effort into those five minutes. Having to explain the material makes them think through why and what they are learning, and it leads them to ask more questions of the content.',
      ],
      slides: [
        { src: carabids, alt: 'Student slide on carabids feeding on weed seeds and a caterpillar pest', caption: 'Discussion prompt on carabids' },
        { src: pesticides, alt: 'Student slide: Chapter 5 overview of pesticides', caption: 'Chapter 5 overview: pesticides' },
        { src: stacking, alt: 'Student slide: What is trait stacking?', caption: 'What is trait stacking?' },
      ],
    },
  },
  {
    id: 'reading',
    title: 'Learning to Read Science',
    paragraphs: [
      'Learning science means learning to read it, and that is hard for students who have not yet had to stick to a schedule and work through scientific literature. Primary articles are scary at first: a wall of dense, technical text. But if students put in the work and read the whole thing, they can understand it, and they come away with insights they might not have had otherwise.',
      'I think modern courses have to combine traditional academic learning and reading with modern ways of communicating. The reading gives students something worth saying, and the presenting shows them whether they understood it. In my IPM course, for many students this is among the first times they have spent a real amount of time with primary articles, which is exactly why I build the course around them.',
    ],
  },
  {
    id: 'ai',
    title: 'Teaching and Learning in the Age of Artificial Intelligence',
    paragraphs: [
      'What worries me most is not that students struggle. It is that some of them stop engaging with the content at all. They engage with AI instead, asking it to complete assignments for them, and I end up grading a conversation between a student and a chatbot.',
      'As artificial intelligence becomes increasingly integrated into education and research, it is essential to reaffirm the value of human interaction in the learning process. While AI tools can support learning, analysis, and efficiency, they cannot replace the intellectual growth that comes from discussion, debate, and face to face scientific communication. I place particular emphasis on in person interaction, presentations, and the clear communication of ideas, as these skills are critical for scientific collaboration, professional development, and responsible use of emerging technologies.',
    ],
  },
];

export const closing =
  'Ultimately, my goal is to prepare students not only to master course content, but to think critically, communicate effectively, and engage thoughtfully with others in an evolving academic and technological landscape.';
