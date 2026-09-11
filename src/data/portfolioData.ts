export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'GenAI' | 'ML/IoT' | 'DeepLearning';
  date: string;
  summary: string;
  bullets: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  badgeType: 'aws' | 'deeplearning' | 'intel';
  credentialUrl: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  highlights?: string;
}

export interface AwardItem {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export const portfolioData = {
  personal: {
    name: "Aradhya Yadav",
    role: "AI & Machine Learning Engineer",
    tagline: "Specializing in Large Language Models (LLMs), Multi-Agent Systems, RAG Pipelines, and Real-time Anomaly Detection",
    location: "Noida, Uttar Pradesh, India",
    email: "aradhyayadav76@gmail.com",
    phone: "+91 8707479271",
    linkedin: "https://www.linkedin.com/in/aradhya-yadav-40a87b271/",
    github: "https://github.com/Aradhya291",
    resumePdf: "/Aradhya_Yadav_Resume_Genai.pdf",
    bio: "AI/ML Engineer with end-to-end machine learning and deep learning project experience, specializing in Python, TensorFlow, Scikit-learn, and Large Language Models (LLMs). Designed and deployed three production-grade AI systems: an IoT anomaly detection model (94% detection accuracy, <2s latency), a deep ANN for molecular classification (88% validation accuracy, +50% reliability), and a multi-agent LLM policy forecasting pipeline (6 domain-specific agents analyzing 1,600+ speeches with zero data leakage). AWS-certified in ML, GenAI, and Data Analytics.",
  },
  stats: [
    { label: "Anomaly Detection Rate", value: "94%" },
    { label: "System Latency", value: "< 2s" },
    { label: "MoE LLM Agents", value: "6" },
    { label: "ANN Validation Acc.", value: "88%" },
    { label: "Speeches Analyzed", value: "1,600+" },
    { label: "Industry Certifications", value: "5" },
  ],
  projects: [
    {
      id: "macro-policy-moe",
      title: "Multi-Agent Mixture-of-Experts (MoE) Policy Forecasting Engine",
      subtitle: "Federal Reserve speech analysis & real-time rate forecast engine powered by 6 specialized LLM agents",
      category: "GenAI",
      date: "May 2026",
      summary: "Architected a multi-agent AI system utilizing 6 domain-specific LLM agents (Inflation, Jobs, GDP Growth, Financial Markets) powered by LLaMA 3.3 via Groq API and Pydantic to analyze Federal Reserve speeches and predict interest rate decisions (CUT, HOLD, HIKE).",
      bullets: [
        "Architected an AI forecasting system utilizing 6 specialized LLM agents powered by LLaMA 3.3 via Groq API and Pydantic to predict Fed rate decisions.",
        "Built a semantic retrieval pipeline using Sentence Transformers (all-MiniLM-L6-v2) querying evidence across 1,600+ historical Fed speeches with strict zero-lookahead date filtering.",
        "Trained classification models benchmarked against Random Forest and XGBoost with zero lookahead data leakage.",
        "Deployed an interactive Streamlit web dashboard to visualize real-time agent reasoning, consensus breakdown, and meeting forecasts."
      ],
      techStack: ["LLaMA 3.3", "Groq API", "Sentence Transformers", "Pydantic", "Streamlit", "XGBoost", "Python"],
      metrics: [
        { label: "Specialized Agents", value: "6 Domain Agents" },
        { label: "Historical Speeches", value: "1,600+" },
        { label: "Leakage Prevention", value: "Zero Lookahead" },
        { label: "Deployment", value: "Streamlit Cloud" }
      ],
      liveUrl: "https://macro-policy-dashboard-9wr9yt3ei4qndv8kumvxzt.streamlit.app/",
      githubUrl: "https://github.com/Aradhya291",
      featured: true
    },
    {
      id: "iot-anomaly-detection",
      title: "AI-Based Early Anomaly Detection System for Energy & Server Infrastructure",
      subtitle: "Real-time edge IoT sensor pipeline and unsupervised anomaly detection with sub-2s alert latency",
      category: "ML/IoT",
      date: "Feb 2026",
      summary: "Designed and deployed a real-time sensor data pipeline using ACS712, DHT11, and MQ2 sensors for electrical, environmental, and gas monitoring, backed by an unsupervised Isolation Forest model achieving a 94% detection rate of simulated faults.",
      bullets: [
        "Designed and deployed a real-time sensor data pipeline using ACS712, DHT11, and MQ2 sensors, building a custom dataset of 5,000+ data points.",
        "Implemented unsupervised anomaly detection using the Isolation Forest algorithm, achieving a 94% detection rate across power usage and thermal behavior.",
        "Integrated ESP8266 microcontrollers for Wi-Fi telemetry and engineered an automated real-time alert system delivering email notifications via Blynk IoT.",
        "Maintained end-to-end edge-to-cloud alert latency under 2 seconds to safeguard server infrastructure."
      ],
      techStack: ["Isolation Forest", "Python", "ESP8266", "Blynk IoT", "ACS712", "DHT11", "MQ2", "Scikit-Learn"],
      metrics: [
        { label: "Detection Accuracy", value: "94%" },
        { label: "Alert Latency", value: "< 2.0s" },
        { label: "Dataset Collected", value: "5,000+ Points" },
        { label: "Telemetry", value: "ESP8266 WiFi" }
      ],
      githubUrl: "https://github.com/Aradhya291/Early-Anamoly-detection",
      featured: true
    },
    {
      id: "molecular-taste-ann",
      title: "Teaching Taste to AI using Deep Learning",
      subtitle: "Artificial Neural Network for molecular taste profile classification from chemical structures",
      category: "DeepLearning",
      date: "Nov 2025",
      summary: "Developed a deep learning predictive system to classify molecular taste profiles from chemical structures using Artificial Neural Networks (ANN) and RDKit molecular descriptors, reaching 88% validation accuracy.",
      bullets: [
        "Developed a deep learning predictive system to classify molecular taste profiles from chemical structures using Artificial Neural Networks (ANN).",
        "Constructed a structured molecular feature database using RDKit chemical descriptors, transforming raw chemical SMILES into ANN-ready predictive inputs.",
        "Enhanced classification reliability by 50% over 4,000+ molecular structures by redesigning hidden layer architecture and optimizing the feature pipeline.",
        "Trained and evaluated the model, achieving 88% validation accuracy and 93% training accuracy."
      ],
      techStack: ["Artificial Neural Networks (ANN)", "RDKit", "TensorFlow/Keras", "Chemical Informatics", "Feature Engineering", "Python"],
      metrics: [
        { label: "Validation Accuracy", value: "88%" },
        { label: "Training Accuracy", value: "93%" },
        { label: "Molecules Evaluated", value: "4,000+" },
        { label: "Reliability Boost", value: "+50%" }
      ],
      githubUrl: "https://github.com/Aradhya291/Teaching-Taste-to-AI-using-Deep-Learning",
      featured: true
    }
  ] as Project[],
  skills: {
    "Generative AI & LLMs": [
      "Large Language Models (LLMs)",
      "Multi-Agent Systems (MoE)",
      "Retrieval-Augmented Generation (RAG)",
      "Sentence Transformers",
      "Pydantic AI",
      "Groq LLaMA 3.3 Inference",
      "Prompt Engineering",
      "Semantic Search"
    ],
    "Machine Learning & Deep Learning": [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Artificial Neural Networks (ANN)",
      "Isolation Forest",
      "XGBoost",
      "Random Forest",
      "Model Evaluation & Benchmarking"
    ],
    "Data Science & Informatics": [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "RDKit (Cheminformatics)",
      "NLTK (NLP)",
      "OpenCV (Computer Vision)",
      "Feature Engineering"
    ],
    "IoT, Cloud & Tools": [
      "AWS (ML, GenAI, Analytics)",
      "ESP8266 Microcontrollers",
      "Blynk IoT Platform",
      "Streamlit",
      "Hardware Sensors (DHT11, MQ2, ACS712)",
      "Git & GitHub",
      "Antigravity IDE & VS Code",
      "MySQL"
    ]
  },
  certifications: [
    {
      title: "AWS Academy Graduate - Generative AI Foundations",
      issuer: "Amazon Web Services (AWS)",
      date: "Feb 2026",
      badgeType: "aws",
      credentialUrl: "https://www.credly.com/badges/80934309-4290-4cf3-9b21-deb524c9df14/public_url"
    },
    {
      title: "AWS Academy Graduate - Machine Learning",
      issuer: "Amazon Web Services (AWS)",
      date: "Oct 2025",
      badgeType: "aws",
      credentialUrl: "https://www.credly.com/badges/fdf1cdb1-5f7e-456c-9674-e6881bc95063/public_url"
    },
    {
      title: "DeepLearning.AI – Sequence Models",
      issuer: "DeepLearning.AI",
      date: "Oct 2025",
      badgeType: "deeplearning",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/DA4S3KPMB8XM"
    },
    {
      title: "Intel AI Impact Global Festival – Generative AI",
      issuer: "Intel",
      date: "Oct 2024",
      badgeType: "intel",
      credentialUrl: "https://www.linkedin.com/in/aradhya-yadav-40a87b271/details/certifications/"
    },
    {
      title: "AWS Academy Graduate – Data Analytics",
      issuer: "Amazon Web Services (AWS)",
      date: "May 2023",
      badgeType: "aws",
      credentialUrl: "https://www.credly.com/badges/98d41773-ef3b-4fe2-b38d-17fd1edcb50b/public_url"
    }
  ] as Certification[],
  education: [
    {
      degree: "Master of Computer Applications (MCA) in AI & ML",
      institution: "Chandigarh University, Gharuan",
      period: "2024 – 2026",
      score: "7.86",
      scoreLabel: "CGPA",
      highlights: "Specialization in Artificial Intelligence, Deep Learning, and Advanced Neural Architectures."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Galgotias University, Greater Noida",
      period: "2021 – 2024",
      score: "8.62",
      scoreLabel: "CGPA",
      highlights: "Graduated with First Class Distinction. Strong coursework in Data Structures, Algorithms, Mathematics & Object-Oriented Programming."
    },
    {
      degree: "Senior Secondary (Intermediate CBSE)",
      institution: "Kendriya Vidyalaya No. 2, Armapur, Kanpur",
      period: "2019 – 2020",
      score: "71.0%",
      scoreLabel: "Percentage",
      highlights: "Science & Computer Science Stream."
    }
  ] as EducationItem[],
  awards: [
    {
      title: "First Position – UIC Chess Championship",
      organization: "University Institute of Computing",
      date: "Jan 2024",
      description: "Secured 1st place exhibiting high-level strategic reasoning, foresight, and tactical pattern recognition."
    },
    {
      title: "Golden Volunteer Award",
      organization: "Nari Shakti NGO",
      date: "Jul 2022",
      description: "Recognized for exemplary dedication and volunteer service towards community development and empowerment."
    },
    {
      title: "National Chess Competitor (Under-17)",
      organization: "50th KVS National Chess Meet",
      date: "Jun 2019",
      description: "Represented regional zone at the national level championship, competing among the top junior chess talents."
    }
  ] as AwardItem[]
};
