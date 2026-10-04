import React from 'react';
import { Star, Quote, Award, CheckCircle, GraduationCap } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0050CD] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Student Hall of Fame</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001554] tracking-tight">
            Trusted by 15,000+ Engineers Across Premier Colleges
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Read what graduating students from Anna University, SRM, VIT, PSG Tech, and VTU have to say about their project delivery experience with Priyadarshini and Technofinity.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {review.badge}
                  </span>
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{review.review}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold text-[#001554]">
                  {review.name}
                </p>
                <p className="text-[11px] font-medium text-slate-500">
                  {review.department} ({review.batch})
                </p>
                <p className="text-[11px] font-semibold text-[#0050CD] mt-0.5 truncate">
                  {review.college}
                </p>
                <p className="text-[10px] text-slate-400 mt-1 truncate">
                  Project: {review.projectTitle}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
