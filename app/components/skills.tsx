export default function Skills() {
  const skills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "GitHub", icon: "📚" },
    { name: "PHP", icon: "🐘" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-[60px]">
        <div className="flex flex-col md:flex-row md:items-start">
          <h2 className="text-4xl font-bold mb-12 md:mb-0 md:w-1/3">
            My Skills
          </h2>
          <div className="md:w-2/3">
            <div className="flex flex-wrap gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-background-light px-4 py-2 rounded-full"
                >
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
