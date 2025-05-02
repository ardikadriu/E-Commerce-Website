import Title from "../components/Title";
import SwiperForCategories from "../components/SliderForCategories";
const Section3 = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[80%]">
        <Title title="Categories" />
        <SwiperForCategories />
        <div className="bg-gray-300 w-full h-[2px] my-20"></div>
      </div>
    </div>
  );
};

export default Section3;
