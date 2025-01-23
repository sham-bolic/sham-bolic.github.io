import WorkComponent from "./workExperienceComponent";

export default function Experience() {
  return (
    <div className="bg-secondarybg rounded-t-half mt-8">
      <h1 className="text-center text-4xl font-semibold pt-8">
        Work Experience
      </h1>
      <div className="flex justify-between p-8">
        <WorkComponent
          employer="Brit & Chips"
          title="Waiter"
          date={{
            start: "Mar 2022",
            end: "Oct 2023",
          }}
        />
        <WorkComponent
          employer="Metro Inc."
          title="Cashier / Bagger"
          date={{
            start: "Mar 2019",
            end: "Mar 2022",
          }}
        />
        <WorkComponent
          employer="Camp Kinneret"
          title="Kitchen Staff"
          date={{
            start: "June 2021",
            end: "Aug 2021  ",
          }}
        />
      </div>
    </div>
  );
}
