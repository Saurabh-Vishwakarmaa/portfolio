import React from 'react';
import { CodeIcon, ServerIcon, DatabaseIcon, SmartphoneIcon } from 'lucide-react';

const ProjectsShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "Junk-Dealer",
      description: "The best platorm to sell all your scraps with the local scrap-seller hasslefree",
      technologies: ["Html", "Django", "Javascript"],
      icon: <CodeIcon className="text-blue-500" size={40} />
    },
    {
      id: 2,
      title: "ML Violence Detector", 
      description: "Machine learning powered Voilence detection system",
      technologies: ["Python", "TensorFlow", "React", "Opencv"],
      icon: <ServerIcon className="text-green-500" size={40} />
    },
    {
      id: 3,
      title: "Bio4u Website",
      description: "Website for Bio4u,A fully developed website ",
      technologies: ["React", "Tailwind",],
      icon: <DatabaseIcon className="text-purple-500" size={40} />
    },
    {
      id: 4,
      title: "TO DO APP",
      description: "This To-do-app is the app with the easiest ui as a first project with on device storage ",
      technologies: ["Flutter","Rive","Dart"],
      icon: <SmartphoneIcon className="text-purple-500" size={40} />

    },
    {
      id: 5,
      title: "MUSICGRAM APP",
      description: "A music app with the best feature to yet to come , currently in progress",
      technologies: ["Flutter","Rive","Dart"],
      icon: <SmartphoneIcon className="text-purple-500" size={40} />

    }


  ];

  return (
    <div className=" absolute top-[470vh] left-[50px] container mx-auto px-4 py-12">
      <h2 className="text-6xl relative left-[-400px] font-bold text-center mb-12 text-white font-[Anton]">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-200"
          >
            <div className="flex items-center mb-4">
              {project.icon}
              <h3 className="text-xl font-semibold ml-4 text-gray-800">
                {project.title}
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;