import {
  Code,
  Palette,
  BarChart,
  MessageSquare,
  Lightbulb,
  Camera,
} from "lucide-react";
import { title } from "process";
import { deserialize } from "v8";

// Example skills data
const skills = [
  {
    id: 1,
    title: "Web Development",
    description: "Expert in React, Next.js, and modern frontend technologies",
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Creating intuitive and engaging user experiences with Figma and Adobe XD",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Data Analytics",
    description:
      "Proficient in data visualization and analytics using modern tools",
    icon: <BarChart className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Content Strategy",
    description:
      "Developing effective content strategies that drive engagement",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Communication",
    description:
      "Strong written and verbal communication skills for diverse audiences",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Photography",
    description:
      "Professional photography and image editing for digital content",
    icon: <Camera className="w-6 h-6" />,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Skills</h2>
        <p className="text-gray-600 mb-2">
          Core competencies and expertise I've developed over the years.
        </p>
        <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Web Development */}
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4"
          >
            <div className="text-blue-500 mt-1">{skill.icon}</div>
            <div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
