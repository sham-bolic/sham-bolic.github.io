
import HobbyComponent from "./hobbyComponent"
export default function Hobbies() {
  return(
    <div>
      <div className="flex items-center justify-center">
        <HobbyComponent
          src="/images/vball.jpg"
          alt="volleyball"
          title="Volleyball"
          text="This is one of my more recent hobbies that I have been getting really into. From going to open gym many times a week to partaking in multiple intramural teams during the semester, I am always looking to play some volleyball."
        ></HobbyComponent>
        <HobbyComponent
          src="/images/cycling.jpg"
          alt="cycling"
          title="Cycling"
          text="My favorite summertime activity is going for a ride with friends, whether it be a short ride around Circuit Gilles Villeneuve or a longer trip to Niagara Falls. Cycling gives me a sense of a freedom that no other sport does."
        ></HobbyComponent>
        <HobbyComponent
          src="/images/climbing.jpg"
          alt="climbing"
          title="Climbing"
          text="The aspect that draws me to bouldering the the constant battle against myself. The feeling of getting stronger, of getting better control over your body is addicting. It also taught me that technique is just as important if not more important than strength."
        ></HobbyComponent>
      </div>
      <div className="flex justify-center">
        <HobbyComponent
          src="/images/snowboarding.jpg"
          alt="snowboarding"
          title="Snowboarding"
          text="Going fast, quick maneuvers, snowboarding is my favorite winter activity. I love the feeling of adrenaline, the feeling of just reacting to the mountain and the snow. It is a great way to spend time with friends and family."
        ></HobbyComponent>
        <HobbyComponent
          src="/images/travelling.jpg"
          alt="travelling"
          title="Travelling"
          text="Seeing new landscapes, experiences different cultures, and most of all trying new foods. Travelling has really opened my eyes to different lifestyles around the world, making me appreciate more what I have and what I can do."
        ></HobbyComponent>
        <HobbyComponent
          src="/images/gaming.jpg"
          alt="gaming"
          title="Gaming"
          text="This is my way of spending time with friends and my way of relaxing. Most games I play are competitive, and I love the feeling of improving and climbing the ranks."
        ></HobbyComponent>
      </div>
    </div>
  )
}