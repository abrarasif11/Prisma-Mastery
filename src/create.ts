import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "Updated Title",
  //       content: "This is updated content for the data object.",
  //       author: "Fahim Abrar Asif",
  //     },
  //   });
  //   console.log(result);

  // create many

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Building Scalable Web Apps",
        content:
          "Learn how to design and optimize applications for high traffic.",
        author: "Aminul Bari",
      },
      {
        title: "Introduction to React Query",
        content:
          "React Query simplifies data fetching and caching in React apps.",
        author: "Nashit Rahman",
      },
      {
        title: "Deep Dive into Event Loop",
        content: "The JavaScript event loop manages asynchronous operations.",
        author: "Sajid Mehmood",
      },
      {
        title: "Understanding Web Security",
        content:
          "A quick guide to CSRF, XSS, SQL Injection, and best practices.",
        author: "Hafsa Taznin",
      },
      {
        title: "Learning Prisma ORM",
        content:
          "Prisma helps developers work with databases in a type-safe way.",
        author: "Riyad Chowdhury",
      },
      {
        title: "State Management Strategies",
        content: "Different approaches for managing app state efficiently.",
        author: "Zareen Ahmed",
      },
      {
        title: "Component-Driven Design",
        content: "Reusable components help maintain scalable UI architectures.",
        author: "Sharmin Akter",
      },
      {
        title: "Node Streams Explained",
        content:
          "Streams allow efficient data handling in Node.js applications.",
        author: "Ayaan Rahim",
      },
      {
        title: "Understanding CORS",
        content: "CORS controls how browsers handle cross-origin requests.",
        author: "Ruhan Sadeeq",
      },
      {
        title: "Intro to Web Performance",
        content: "Optimizing load time improves user experience significantly.",
        author: "Faria Khanom",
      },
      {
        title: "Authentication vs Authorization",
        content: "These two security concepts serve very different purposes.",
        author: "Aminah Noor",
      },
      {
        title: "API Rate Limiting Guide",
        content:
          "Rate limiting prevents abuse and protects APIs from overload.",
        author: "Mubin Hasan",
      },
      {
        title: "React Optimization Techniques",
        content:
          "Improve component rendering performance and reduce re-renders.",
        author: "Sanjida Islam",
      },
      {
        title: "WebSockets for Beginners",
        content:
          "Real-time communication is possible using WebSocket protocols.",
        author: "Imtiyaz Karim",
      },
      {
        title: "Mastering Environment Variables",
        content: "Env variables help secure sensitive configuration data.",
        author: "Rayhan Siddiq",
      },
      {
        title: "Guide to Middleware",
        content:
          "Middleware functions help manage requests in backend systems.",
        author: "Atiqur Rahman",
      },
      {
        title: "Handling File Uploads",
        content: "Learn how to securely manage user-uploaded files.",
        author: "Mariya Haque",
      },
      {
        title: "Understanding Load Balancers",
        content: "Load balancers distribute traffic for better performance.",
        author: "Sifat Chowdhury",
      },
      {
        title: "Caching for Speed",
        content: "Caching helps reduce server load and improve response time.",
        author: "Ruma Akter",
      },
      {
        title: "API Versioning Techniques",
        content: "Versioning ensures smooth evolution of API systems.",
        author: "Rahat Shuvo",
      },
      {
        title: "Understanding JSON Web Tokens",
        content: "JWT is used for secure user authentication.",
        author: "Nishat Tamanna",
      },
      {
        title: "Intro to Web Accessibility",
        content: "Accessibility ensures websites are usable for everyone.",
        author: "Farzana Nayeem",
      },
      {
        title: "Docker Compose Basics",
        content: "Docker Compose manages multi-container applications easily.",
        author: "Touhid Hasan",
      },
      {
        title: "Mastering API Endpoints",
        content: "Well-structured endpoints lead to cleaner API architectures.",
        author: "Sakib Alam",
      },
      {
        title: "Understanding Hashing",
        content: "Hashing secures sensitive passwords and data.",
        author: "Nusrath Binte Halim",
      },
      {
        title: "Queue Systems Explained",
        content: "Queues help manage heavy workloads asynchronously.",
        author: "Rizwan Karim",
      },
      {
        title: "Understanding Webhooks",
        content: "Webhooks allow real-time communication between systems.",
        author: "Tamanna Afreen",
      },
      {
        title: "Intro to CI/CD",
        content: "CI/CD pipelines automate testing and deployments.",
        author: "Siam Mahmud",
      },
      {
        title: "Database Indexing Guide",
        content: "Indexes speed up database queries significantly.",
        author: "Tawsif Rahman",
      },
      {
        title: "Microservices Deployment",
        content: "Deploying microservices requires proper orchestration tools.",
        author: "Ariyan Noor",
      },
    ],
  });
  console.log(createMany);
};
main();
