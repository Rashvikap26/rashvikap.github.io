import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: 'Payment Eligibility Platform',
    description:
      'Built a scalable payment eligibility platform for banking applications to validate transactions, perform limits and entitlement checks, make routing decisions, and support downstream integrations. Designed secure microservices and operational dashboards to help support teams investigate transaction decisions and reduce processing delays.',
    techStack: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'Spring Cloud Gateway',
      'Spring Batch',
      'REST APIs',
      'gRPC',
      'TypeScript',
      'Apache Kafka',
      'IBM MQ',
      'Oracle',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'GitHub Copilot'
    ],
    image: ayla,
  },
  {
    id: 2,
    name: 'Healthcare Claims Adjudication System',
    description:
      'Developed a full-stack claims adjudication and member servicing platform for healthcare workflows, enabling claim intake, validation, pricing, fraud checks, and real-time status tracking. Built secure APIs, dynamic dashboards, and event-driven integrations to support providers, members, and internal operations teams.',
    techStack: [
      'Java 11',
      'Spring Boot',
      'Spring Cloud',
      'Spring Security',
      'REST APIs',
      'TypeScript',
      'Apache Kafka',
      'Redis',
      'SQL',
      'Python',
      'Docker',
      'Kubernetes',
      'ELK Stack',
      'Swagger',
      'OpenAPI',
      'JUnit'
    ],
    image: crefin,
  },
  {
    id: 3,
    name: 'Telecom Usage & Billing Platform',
    description:
      'Worked on a telecom billing and usage platform supporting customer plans, usage ingestion, rating, invoice generation, and billing reconciliation. Helped modernize legacy billing applications into microservices and built APIs and dashboards for customer care, billing operations, and month-end processing support.',
    techStack: [
      'Java 8',
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'REST APIs',
      'GraphQL',
      'JavaScript',
      'Kafka',
      'Hibernate',
      'JPA',
      'Oracle',
      'MongoDB',
      'Docker',
      'Jenkins',
      'GitHub Actions',
      'Splunk',
      'Log4j'
    ],
    image: realEstate,
  },
  {
    id: 4,
    name: 'Enterprise Transaction Processing System',
    description:
      'Contributed to enterprise transaction processing applications using Java, J2EE, Spring, Hibernate, SOAP services, and Oracle. Worked on backend service development, database interactions, asynchronous messaging, deployment support, and SDLC process improvements in a high-volume enterprise environment.',
    techStack: [
      'Java 8',
      'J2EE',
      'Spring IOC',
      'Hibernate',
      'JDBC',
      'SOAP Web Services',
      'Apache Axis',
      'JMS',
      'Oracle',
      'IBM WebSphere',
      'Jenkins',
      'JIRA',
      'Confluence',
      'Bamboo',
      'Log4j',
      'JUnit',
      'Maven'
    ],
    image: travel,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },