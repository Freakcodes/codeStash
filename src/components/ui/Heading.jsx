import React from "react";
import { Button } from "@/components/ui/button";

const Heading = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-3xl mr-10 font-mono  ">codeStash</h1>
      </div>
      <div className="mr-10">
      <Button variant="outline" className="mr-3">
          MyCodes
        </Button>
        <Button variant="outline" className="mr-3">
          Login
        </Button>
        <Button variant="secondary" className="bg-blue-300">SignUp</Button>
      </div>
    </div>
  );
};

export default Heading;
