'use client';
import React from 'react';
import Image from 'next/image';
// import Kirui from '../../../public/images/kirui.jpeg'    

type SocialType = 'twitter' | 'instagram' | 'linkedin';

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: {
    twitter: string;
    instagram: string;
    linkedin: string;
  }
};

const SocialIcon = ({ type }: { type: SocialType }) => {
  const commonClasses = "w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300";

  return (
    <a href="#" className={commonClasses}>
      {type === 'twitter' && (
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )}
      {type === 'instagram' && (
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )}
      {type === 'linkedin' && (
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )}
    </a>
  );
};

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Kirui",
      role: "Lead Real Estate Agent & Co-Founder",
      description: "Real estate is not just about property, it's about people — building trust, creating value, and turning dreams into addresses. With over 10 years of experience in the Kenyan property market.",
      image: "https://images.pexels.com/photos/kirui.jpeg",
      socials: {
        twitter: "#",
        instagram: "",
        linkedin: ""
      }
    },
   
  ];

  return (
    <div id="team" className="bg-white text-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">
            Meet Your Real Estate Expert
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           I am dedicated to helping you find the perfect property and achieve your real estate goals."

.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-start gap-6 p-6 rounded-lg bg-gray-100 shadow-md">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-blue-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-blue-500 text-sm mb-3 font-medium">{member.role}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{member.description}</p>
                
                <div className="flex gap-3">
                  <SocialIcon type="twitter" />
                  <SocialIcon type="instagram" />
                  <SocialIcon type="linkedin" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
