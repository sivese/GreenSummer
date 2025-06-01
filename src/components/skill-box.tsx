
type Skill = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  level: number; //0 to 100
}

function SkillBox({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <section className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">{title}</h2>
      <div className="space-y-4 flex">
        {skills.map(({ name, icon: Icon, level }) => (
          <div key={name} className="p-3.5">
            <div className="flex items-center justify-between text-sm mb-1 text-gray-700 dark:text-gray-300">
              <div className="items-center gap-2">
                <Icon className="text-xl w-12 h-12" />
                <span>{name}</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillBox;