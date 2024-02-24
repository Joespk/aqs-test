import Card from "./components/Home/Card";
import Placehoder from "./components/Home/Placehorder";

export default function Home() {
  return (
    <div className="container flex flex-col gap-10 max-w-[1400px] items-center">
      <Placehoder />
      <div className="grid grid-cols-2 gap-10">
        <Card />
        <Card />
      </div>
    </div>
  );
}
