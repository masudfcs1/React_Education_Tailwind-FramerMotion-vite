import React from "react";
import { categories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";
const Courses = () => {
  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our Top <span className=" text-Teal"> Categories</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          ipsum repellendus suscipit quo laudantium, voluptatem ut. Cum nisi sit
          tenetur, molestiae dolore, tempore fugiat dicta voluptatibus beatae
          modi libero! Nesciunt.
        </p>
      </div>
      <div className=" grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8">
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </div>
      <div className=" text-xl font-bold mt-32"> Most Popular Courses</div>
      <div className=" mt-12 overflow-x-hidden w-full  relative">
        <div className=" flex animate-slide gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] ">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
