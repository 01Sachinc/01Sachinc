export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/01Sachinc',
  linkedin: 'https://www.linkedin.com/in/csesachin/',
  email: 'cssachin83@gmail.com',
  phone: '+91 8496001030',
  resume: '/Sachin2026.pdf',
};

export const PROJECTS = [
  {
    title: 'AI-Powered Log Anomaly Detection',
    description: 'A high-performance Java inference engine using Z-Score analysis to detect log threats on AWS Cloud.',
    tech: ['Java', 'AWS VPC', 'S3', 'Bash', 'Inference'],
    github: 'https://github.com/01Sachinc/aws-ai-vpc-anomaly-detection',
    image: '/projects/anomaly.jpg'
  },
  {
    title: 'AWS EC2-S3 Backup Automation',
    description: 'Automated backup solution securing EC2 instances by syncing files to S3 with least-privilege IAM roles.',
    tech: ['Shell Scripting', 'AWS CLI', 'IAM', 'S3'],
    github: 'https://github.com/01Sachinc/aws-ec2-s3-backup',
    image: '/projects/backup.jpg'
  },
  {
    title: 'AWS 3-Tier Scalable Architecture',
    description: 'Highly available and scalable 3-tier architecture with Load Balancers, Auto Scaling, and RDS.',
    tech: ['VPC', 'ALB', 'Auto Scaling', 'RDS', 'CloudWatch'],
    github: 'https://github.com/01Sachinc/aws-3-tier-arch',
    image: '/projects/3tier.jpg'
  },
  {
    title: 'DevOps Automation Scripts',
    description: 'Curation of professional scripts for Linux administration, Docker management, and CI/CD pipelines.',
    tech: ['Python', 'Docker', 'Linux', 'Git'],
    github: 'https://github.com/01Sachinc/devops-scripts',
    image: '/projects/scripts.jpg'
  }
];

export const SKILLS = [
  {
    category: 'Java Fullstack',
    items: ['Java/J2EE', 'Spring Boot', 'Microservices', 'Hibernate', 'REST APIs', 'React.js', 'Next.js']
  },
  {
    category: 'AI & Data',
    items: ['Machine Learning Basics', 'Inference Engines', 'Statistical Analysis', 'Z-Score Analysis', 'Python AI Libraries']
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, VPC, RDS)', 'CI/CD Pipelines', 'Docker', 'Kubernetes', 'Git', 'Terraform', 'Linux Bash']
  },
  {
    category: 'Databases',
    items: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
  }
];
