export default function WorkComponent(props: {
  employer: string;
  title: string;
  date: {start: string, end: string};
}) {
  return (
    <div className="basis-1/3 text-center">
      <div>
        <h2 className="font-semibold text-2xl">{props.employer}</h2>
        <h4>{props.title}</h4>
      </div>
      <div>
        {props.date.start} to {props.date.end}
      </div>
    </div>
  );
}
