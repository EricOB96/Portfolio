import React, { useState, useEffect } from 'react';
import { Github as GithubIcon, Linkedin as LinkedinIcon, ExternalLink, ChevronDown, Menu, X, Smartphone } from 'lucide-react';


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Augmented Reality Guitar Tutor App",
      description: "Interactive AR-based guitar learning application using Godot game engine with GDScript and C#. Features real-time sound analysis, scale tutorials, and performance feedback for VR headsets.",
      tech: ["Godot", "GDScript", "C#", "AR/VR", "Git", "Design Thinking"],
      github: "https://github.com/EricOB96/FYP_Guitar_Tutor",
      demo: "https://youtube.com/shorts/hV5oY7GmVQ4",
      image: "images/FYP.png"
    },
    {
      title: "Sudoku Solver",
      description: "A desktop Sudoku solver application that uses advanced backtracking algorithms to solve any valid Sudoku puzzle. The application features an intuitive graphical interface where users can input their own puzzles or use built-in examples. It tracks solving time and provides instant solutions, making it perfect for both puzzle enthusiasts and those learning algorithmic problem-solving techniques.",
      tech: ["Python", "Desktop Application Development", "Algorithmic Problem Solving", "GUI Development", "Backtracking Algorithm Implementation"],
      github: "https://github.com/EricOB96/Sudoku_Solver",
      image: "images/Sudoku.png"
    },
    {
      title: "QR Generator & Scanner app",
      description: "application allows users to generate QR codes from text or URLs with real-time generation as they type, customizable sizing options, and download capabilities. It also includes a scanning feature that uses the device camera to detect and decode QR codes automatically.",
      tech: ["HTML", "CSS", "JavaScript", "QRious library", "jsQR library", "MediaDevices API", "Canvas API"],
      github: "https://github.com/EricOB96/QR-Generator",
      demo: "https://ericob96.github.io/QR-Generator/",
      image: "images/QR_Gen.png"
    },
    {
      title: "VR Bird Feeding Simulation",
      description: "This is my Project for Game Engines 2 where I made a Bird feeding simulation in VR. The idea came to me when I was in Smithfield Square and I seen many signs around saying DO NOT FEED BIRDS .",
      tech: ["Godot", "GDScript", "AR/VR", "Git", "Design Thinking"],
      github: "https://github.com/EricOB96/miniature-rotary-phone/tree/CA2/minature-rotary-phone/CA2",
      demo: "https://youtu.be/QdOu5TnKNAw",
      image: "images/BirdFeeding.png"
    },
    {
      title: "Music Vizualizer",
      description: "A dynamic, audio‑reactive visualisation tool built using object‑oriented Java, featuring multiple collaborative scenes that react to live music input",
      tech: ["Java ", "Processing ", "Minim library", "Design techniques", "Collaborative development", "Git"],
      github: "https://github.com/EricOB96/OOPProject",
      demo: "https://youtu.be/QdOu5TnKNAw",
      image: "https://github.com/EricOB96/OOPProject/raw/master/images/Rocket.png"
    }
  ];

  const skills = [
    { category: "Programming", items: ["Python", "Java", "C#", "C++", "JavaScript", "GDScript", "SQL"] },
    { category: "Web Technologies", items: ["React", "HTML/CSS", "Rich Web Apps", "Frontend Development"] },
    { category: "Enterprise & Cloud", items: ["SAP Systems", "Cloud Computing", "Citrix", "Enterprise Architecture"] },
    { category: "Specialized", items: ["AR/VR", "Machine Learning", "AI", "Game Engines", "Fullstack", "Design Thinking"] },
    { category: "Tools & Methods", items: ["Git", "Agile/Scrum", "Database Design", "System Integration", "Figma", "Docker"] },
    { category: "Soft Skills", items: ["Team Leadership", "Problem Solving", "Customer Service", "Communication"] }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${activeSection === item ? 'text-blue-400 border-b-2 border-blue-400' : ''
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="block w-full text-left py-2 capitalize hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto mt-14 md:mt-0">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-600 p-1 ">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <img
                  src={`${process.env.PUBLIC_URL}/images/profile2.jpg`}
                  alt="Eric - profile photo"
                  className="w-full h-full object-cover rounded-full transition-transform hover:scale-110"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Eric O'Brien
          </h1>

          <p className="text-xl md:text-2xl text-white-300 mb-8">
            Computer Science Graduate & Looking for Full-time employment
          </p>

          <p className="text-lg text-white-400 mb-12 max-w-2xl mx-auto">
            Highly motivated Computer Science graduate with hands-on experience in technical support,
            enterprise software development, and team leadership.
            Passionate about creating innovative solutions using modern technologies and Agile methodologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => scrollTo('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="border border-white/30 hover:border-white/60 px-8 py-3 rounded-full transition-all duration-300 hover:bg-white/10"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/EricOB96" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/eric-o-brien1100000/" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <LinkedinIcon size={24} />
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-white-300 leading-relaxed">
                I'm a Computer Science graduate from Technological University Dublin with a 2:1 degree,
                bringing hands-on experience from internships at SAP and Uisce Éireann. My journey combines
                technical expertise with proven leadership skills, having managed teams and delivered
                enterprise-level solutions.
              </p>

              <p className="text-lg text-white-300 leading-relaxed">
                I’m always seeking new and challenging projects to expand my skills. Currently,
                I’m collaborating with an artist on the development of a 3D game using Unreal Engine. Our goal is to release the game across multiple platforms by next year.
              </p>

            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Experience</span>
                    <span>Technical Support Engineer, Desktop Engineer </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Education</span>
                    <span>BSc Computer Science (2:1)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Location</span>
                    <span>Dublin, Ireland</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Coffee Consumed</span>
                    <span>∞</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white-400 mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <a href={project.github} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                      <GithubIcon size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a href={project.demo} className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-center">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-3 rounded-lg text-center hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>

          <p className="text-xl text-gray-300 mb-12">
            Ready to bring innovative solutions to life? I'm actively seeking full-time opportunities
            to apply my technical skills and contribute to impactful projects.
          </p>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mb-6">
            <LinkedinIcon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
            <a href="https://linkedin.com/in/eric-o-brien1100000" className="text-gray-400">linkedin.com/in/eric-o-brien1100000</a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mb-12">
            <GithubIcon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2">GitHub</h3>
            <a href="https://github.com/EricOB96" className="text-gray-400">github.com/EricOB96</a>
          </div>

          <a
            href="/EricOBrien_CV_2025.pdf"
            download
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Download My CV
          </a>
        </div>
      </section>


  {/* Footer */ }
  < footer className = "py-8 px-6 border-t border-white/10" >
    <div className="max-w-6xl mx-auto text-center text-gray-400">
      <p>&copy; 2025 Eric O'Brien. Built with React and deployed on GitHub Pages.</p>
    </div>
      </footer >
    </div >
  );
};

export default Portfolio;