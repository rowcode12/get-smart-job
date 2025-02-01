'use client';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { JobCard } from '@/components/Main/JobCard';

interface FeaturedJobProps {
    jobs: any
}

export function FeaturedJob(props: FeaturedJobProps) {
    const { jobs } = props;
  return (
    <section className="relative px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              <Briefcase className="w-8 h-8 text-indigo-400" />
              Latest Jobs
            </h2>
            <p className="text-slate-400">
              Fresh opportunities updated in real-time by our AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job:any, index:any) => (
              <JobCard 
                key={index} 
                job={job}
              />
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/50 hover:text-white transition-all duration-300"
            >
              View All Jobs
            </Button>
          </motion.div>
        </div>
      </section>
  )
}
