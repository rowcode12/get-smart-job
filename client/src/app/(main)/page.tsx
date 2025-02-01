import { MainHero } from '@/components/Main/Hero';
import { FeaturedJob } from '@/components/Main/FeaturedJob';

const JobSearchLanding = () => {
  const sampleJobs = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc",
      type: "Full-time",
      salary: "$120k - $150k",
      location: "Remote",
      posted: "2 days ago",
      skills: ["React", "TypeScript", "Tailwind", "Next.js"]
    },
    {
      title: "AI Engineer",
      company: "Future Systems",
      type: "Contract",
      salary: "$140k - $180k",
      location: "San Francisco, CA",
      posted: "1 day ago",
      skills: ["Python", "PyTorch", "TensorFlow", "MLOps"]
    },
    {
      title: "Product Designer",
      company: "Creative Labs",
      type: "Full-time",
      salary: "$90k - $120k",
      location: "New York, NY",
      posted: "Just now",
      skills: ["Figma", "UI/UX", "Design Systems", "Prototyping"]
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Animated background gradient */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Hero Section */}
      <MainHero />

      {/* Featured Jobs Section */}
      <FeaturedJob jobs={sampleJobs} />
    </div>
  );
};

export default JobSearchLanding;