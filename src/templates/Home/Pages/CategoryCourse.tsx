import React, { Fragment, useEffect } from "react";
// import LazyLoad from "react-lazyload";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesEachCateActions } from "../../../redux/actions/coursesActions";

export default function CategoryCourse(props: any) {
  const arrCateCourse = useSelector(
    (state: any) => state.CategoryCoursesReducer.arrCateCourse
  );
  console.log({ arrCateCourse });
  const dispatch = useDispatch();

  useEffect(() => {
    //get detail url
    const { slug } = props.match.params;
    // console.log({id})
    dispatch(getCoursesEachCateActions(slug));
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="text-center flex flex-col items-center">
          <p
            className=" bg-indigo-100 rounded-md py-2 px-3 w-fit text-lg text-gray-500"
            style={{ marginTop: 200, color: "#7C3AED" }}
          >
            {arrCateCourse?.maDanhMuc}
          </p>
        </div>
      </div>
    </Fragment>
  );
}
