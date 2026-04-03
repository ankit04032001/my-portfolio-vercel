export const blogsData = [
  {
    id: 1,
    title: "Optimizing API Response Time: From 1.5s to 250ms",
    description: "Case study of how my team and I reduced API latency by 6x in a production system serving 15K+ daily requests. Covers database query optimization, caching strategies with Redis, and connection pooling best practices.",
    cover_image: "/image/LatencyOptimizationBlog.png",
    published_at: "2026-04-03",
    reading_time_minutes: 15,
    url: "https://dev.to/ankitkumarshaw/from-15s-to-250ms-how-we-6xd-api-latency-with-spring-boot-optimization-27e0"
  },
  {
    id: 2,
    title: "Demystifying Agentic AI: Why I'm Trading Chains for Graphs with LangGraph",
    description: "Exploring the evolution from simple AI prompts to autonomous agents. Learn why LangGraph's stateful graph approach beats linear chains for complex workflows, and how backend engineering principles (state management, conditional routing, retry logic) directly translate to building reliable AI systems.",
    cover_image: "/image/LangGraphBlog.png",
    published_at: "2026-04-03",
    reading_time_minutes: 12,
    url: "https://dev.to/ankitkumarshaw/demystifying-agentic-ai-why-im-trading-chains-for-graphs-with-langgraph-2678"
  },
  {
    id: 3,
    title: "Building a 5000+ Notifications/sec Event Pipeline with Kafka & Distributed Idempotency",
    description: "How we decoupled notification delivery from critical business flows using Apache Kafka, cutting API latency by 70% (2.3s → 700ms) and achieving zero message loss with circuit breakers, DLQ patterns, and a two-barrier idempotency strategy. Deep dive into event-driven architecture at scale.",
    cover_image: "/image/LeaveManagementBlog.png",
    published_at: "2026-04-03",
    reading_time_minutes: 15,
    url: "https://dev.to/ankitkumarshaw/building-a-5000-notificationssec-event-pipeline-with-kafka-distributed-idempotency-1fpp"
  }
];
