'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Clock, ExternalLink, MapPin, TrendingUp } from 'lucide-react';
import { Badge } from '../ui/badge';

export const JobCard = ({ job }:any) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="group flex flex-col items-stretch"
      >
        <Card className="relative bg-slate-900/50 backdrop-blur-sm border-slate-800 overflow-hidden transition-all duration-300 group-hover:border-indigo-500/50 group-hover:shadow-lg group-hover:shadow-indigo-500/20">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-indigo-500/10 to-purple-500/10" />
          
          {/* Animated corner accent */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl transform group-hover:scale-150 transition-transform duration-300" />
          
          <CardHeader className="relative">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
                  {job.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-slate-400 group-hover:text-slate-300">
                  <Building2 className="w-4 h-4" />
                  {job.company}
                </CardDescription>
              </div>
              <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transform group-hover:scale-105 transition-transform">
                {job.type}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="relative space-y-4">
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5 group-hover:text-indigo-300 transition-colors">
                <TrendingUp className="w-4 h-4" />
                {job.salary}
              </span>
              <span className="flex items-center gap-1.5 group-hover:text-indigo-300 transition-colors">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
            </div>
            <span className="flex items-center gap-1.5 group-hover:text-indigo-300 text-slate-400 transition-colors">
                <Clock className="w-4 h-4" />
                {job.posted}
              </span>
            
            {/* Skills section */}
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill:any, index:any) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-md bg-slate-800/50 text-slate-400 border border-slate-700/50 group-hover:border-indigo-500/30 group-hover:text-indigo-300 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
  
            {/* Apply button */}
          </CardContent>
          <CardFooter>
          <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center gap-2 group/button"
            >
              Apply Now
              <ExternalLink className="w-4 h-4 transform group-hover/button:translate-x-1 transition-transform" />
            </motion.button>
          </CardFooter>
        </Card>
      </motion.div>
    );
  };