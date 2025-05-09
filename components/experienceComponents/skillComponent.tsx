export default function SkillComponent(props: {
  title: string;
  skills: { skill: string; icon: any }[];
}) {
  return (
    <div className="flex flex-col h-auto justify-between px-4 lg:mx-8 my-4 text-primarytext rounded-3xl items-center">
      <h1 className="text-2xl p-2 pb-6 text-secondarytext">{props.title}</h1>
      <div>
        <ul className="flex flex-wrap gap-2 justify-center">
          {props.skills.map((key, value) => {
            return (
              <li key={value} className="px-3 flex flex-col justify-center items-center w-auto h-auto">
                <div>
                  <key.icon size={40}></key.icon>
                </div>
                <div>{key.skill}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
