import React from "react";

function CourseCard({props}) {
  /**
   * this card will help to use the card as
   * to show the courses available to join
   *
   * Means highlight available courses.
   */

   /**
    * backup card code written here it will be used here 
    * to control in the future..
    */
  return (
    <>
      <div className="max-w-xs m-5">
        <div class="bg-white rounded overflow-hidden shadow-lg">
          <img
            class="w-full h-40"
            src="/images/book-6957870.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-4 py-2">
            <div class="font-bold text-lg mb-1"></div>
            <p class="text-gray-700 text-sm">
              B.Tech is a 4-year engineering degree focusing on core principles
              and practices.
            </p>
          </div>
          <div class="px-4 pt-2 pb-1">
            <span class="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700 mr-1 mb-1">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700 mr-1 mb-1">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700 mr-1 mb-1">
              #winter
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
CourseCard.defaultProps = {
  heading: "B.Tech"
};

export default CourseCard;
