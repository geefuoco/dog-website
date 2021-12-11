import "./AvailablePuppies.scss";
import Card from "../Card/Card";
import puppy from "../../assets/bulldog_puppy.jpg";
import puppy2 from "../../assets/bulldog_puppy_2.jpg";
import puppy3 from "../../assets/bulldog_puppy_3.jpg";
import puppy4 from "../../assets/bulldog_puppy_4.jpg";
import puppy5 from "../../assets/bulldog_puppy_5.jpg";
import puppy6 from "../../assets/bulldog_puppy_6.jpg";
import puppy7 from "../../assets/bulldog_puppy_7.jpg";
import puppy8 from "../../assets/bulldog_puppy_8.jpg";
import puppy9 from "../../assets/bulldog_puppy_9.jpg";

const AvailablePuppies = () => {
  return (
    <div className="available-container">
      <Card
        alt="bulldog puppy on the grass"
        image={puppy}
        name="Tyson"
        gender="Male"
        text="I like to play in the grass and nibble on shoes"
      />

      <Card
        alt="bulldog puppy biting another bulldog's ear"
        image={puppy2}
        name="Charles"
        gender="Male"
        text="I'm a chill pup who gets along with other dogs"
      />

      <Card
        alt="light brown bulldog"
        image={puppy3}
        name="Matilda"
        gender="Female"
        text="I'm a shy pup but I love to cuddle"
      />

      <Card
        alt="light grey bulldog with blue eyes"
        image={puppy4}
        name="Oscar"
        gender="Male"
        text="While I'm not doing photoshoots, I like to run around and play"
      />

      <Card
        alt="light brown bulldog"
        image={puppy5}
        name="Chansey"
        gender="Female"
        text="I need a lot of attention and playtime"
      />

      <Card
        alt="light brown bulldog"
        image={puppy6}
        name="Cleo"
        gender="Female"
        text="I may be small but I can bark and cry really loud !"
      />

      <Card
        alt="light brown bulldog"
        image={puppy7}
        name="Leo"
        gender="Male"
        text="I'm a very relaxed pup. I love to sleep all day long"
      />

      <Card
        alt="light brown bulldog"
        image={puppy8}
        name="Morty"
        gender="Male"
        text="If it looks like I'm up to something, it's cause I am ! I can be a trouble maker but I'm too cute to stay angry at"
      />

      <Card
        alt="light brown bulldog"
        image={puppy9}
        name="Gino"
        gender="Male"
        text="I love to play, I love to eat, I love to run around and tire myself out."
      />
    </div>
  );
};

export default AvailablePuppies;
