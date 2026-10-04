import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  FileText, 
  CheckCircle, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  Download, 
  Calendar, 
  GraduationCap, 
  Cpu, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { projectsData } from '../data/projectsData';

export const ProjectCatalog = ({ 
  selectedDomain, 
  setSelectedDomain, 
  searchQuery, 
  setSearchQuery, 
  onViewAbstract, 
  onBookProject 
}) => {
  const [selectedDept, setSelectedDept] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const deptFilters = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'cse', label: 'CSE / IT / AI&DS' },
    { id: 'ece', label: 'ECE / VLSI' },
    { id: 'eee', label: 'EEE / EV & Smart Grid' },
    { id: 'mech', label: 'Mech / Robotics' },
    { id: 'mca', label: 'MCA / Cloud & Web3' },
  ];

  // Multi-attribute filtering
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Search Query
      if (searchQuery && searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesQuery = 
          project.title.toLowerCase().includes(q) ||
          project.code.toLowerCase().includes(q) ||
          project.summary.toLowerCase().includes(q) ||
          project.techStack.some(t => t.toLowerCase().includes(q));
        if (!matchesQuery) return false;
      }

      // Department Filter
      if (selectedDept !== 'all') {
        if (selectedDept === 'cse' && !project.department.includes('CSE') && !project.department.includes('AI')) return false;
        if (selectedDept === 'ece' && !project.department.includes('ECE')) return false;
        if (selectedDept === 'eee' && !project.department.includes('EEE')) return false;
        if (selectedDept === 'mech' && !project.department.includes('Mech')) return false;
        if (selectedDept === 'mca' && !project.department.includes('MCA')) return false;
      }

      // Domain Filter
      if (selectedDomain !== 'all' && project.domain !== selectedDomain) {
        return false;
      }

      // Year Filter
      if (selectedYear !== 'all' && project.year !== selectedYear) {
        return false;
      }

      // Level Filter
      if (selectedLevel !== 'all') {
        if (!project.level.includes(selectedLevel)) return false;
      }

      return true;
    });
  }, [searchQuery, selectedDept, selectedDomain, selectedYear, selectedLevel]);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0050CD] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Official IEEE 2025–2026 Repository</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001554] tracking-tight">
            Explore Curated Academic Projects
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Every project includes original IEEE base papers, complete commented source code, pre-trained weights, Anna Univ / VTU format documentation, and 1-on-1 viva coaching.
          </p>
        </div>

        {/* Filter Bar Controls */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-sm mb-10">
          
          {/* Department Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 border-b border-slate-100 scrollbar-none">
            {deptFilters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDept(tab.id)}
                className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all duration-200 ${
                  selectedDept === tab.id
                    ? 'bg-[#001554] text-white shadow-sm'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search & Dropdown Filters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            
            {/* Live Search Input */}
            <div className="sm:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by title, project code (e.g. TF-2026), or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0050CD] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Domain Dropdown */}
            <div className="sm:col-span-3">
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="w-full px-3 py-2.5 text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0050CD]"
              >
                <option value="all">All Domains</option>
                <option value="ai-ml">AI & Machine Learning</option>
                <option value="cloud-devops">Cloud & Cybersecurity</option>
                <option value="iot-embedded">IoT & Embedded Systems</option>
                <option value="blockchain-web3">Blockchain & Web3</option>
                <option value="fullstack-mobile">Full Stack Web & Mobile</option>
                <option value="vlsi-dsp">VLSI & DSP (ECE)</option>
                <option value="power-ev">Power Systems & EV (EEE)</option>
                <option value="robotics-mechatronics">Robotics & Mechatronics</option>
              </select>
            </div>

            {/* Year Dropdown */}
            <div className="sm:col-span-2">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-3 py-2.5 text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0050CD]"
              >
                <option value="all">All Years</option>
                <option value="IEEE 2026">IEEE 2026</option>
                <option value="IEEE 2025">IEEE 2025</option>
              </select>
            </div>

            {/* Degree Level Dropdown */}
            <div className="sm:col-span-2">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2.5 text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0050CD]"
              >
                <option value="all">All Degrees</option>
                <option value="UG">B.E / B.Tech (UG)</option>
                <option value="PG">M.E / M.Tech (PG)</option>
                <option value="MCA">MCA / BCA</option>
              </select>
            </div>

          </div>

          {/* Result Count and Active Filters Feedback */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#001554]">
                Showing {filteredProjects.length} Verified Projects
              </span>
              {(selectedDept !== 'all' || selectedDomain !== 'all' || selectedYear !== 'all' || selectedLevel !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedDept('all');
                    setSelectedDomain('all');
                    setSelectedYear('all');
                    setSelectedLevel('all');
                    setSearchQuery('');
                  }}
                  className="text-xs text-[#0050CD] hover:underline font-semibold ml-2"
                >
                  Reset All Filters
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              <span>All titles available with 100% turnkey code & report</span>
            </div>
          </div>

        </div>

        {/* Projects Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">No Projects Found Matching Your Criteria</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              We have 500+ unlisted IEEE 2025–2026 titles in our offline database. Contact Priyadarshini directly to get custom topic recommendations.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedDept('all');
                  setSelectedDomain('all');
                  setSelectedYear('all');
                  setSelectedLevel('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-bold text-[#0050CD] bg-blue-50 rounded-lg hover:bg-blue-100"
              >
                Clear Search & Filters
              </button>
              <button
                onClick={() => onBookProject({ title: "Custom Topic Request" })}
                className="px-4 py-2 text-xs font-bold text-white bg-[#001554] rounded-lg hover:bg-[#0050CD]"
              >
                Request Custom Title
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  
                  {/* Card Top: Code ID + Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 text-[11px] font-mono font-bold rounded-lg bg-blue-50 text-[#0050CD] border border-blue-200/80">
                      {project.code}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {project.year}
                      </span>
                      {project.badge && (
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                          {project.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Department & Degree Level */}
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 mb-2">
                    <span>{project.department}</span>
                    <span>•</span>
                    <span className="text-[#001554]">{project.level}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-base font-bold text-[#001554] group-hover:text-[#0050CD] transition-colors leading-snug mb-3">
                    {project.title}
                  </h3>

                  {/* Project Summary */}
                  <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-medium text-slate-700 bg-slate-100 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Base Paper Source Info */}
                  <div className="pt-3 border-t border-slate-100 mb-4 text-[11px] text-slate-500 flex items-center gap-1.5 truncate">
                    <FileText className="w-3.5 h-3.5 text-[#0050CD] shrink-0" />
                    <span className="truncate italic">{project.basePaperCitation}</span>
                  </div>

                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onViewAbstract(project)}
                    className="py-2.5 px-3 text-xs font-bold text-[#001554] hover:text-[#0050CD] bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Abstract</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => onBookProject(project)}
                    className="py-2.5 px-3 text-xs font-bold text-white bg-gradient-to-r from-[#001554] to-[#0050CD] hover:to-[#0188FE] rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Book Project</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectCatalog;
