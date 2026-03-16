/* ============================================
   PILLARS DATA — Mphasis AI & Applied Tech Lab
   5 research pillars with descriptions, metrics, and project lists
   ============================================ */

window.PILLARS_DATA = {

  'ai': {
    name: 'AI@Ashoka',
    tagline: 'Interdisciplinary AI research across 14 projects and 7 academic departments',
    description: 'AI@Ashoka is the largest pillar of the Mphasis AI & Applied Tech Lab, spanning 14 projects across 7 academic departments. Rather than treating AI as a standalone discipline, it embeds artificial intelligence and machine learning methods into diverse research domains — from cancer diagnostics and drug discovery to environmental monitoring and media analysis.\n\nThe pillar brings together faculty from Computer Science, Biology, Chemistry, Environmental Studies, Physics, Psychology, and the Centre for Writing and Communication (CWC), reflecting Ashoka University\'s commitment to interdisciplinary inquiry. Projects range from fundamental research in computational biology and materials science to applied systems like conversational AI for clinical diagnosis and intelligent writing tutors.\n\nKey highlights include a Nature portfolio publication for cancer hallmark quantification, recognition by the Ministry of Electronics and Information Technology in their India-AI Impact Summit Casebook, and a Schmidt AI for Science Fellowship at Oxford.',
    keyMetrics: [
      { value: '14', label: 'Projects' },
      { value: '7', label: 'Departments' },
      { value: '7+', label: 'Publications' },
      { value: '17', label: 'Faculty' }
    ],
    projects: [
      'cancer-ascend',
      'ns3-inhibitors',
      'ai-antibiotic-discovery',
      'ai-biomarker-discovery',
      'ai-demographic-inference',
      'aim-flow',
      'infant-gaze-analysis',
      'cof-screening',
      'fire-mapping',
      'pollen-project',
      'acoustic-biodiversity',
      'cs-pedagogy',
      'cwc',
      'indiamedialens'
    ],
    themes: [
      'Computational Health & Translational Medicine',
      'Educational Integration & AI Pedagogy',
      'Environmental Monitoring & Climate Science',
      'Biodiversity & Conservation Biology',
      'Digital Humanities & Media Analysis',
      'Materials Science & Chemistry'
    ]
  },

  'bharatsim': {
    name: 'BharatSim',
    tagline: 'India-scale agent-based epidemiological modelling and public health simulation',
    description: 'BharatSim is an open-source, India-scale agent-based modelling framework designed to simulate disease spread and inform public health policy. Originally developed during the COVID-19 pandemic, the platform has evolved into a versatile tool for modelling diverse epidemiological scenarios including avian influenza (H5N1), mpox, HIV/AIDS, and dengue.\n\nThe framework is built to handle India\'s demographic complexity — incorporating census data, geographic heterogeneity, and behavioural patterns at granular levels.\n\nBharatSim\'s H5N1 avian influenza modelling study, published in BMC Public Health, generated coverage in over 20 international media outlets including BBC, CNBC-TV18, NDTV, Nature India, and the Sydney Morning Herald. The team has delivered 10+ invited talks across the year at institutions including Wellcome Trust, WHO-SEARO, IIT Bombay, and NCBS.',
    keyMetrics: [
      { value: '1', label: 'Large-Scale Project' },
      { value: '20+', label: 'Media Outlets' },
      { value: '10+', label: 'Invited Talks' }
    ],
    projects: [
      'bharatsim'
    ],
    themes: [
      'Public Health & Epidemiological Modeling',
      'Computational Health & Translational Medicine'
    ]
  },

  'chart': {
    name: 'CHART',
    tagline: 'Centre for Health Analytics Research and Trends',
    description: 'CHART (Centre for Health Analytics Research and Trends) bridges computational methods with clinical medicine and food systems. Its three projects address critical gaps: conversational AI for clinical diagnosis, multimodal food computing for nutrition research, and molecular profiling of triple-negative breast cancer.\n\nThe pillar has produced 8+ peer-reviewed publications in top venues including NeurIPS, ACM Multimedia, EMNLP, and IJCNLP-AACL. The Multimodal Food Computing project organized the first International Workshop on Multimodal Food Computing (MMFood\'25) at ACM Multimedia in Dublin, expanded the Indian Food Composition Table to over 10,000 recipes, and won the Promising Innovation Award at INFUSE Innovation Summit 2025.\n\nPRISM, the conversational AI system for abdominal pain diagnosis, was accepted at the NeurIPS 2025 GenAI4Health workshop. The TNBC project has profiled 100 patients across 9 molecular markers and curated 4,800 breast cancer cases — among the largest epidemiological breast cancer datasets in India.',
    keyMetrics: [
      { value: '3', label: 'Projects' },
      { value: '8+', label: 'Publications' },
      { value: '10,000+', label: 'Recipes in Database' },
      { value: '100+', label: 'Patients in Clinical Studies' }
    ],
    projects: [
      'folk-computing',
      'multimodal-food-computing',
      'tnbc'
    ],
    themes: [
      'Computational Health & Translational Medicine',
      'Digital Humanities & Media Analysis',
      'Public Health & Epidemiological Modeling'
    ]
  },

  'cyber': {
    name: 'Cybersecurity',
    tagline: 'Post-quantum cryptography research for securing critical internet infrastructure',
    description: 'The Cybersecurity pillar focuses on post-quantum cryptography (PQC) — developing cryptographic protocols that remain secure against quantum computing attacks. As quantum computers advance toward breaking current encryption standards, this research addresses one of the most urgent challenges in computer security.\n\nThe primary focus is on quantum-safe DNS security, which protects the internet\'s addressing system from spoofing and tampering. The team has developed a signatureless approach that eliminates the need for digital signatures in DNS security resolution, dramatically reducing packet sizes and improving performance.\n\nKey achievements include a publication at ACM ASIACCS 2025 (a top security conference), published formal security proofs, a Best Paper Award at SPACE 2023, and novel approaches to network security testing.',
    keyMetrics: [
      { value: '1', label: 'Project' },
      { value: '4', label: 'Publications' },
      { value: '1', label: 'Best Paper Award' }
    ],
    projects: [
      'pqc'
    ],
    themes: [
      'Cybersecurity & Post-Quantum Cryptography'
    ]
  },

  'makerspace': {
    name: 'Makerspace',
    tagline: 'Digital fabrication, scientific instrumentation, and hands-on innovation',
    description: 'The Makerspace is the lab\'s largest pillar by scope, combining digital fabrication facilities with research in scientific instrumentation, physics pedagogy, and cross-disciplinary innovation. It houses advanced equipment including a Trotec Speedy 400 laser cutter, CNC machines, SLS/SLA 3D printers, and DGCA-certified drones.\n\nThe pillar\'s flagship achievement is the Covalent Magnetic Tweezers (CMT) — a complete single-molecule biophysics instrument unique in India. The CMT enables researchers to study protein folding, antibody-antigen interactions, and molecular mechanics at the single-molecule level, with 3 publications in Nature portfolio and major journal venues.\n\nThe Makerspace also runs RedBrick Hacks, Ashoka\'s innovation hackathon. The third edition attracted 430+ applications from 91 universities, with standout winners including Sylithe (carbon credits platform) and ShistoDx (schistosomiasis detection, selected for research collaboration with Stanford). With over 2,000 K-12 students engaged through outreach programs , 5 peer-reviewed publications, and cross-pillar enabling of multiple lab projects, the Makerspace serves as both a research facility and an innovation catalyst.',
    keyMetrics: [
      { value: '4', label: 'Core Projects' },
      { value: '2,000+', label: 'K-12 Students Engaged' },
      { value: '5', label: 'Publications' },
      { value: '430+', label: 'Hackathon Applicants' }
    ],
    projects: [
      'cmt',
      'digital-makerspace',
      'table-top-experiments',
      'pedagogical-experiments'
    ],
    themes: [
      'Digital Fabrication & Innovation',
      'Materials Science & Chemistry',
      'Educational Integration & AI Pedagogy'
    ]
  }

};
