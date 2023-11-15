import React from 'react'

export const CoursesItems = ({ title, year, provider }) => {
  return (


                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-black">{title}, Figma, +more.</h3>
                    <time class="block mb-2 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{year}</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">{provider}.</p>
                </div>

  )
}
