import React, { useState } from "react";
import moment from "moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FaArrowsAltH } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GradedAssignments = ({ gradedAssignments }) => {
  const [showLineGraph, setShowLineGraph] = useState(false);

  const renderGradedAssignments = gradedAssignments.map((assignment, i) => {
    return (
      <div
        className='flex items-center px-4 py-2 border-b-2  border-gray-200 w-full rounded-t-m group'
        key={i}
      >
        <div className='flex flex-col'>
          <div className='cursor-pointer text-blue-400 group-hover:underline group-hover:text-blue-400'>
            {assignment.title}
          </div>
          <div className='text-sm text-gray-700'>{assignment.date}</div>
        </div>
        <div className='ml-auto'>{assignment.grade}%</div>
      </div>
    );
  });

  const renderLineGraph = () => {
    return (
      <Line
        datasetIdKey='id'
        data={{
          labels: gradedAssignments
            .map((assignment) => {
              let stringArray = assignment.date.split(" ");
              return `${stringArray[0].slice(0, 3)} ${
                stringArray[1]
              } ${stringArray[2].slice(2)}`;
            })
            .reverse(),
          datasets: [
            {
              id: 1,
              label: "",
              data: gradedAssignments
                .map((assignment) => {
                  return assignment.grade;
                })
                .reverse(),
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        }}
      />
    );
  };

  return (
    <div className='m-2'>
      <div className='flex items-center border-b-2 border-gray-400'>
        <h5 className='text-xl font-semibold text-gray-700'>
          Graded Assignments
        </h5>
        <div className='ml-auto rounded-full bg-gray-100 p-1 hover:bg-gray-300 cursor-pointer'>
          <FaArrowsAltH
            className='text-gray-500'
            onClick={() => setShowLineGraph(!showLineGraph)}
          />
        </div>
      </div>
      {showLineGraph ? renderLineGraph() : renderGradedAssignments}
    </div>
  );
};

GradedAssignments.defaultProps = {
  gradedAssignments: [
    {
      title: "RU Lesson 3 VOCABULARY",
      date: moment().subtract(1, "days").format("LL"),
      grade: 95,
    },
    {
      title: "RU Lesson 2 VOCABULARY",
      date: moment().subtract(1, "days").format("LL"),
      grade: 84,
    },
    {
      title: "RU Lesson 1 VOCABULARY",
      date: moment().subtract(4, "days").format("LL"),
      grade: 87,
    },
    {
      title: "KBC Semester 2 Unit 14 Listening Comprehension Test",
      date: moment().subtract(5, "days").format("LL"),
      grade: 42,
    },
    {
      title: "Chinese Basic Course Unit 5 Listening",
      date: moment().subtract(6, "days").format("LL"),
      grade: 67,
    },
    {
      title: "Chinese Basic Course Mid-Unit 9 Listening Test",
      date: moment().subtract(7, "days").format("LL"),
      grade: 81,
    },
    {
      title: "JN Semster 1 Final FLO Test",
      date: moment().subtract(8, "days").format("LL"),
      grade: 85,
    },
  ],
};

export default GradedAssignments;
