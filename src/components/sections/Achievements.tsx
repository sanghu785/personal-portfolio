import { Award, Star, Trophy, Users, Zap } from "lucide-react";

// Example achievements data
const achievements = [
  {
    id: 1,
    title: "Top Content Creator",
    description:
      "Recognized as a top content creator in the digital marketing space",
    icon: <Star className="text-yellow-500" size={24} />,
  },
  {
    id: 2,
    title: "10k+ Followers",
    description:
      "Built an engaged community of over 10,000 followers across platforms",
    icon: <Users className="text-blue-500" size={24} />,
  },
  {
    id: 3,
    title: "Industry Award",
    description:
      "Won the prestigious Industry Excellence Award for innovative campaigns",
    icon: <Trophy className="text-amber-500" size={24} />,
  },
  {
    id: 4,
    title: "Featured Expert",
    description:
      "Featured as an expert speaker at multiple industry conferences",
    icon: <Award className="text-purple-500" size={24} />,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Achievements</h2>
        <p className="text-gray-600 mb-2">
          Milestones and recognitions I've earned throughout my journey.
        </p>
        <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Top Content Creator */}
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4"
          >
            <div className="text-yellow-400 mt-1">{achievement.icon}</div>
            <div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
