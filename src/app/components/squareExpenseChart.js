"use client";
import { React, useState } from "react";
//import styles from "./assets/page.module.css";

/**
 *
 * @returns
 */
export const SquareExpenseChartBlock = ({ chartPressedState }) => {
  /**
   *
   * @param
   * @returns JSX.Element: Block header
   */
  function ChangeHeaderIfPieChart({ isChartPressed }) {
    if (isChartPressed) return <span>By weeks</span>;
    return <span>By category</span>;
  }

  /**
   *
   * @param
   */
  const SquareExpenseChart = () => {
    return (
      <div className="h-full w-full p-5 flex flex-row justify-around items-end">
        /** * * There must be Square chart * * and its data procesed earlier */
      </div>
    );
  };

  /**
   *
   * @param
   */
  const PieChartByCategory = () => {};

  /**
   * ! Demo const that holds Pie chart in svg
   * @returns JSX.Element SVG: Pie Chart
   */
  const DemoPieChartByCategory = () => {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        className="max-h-[100%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1001 501C1001 403.334 972.396 307.806 918.721 226.211L505.177 498.252C505.714 499.068 506 500.024 506 501H1001Z"
          fill="#FFCD56"
          stroke="white"
        />
        <path
          d="M918.72 226.211C874.926 159.637 815.855 104.495 746.428 65.3804C677.002 26.2656 599.233 4.31099 519.601 1.34637L501.186 496.004C501.982 496.033 502.76 496.253 503.454 496.644C504.148 497.035 504.739 497.587 505.177 498.252L918.72 226.211Z"
          fill="#14A233"
          stroke="white"
        />
        <path
          d="M519.601 1.34639C399.246 -3.13433 281.318 35.9784 187.495 111.495L497.865 497.105C498.803 496.35 499.982 495.959 501.186 496.004L519.601 1.34639Z"
          fill="#6320EE"
          stroke="white"
        />
        <path
          d="M187.495 111.495C129.276 158.354 82.3017 217.668 50.0275 285.075C17.7533 352.481 1 426.266 1 501C1 575.735 17.7533 649.519 50.0275 716.925C82.3017 784.332 129.276 843.646 187.495 890.506L497.865 504.895C497.283 504.427 496.813 503.834 496.49 503.159C496.167 502.485 496 501.748 496 501C496 500.253 496.167 499.515 496.49 498.841C496.813 498.167 497.283 497.574 497.865 497.105L187.495 111.495Z"
          fill="#36A2EB"
          stroke="white"
        />
        <path
          d="M187.495 890.506C248.532 939.634 320.261 973.729 396.897 990.043C473.532 1006.36 552.929 1004.43 628.684 984.422L502.277 505.834C501.519 506.034 500.725 506.054 499.959 505.891C499.192 505.727 498.475 505.387 497.865 504.895L187.495 890.506Z"
          fill="#AF0189"
          stroke="white"
        />
        <path
          d="M628.684 984.422C735.397 956.236 829.785 893.533 897.132 806.089C964.479 718.644 1001 611.373 1001 501H506C506 502.104 505.635 503.177 504.961 504.051C504.288 504.925 503.344 505.553 502.277 505.834L628.684 984.422Z"
          fill="#FA1243"
          stroke="white"
        />
      </svg>
    );
  };

  /**
   * ! Demo const that holds Square chart
   * @returns JSX.Element: Square Expenses Chart
   */
  const DemoSquareExpenseChart = () => {
    return (
      <div className="h-full w-full p-5 flex flex-row justify-around items-end">
        <div className="w-1/5 h-[17%] bg-[#6320EE]"></div>
        <div className="w-1/5 h-[89%] bg-[#6320EE]"></div>
        <div className="w-1/5 h-[66%] bg-[#6320EE]"></div>
        <div className="w-1/5 h-[37%] bg-[#6320EE]"></div>
      </div>
    );
  };
  return (
    <>
      <span>Expenses</span>

      <div className="font-normal text-base">
        <ChangeHeaderIfPieChart isChartPressed={chartPressedState} />
      </div>

      {chartPressedState ? (
        <DemoSquareExpenseChart />
      ) : (
        <DemoPieChartByCategory />
      )}
    </>
  );
};