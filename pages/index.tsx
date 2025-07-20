import { useState } from "react";
import Pill from "@/components/common/Pill";


const filters = [
  "Top Villa",
  "Self Checkin",
  "Ocean View",
  "Pet Friendly",
  "Countryside",
];

const Home: React.FC =()=>{
const [activeFilter, setActiveFilter] = useState<string>("");

  return(
    <div className="p-6">
      {/* Headline */}
      <h2 className="text-2xl font-bold mb-">Find your favorite place here! <br />
      <span className="text-lg font-normal">
        The best prices for over 2 million properties worldwide.
      </span>

      </h2>

      {/* Filter section */}
      <div>
        {FileSystemEntry.map((filter)=>(
          <Pill
          key={filter}
          label="filter"
          isActive ={activeFilter === filter}
          onClick={()=>setA} />
        ))}
      </div>
    </div>
  )
}
export default Home;