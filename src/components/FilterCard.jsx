/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const fitlerData = [
  {
    fitlerType: "Location",
    array: ["Banglore", "Hyderabad", "Pune", "Mumbai", "Delhi NCR"],
  },
  {
    fitlerType: "Industry",
    array: [
      "Software Engineer",
      "Associate Software Engineer",
      "FullStack Developer",
      "Backend Developer",
      "Frontend Developer",
    ],
  },
  {
    fitlerType: "Salary",
    array: ["1-10", "10-20", "20-35"],
  },
];

const FilterCard = () => {
  // const [selectedValue, setSelectedValue] = useState("");
  const [testValue, setTestValue] = useState(fitlerData.map(() => ""));
  // const [type, setType] = useState("");
  const dispatch = useDispatch();

  const changeHandlerTest = (newValue, index) => {
    const updatedValues = [...testValue];
    updatedValues[index] = newValue;
    setTestValue(updatedValues);
  };
  useEffect(() => {
    dispatch(setSearchedQuery(testValue));
  }, [testValue]);
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />

      {fitlerData.map((data, index) => (
        <RadioGroup
          value={testValue[index]}
          onValueChange={(newValue) => {
            if (testValue === newValue) {
              changeHandlerTest(null, index);
            } else {
              changeHandlerTest(newValue, index);
            }
          }}
          key={data.fitlerType}
        >
          <div>
            <h1 className="font-bold text-lg">{data.fitlerType}</h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div className="flex items-center space-x-2 my-2" key={idx}>
                  <RadioGroupItem value={item} id={itemId} />
                  {data.fitlerType === "Salary" ? (
                    <Label htmlFor={itemId}>{item + " "}lakhs</Label>
                  ) : (
                    <Label htmlFor={itemId}>{item}</Label>
                  )}
                </div>
              );
            })}
          </div>
        </RadioGroup>
      ))}
    </div>
  );
};

export default FilterCard;
