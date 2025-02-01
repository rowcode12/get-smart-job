"use client";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

export function MainHero() {
  return (
    <motion.section
      className="relative pt-20 pb-32 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}>
          Find Your Dream Job with AI
        </motion.h1>
        <motion.p
          className="text-xl text-slate-400 mb-12"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}>
          Automatically aggregated job listings from across the web, powered by
          AI
        </motion.p>

        {/* Search Bar */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}>
          <div className="flex gap-4 items-center">
            <div className="relative flex-1 group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-50 group-hover:text-indigo-400 transition-colors" />
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-900/80 backdrop-blur-sm border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500 text-slate-50"
              />
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition-opacity py-6 font-semibold">
              Search Jobs
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
