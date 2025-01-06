import ProjectComponent from "./projectComponent";

export default function Projects() {
  return (
    <div>
      <ProjectComponent
        title="Meal Mates"
        description="Develop a full-stack mobile app - MealMates - that allows users to swipe through food images from restaurants near them and curate a list of interested restaurants as well as match with friends on similar restaurants to try out together. The frontend uses React-Nave and the backend is developed with Django-rest and SQLite3 database."
        image="/images/mealmates.png"
        repo="https://github.com/denis-tsariov/codejam14"
        devpost="https://devpost.com/software/fooder-zx98kt"
      ></ProjectComponent>
    </div>
  );
}
