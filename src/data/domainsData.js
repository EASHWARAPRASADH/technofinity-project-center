export const domainsData = [
  {
    id: "ai-ml",
    name: "Artificial Intelligence & Machine Learning",
    shortName: "AI & ML / GenAI",
    department: "CSE / IT / AI&DS",
    badge: "Trending 2026",
    description: "Cutting-edge deep learning architectures, Vision Transformers, Generative AI models, and Explainable AI applied to healthcare, finance, and autonomous systems.",
    projectCount: "120+ Titles",
    keyTech: ["Python", "PyTorch", "TensorFlow", "YOLOv11", "OpenCV", "HuggingFace", "FastAPI"],
    popularTopics: [
      "Diabetic Retinopathy Detection with Swin-Transformer",
      "Explainable AI for Real-Time Financial Fraud Detection",
      "Multimodal Deepfake Audio-Video Detection",
      "Federated Learning in Edge Healthcare Systems"
    ],
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: "cloud-devops",
    name: "Cloud Computing & Cybersecurity",
    shortName: "Cloud & Cyber Defense",
    department: "CSE / IT / Cyber Security",
    badge: "High Demand",
    description: "Enterprise multi-cloud architectures, Kubernetes orchestration, Zero-Trust network security, and AI-driven intrusion prevention systems.",
    projectCount: "85+ Titles",
    keyTech: ["AWS", "Docker", "Kubernetes", "Snort", "Wireshark", "Kafka", "Python"],
    popularTopics: [
      "Zero-Trust Cloud Access Security with AI Threat Hunting",
      "Dynamic Resource Allocation in Multi-Tenant Kubernetes",
      "Ransomware Detection Using System Call Graph Analysis",
      "Homomorphic Encryption for Secure Cloud Database Queries"
    ],
    color: "from-indigo-600 to-blue-500"
  },
  {
    id: "iot-embedded",
    name: "IoT & Smart Embedded Systems",
    shortName: "IoT & Smart Systems",
    department: "ECE / CSE / EEE",
    badge: "Hardware + Cloud",
    description: "Industrial IoT (IIoT), smart agriculture, wearable bio-telemetry, LoRaWAN smart city grids, and edge AI running on microcontrollers.",
    projectCount: "95+ Titles",
    keyTech: ["ESP32", "Raspberry Pi 5", "Arduino", "LoRaWAN", "MQTT", "Embedded C", "Blynk"],
    popularTopics: [
      "LoRaWAN-Enabled Precision Agriculture with Soil NPK Sensing",
      "Wearable Edge-AI Patient Health Vital Telemetry Device",
      "Smart Electric Grid Fault Isolation and Remote Telemetry",
      "IoT Autonomous Environmental Air Quality Mapping Vehicle"
    ],
    color: "from-cyan-600 to-teal-500"
  },
  {
    id: "blockchain-web3",
    name: "Blockchain & Decentralized Tech",
    shortName: "Blockchain & Web3",
    department: "CSE / IT / MCA",
    badge: "Enterprise",
    description: "Solidity smart contracts, decentralized identity (DID), verifiable credentials, electronic health records (EHR), and transparent supply chain provenance.",
    projectCount: "60+ Titles",
    keyTech: ["Ethereum", "Solidity", "IPFS", "Polygon", "Web3.js", "Truffle", "MetaMask"],
    popularTopics: [
      "Decentralized Electronic Health Record Exchange with Zero-Knowledge Proofs",
      "Transparent Agri-Food Supply Chain Provenance on Polygon",
      "NFT-Based University Degree & Credential Anti-Forgery System",
      "Decentralized Voting System with Sybil Attack Resistance"
    ],
    color: "from-blue-700 to-indigo-600"
  },
  {
    id: "fullstack-mobile",
    name: "Full Stack Web & Mobile Applications",
    shortName: "Web & Mobile App",
    department: "CSE / IT / MCA / BCA",
    badge: "Job Ready",
    description: "Modern enterprise SaaS platforms, cross-platform mobile apps with Flutter & React Native, real-time WebSockets, and scalable microservices.",
    projectCount: "110+ Titles",
    keyTech: ["React 19", "Node.js", "Python Django", "Flutter", "MongoDB", "PostgreSQL", "Next.js"],
    popularTopics: [
      "AI-Powered Career Mentorship & Skill Assessment SaaS",
      "Telemedicine Video Consultation App with E-Prescriptions",
      "Hyperlocal Emergency Disaster Relief Logistics Portal",
      "Crowdsourced Traffic Hazard & Road Incident Reporting System"
    ],
    color: "from-sky-600 to-blue-600"
  },
  {
    id: "vlsi-dsp",
    name: "VLSI Design & Digital Signal Processing",
    shortName: "VLSI & DSP (ECE)",
    department: "ECE / EEE",
    badge: "Core Engineering",
    description: "ASIC & FPGA hardware implementations, low-power arithmetic architectures, high-speed cryptographic cores, and image/speech processing filters.",
    projectCount: "70+ Titles",
    keyTech: ["Verilog HDL", "VHDL", "Xilinx Vivado", "Cadence", "FPGA Artix-7", "MATLAB"],
    popularTopics: [
      "High-Throughput Pipelined AES-256 Hardware Accelerator on FPGA",
      "Low-Power 64-bit Approximate Multiplier for Neural Processing Units",
      "FPGA-Based Real-Time Adaptive Noise Cancellation Filter",
      "Design of High-Speed Vedic Multiplier for Image Convolution"
    ],
    color: "from-blue-800 to-cyan-600"
  },
  {
    id: "power-ev",
    name: "Power Electronics, EV & Smart Grids",
    shortName: "Power Systems & EV (EEE)",
    department: "EEE / ECE",
    badge: "Green Tech",
    description: "Electric vehicle powertrain controllers, bidirectional DC-DC converters, solar photovoltaic MPPT algorithms, and microgrid power quality analysis.",
    projectCount: "75+ Titles",
    keyTech: ["MATLAB / Simulink", "DSP TMS320", "PLECS", "LabVIEW", "Arduino Uno", "MOSFET Inverters"],
    popularTopics: [
      "Bidirectional DC-DC Converter with Regenerative Braking for EV",
      "AI-Optimized Solar PV Maximum Power Point Tracking (MPPT)",
      "Smart Hybrid Grid Connected Inverter with Total Harmonic Reduction",
      "Wireless Dynamic EV Battery Charging System with Misalignment Tolerance"
    ],
    color: "from-teal-600 to-emerald-600"
  },
  {
    id: "robotics-mechatronics",
    name: "Robotics, Automation & Mechatronics",
    shortName: "Robotics & Automation",
    department: "Mech / Mechatronics / ECE",
    badge: "Industrial 4.0",
    description: "Autonomous mobile robots (AMR), Robotic Operating System (ROS), computer vision pick-and-place manipulators, and automated AGV warehouse systems.",
    projectCount: "50+ Titles",
    keyTech: ["ROS 2", "SolidWorks", "Python", "Raspberry Pi", "LiDAR", "Stepper Actuators"],
    popularTopics: [
      "SLAM-Based Autonomous Warehouse Navigation Robot using 2D LiDAR",
      "Computer Vision Guided 4-DOF Robotic Arm for Defect Sorting",
      "Autonomous Solar Panel Cleaning Drone with Obstacle Avoidance",
      "IoT-Driven Predictive Maintenance for Heavy Industrial Machinery"
    ],
    color: "from-blue-900 to-indigo-800"
  }
];
