import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Heading = () => {
  const navigate=useNavigate();
  return (
    <div className="flex justify-between  ">
      <div>
        <h1 className="text-3xl mr-10 font-mono  ">codeStash</h1>
      </div>
      <div className="mr-10">
      <Button variant="outline" >Save Code</Button>
      <Button variant="outline" className="mr-3">
          MyCodes
        </Button>
        <Button variant="outline" className="mr-3" onClick={()=>navigate("/auth")}>
          Login
        </Button>
        
      </div>
    </div>
  );
};

export default Heading;
