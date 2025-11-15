type Props = {
  title: string;
  items: string[];
};

function SkillGroup({ title, items }: Props) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-slate-200">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillGroup;
