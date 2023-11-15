import React from 'react'

// const coursesData = [
//     { title: 'Complete Web & Mobile Designe in 2023: UI/UX, Figma, +more.', year: 2023, provider: 'Udemy' },
//     { title: 'Curso de Venta B2B - Ventas de Negocio a Negocio.', year: 2023, provider: 'Udemy' },
//     { title: 'Diseño UX: experiencia de usuario UX/UI + Figma 2023.', year: 2023, provider: 'Udemy' },
//     { title: 'React: De cero a experto ( Hooks y MERN ).', year: 2023, provider: 'Udemy' },
//     { title: 'React Native - Crea aplicaciones para Android y iOS con React.', year: 2023, provider: 'Udemy' },
//     { title: 'React Native: Aplicaciones nativas para iOS y Android.', year: 2023, provider: 'Udemy' },
//     { title: 'SCRUM 2023: Gestión Ágil de Proyectos con SCRUM desde cero.', year: 2023, provider: 'Udemy' },
//     { title: 'Desarrollo Web Completo con HTML5, CSS3. JS, AJAX, PHP y MySQL.', year: 2023, provider: 'Udemy' },
//     { title: 'Curso Introducción al Ethical Hacking.', year: 2018, provider: 'ISEIT' },
//     { title: 'Redacción en la Web 2.0', year: 2016, provider: 'CONATEL' },
//     { title: 'GNU/Linux Avanzado', year: 2016, provider: 'CONATEL' },
//     { title: 'GNU/Linux Intermedio', year: 2015, provider: 'CNTI' },
//     { title: 'GNU/Linux Basico', year: 2015, provider: 'CNTI' },
// ];

export const Courses = () => {
  return (

    <div id='courses' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <div className='mx-5 mb-12 m-2'>
          <h1 className='text-4xl font-bold text-center text-[#001b5e] underline underline-offset-4'>Courses</h1>
        </div>
        <ol class="py-8 items-center sm:flex">
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-[#9D4FEA] sm:ring-8 dark:ring-[#9D4FEA] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 0L5.81 3.573v3.574l6.189-3.574l6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.509 3.055-2.948 3.055c-1.428 0-2.947-.991-2.947-3.027v-7.878z"/></svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-black">Complete Web & Mobile Designe in 2023: UI/UX, Figma, +more.</h3>
                    <time class="block mb-2 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Udemy.</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-[#9D4FEA] sm:ring-8 dark:ring-[#9D4FEA] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 0L5.81 3.573v3.574l6.189-3.574l6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.509 3.055-2.948 3.055c-1.428 0-2.947-.991-2.947-3.027v-7.878z"/></svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-black">Curso de Venta B2B - Ventas de Negocio a Negocio.</h3>
                    <time class="block mb-2 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Udemy.</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-[#9D4FEA] sm:ring-8 dark:ring-[#9D4FEA] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 0L5.81 3.573v3.574l6.189-3.574l6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.509 3.055-2.948 3.055c-1.428 0-2.947-.991-2.947-3.027v-7.878z"/></svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-black">Diseño UX: experiencia de usuario UX/UI + Figma 2023.</h3>
                    <time class="block mb-2 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Udemy.</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-[#9D4FEA] sm:ring-8 dark:ring-[#9D4FEA] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 0L5.81 3.573v3.574l6.189-3.574l6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.509 3.055-2.948 3.055c-1.428 0-2.947-.991-2.947-3.027v-7.878z"/></svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-black">React: De cero a experto ( Hooks y MERN ).</h3>
                    <time class="block mb-2 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Udemy.</p>
                </div>
            </li>
        </ol>

        <ol class="py-1 items-center sm:flex">
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-[#9D4FEA] sm:ring-8 dark:ring-[#9D4FEA] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 0L5.81 3.573v3.574l6.189-3.574l6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.509 3.055-2.948 3.055c-1.428 0-2.947-.991-2.947-3.027v-7.878z"/></svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-black">React Native - Crea aplicaciones para Android y iOS con React.</h3>
                    <time class="block mb-2 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Udemy.</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-[#9D4FEA] sm:ring-8 dark:ring-[#9D4FEA] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 0L5.81 3.573v3.574l6.189-3.574l6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.509 3.055-2.948 3.055c-1.428 0-2.947-.991-2.947-3.027v-7.878z"/></svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-black">React Native: Aplicaciones nativas para iOS y Android.</h3>
                    <time class="block mb-2 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Udemy.</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-[#9D4FEA] sm:ring-8 dark:ring-[#9D4FEA] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 0L5.81 3.573v3.574l6.189-3.574l6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.509 3.055-2.948 3.055c-1.428 0-2.947-.991-2.947-3.027v-7.878z"/></svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-black">SCRUM 2023: Gestión Ágil de Proyectos con SCRUM desde cero.</h3>
                    <time class="block mb-2 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Udemy.</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-[#9D4FEA] sm:ring-8 dark:ring-[#9D4FEA] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 0L5.81 3.573v3.574l6.189-3.574l6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.509 3.055-2.948 3.055c-1.428 0-2.947-.991-2.947-3.027v-7.878z"/></svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-base font-semibold text-gray-900 dark:text-black">Desarrollo Web Completo con HTML5, CSS3. JS, AJAX, PHP y MySQL.</h3>
                    <time class="block mb-2 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Udemy.</p>
                </div>
            </li>
            
        </ol>

        <ol class="py-10 items-center sm:flex">
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-[#001b5e] sm:ring-8 dark:ring-[#820000] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path fill="#ffe62e" d="M32 2C18.9 2 7.8 10.4 3.7 22h56.6C56.2 10.4 45.1 2 32 2z"/><path fill="#ed4c5c" d="M32 62c13.1 0 24.2-8.3 28.3-20H3.7C7.8 53.7 18.9 62 32 62z"/><path fill="#2a5f9e" d="M3.7 22C2.6 25.1 2 28.5 2 32s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10H3.7z"/><path fill="#fff" d="m34.6 27.1l1 1.1l-.2-1.5l1.3-.6l-1.4-.3l-.2-1.4l-.7 1.3l-1.5-.3l1 1.1l-.7 1.3zm-5.4.1l1.3.6l-.7-1.3l1-1.1l-1.5.3l-.7-1.3l-.2 1.5l-1.5.2l1.4.7l-.1 1.4zm-5 1.8l1.5.2l-1.2-1l.5-1.3l-1.3.7l-1.2-1l.5 1.5l-1.3.7l1.5.1l.4 1.5zm-4 3.5l1.5-.4l-1.5-.5v-1.5l-.9 1.2l-1.5-.5l.9 1.2l-.8 1.1l1.4-.4l1 1.2zM17.9 37l1.2-.9l-1.6.1l-.5-1.4l-.4 1.4H15l1.3.8l-.4 1.4l1.2-.9l1.4.8zm28.2-.2l-.5 1.4l1.3-.9l1.2.9l-.4-1.4L49 36h-1.6l-.4-1.3l-.5 1.3h-1.6zm-2.5-4.5l.1 1.4l.9-1.1l1.4.3l-.9-1.1l.9-1.2l-1.4.5l-1-1.1v1.4l-1.4.5zm-4-3.4l.6 1.4l.4-1.5l1.5-.1l-1.3-.7l.4-1.5l-1.2 1l-1.3-.7l.6 1.3l-1.2 1z"/></svg>                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-black">Curso Introducción al Ethical Hacking.</h3>
                    <time class="block mb-2 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">ISEIT.</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-[#001b5e] sm:ring-8 dark:ring-[#820000] shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path fill="#ffe62e" d="M32 2C18.9 2 7.8 10.4 3.7 22h56.6C56.2 10.4 45.1 2 32 2z"/><path fill="#ed4c5c" d="M32 62c13.1 0 24.2-8.3 28.3-20H3.7C7.8 53.7 18.9 62 32 62z"/><path fill="#2a5f9e" d="M3.7 22C2.6 25.1 2 28.5 2 32s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10H3.7z"/><path fill="#fff" d="m34.6 27.1l1 1.1l-.2-1.5l1.3-.6l-1.4-.3l-.2-1.4l-.7 1.3l-1.5-.3l1 1.1l-.7 1.3zm-5.4.1l1.3.6l-.7-1.3l1-1.1l-1.5.3l-.7-1.3l-.2 1.5l-1.5.2l1.4.7l-.1 1.4zm-5 1.8l1.5.2l-1.2-1l.5-1.3l-1.3.7l-1.2-1l.5 1.5l-1.3.7l1.5.1l.4 1.5zm-4 3.5l1.5-.4l-1.5-.5v-1.5l-.9 1.2l-1.5-.5l.9 1.2l-.8 1.1l1.4-.4l1 1.2zM17.9 37l1.2-.9l-1.6.1l-.5-1.4l-.4 1.4H15l1.3.8l-.4 1.4l1.2-.9l1.4.8zm28.2-.2l-.5 1.4l1.3-.9l1.2.9l-.4-1.4L49 36h-1.6l-.4-1.3l-.5 1.3h-1.6zm-2.5-4.5l.1 1.4l.9-1.1l1.4.3l-.9-1.1l.9-1.2l-1.4.5l-1-1.1v1.4l-1.4.5zm-4-3.4l.6 1.4l.4-1.5l1.5-.1l-1.3-.7l.4-1.5l-1.2 1l-1.3-.7l.6 1.3l-1.2 1z"/></svg>                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-black">Redacción en la Web 2.0</h3>
                    <time class="block mb-2 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2016</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">CONATEL.</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-[#001b5e] sm:ring-8 dark:ring-[#820000] shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path fill="#ffe62e" d="M32 2C18.9 2 7.8 10.4 3.7 22h56.6C56.2 10.4 45.1 2 32 2z"/><path fill="#ed4c5c" d="M32 62c13.1 0 24.2-8.3 28.3-20H3.7C7.8 53.7 18.9 62 32 62z"/><path fill="#2a5f9e" d="M3.7 22C2.6 25.1 2 28.5 2 32s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10H3.7z"/><path fill="#fff" d="m34.6 27.1l1 1.1l-.2-1.5l1.3-.6l-1.4-.3l-.2-1.4l-.7 1.3l-1.5-.3l1 1.1l-.7 1.3zm-5.4.1l1.3.6l-.7-1.3l1-1.1l-1.5.3l-.7-1.3l-.2 1.5l-1.5.2l1.4.7l-.1 1.4zm-5 1.8l1.5.2l-1.2-1l.5-1.3l-1.3.7l-1.2-1l.5 1.5l-1.3.7l1.5.1l.4 1.5zm-4 3.5l1.5-.4l-1.5-.5v-1.5l-.9 1.2l-1.5-.5l.9 1.2l-.8 1.1l1.4-.4l1 1.2zM17.9 37l1.2-.9l-1.6.1l-.5-1.4l-.4 1.4H15l1.3.8l-.4 1.4l1.2-.9l1.4.8zm28.2-.2l-.5 1.4l1.3-.9l1.2.9l-.4-1.4L49 36h-1.6l-.4-1.3l-.5 1.3h-1.6zm-2.5-4.5l.1 1.4l.9-1.1l1.4.3l-.9-1.1l.9-1.2l-1.4.5l-1-1.1v1.4l-1.4.5zm-4-3.4l.6 1.4l.4-1.5l1.5-.1l-1.3-.7l.4-1.5l-1.2 1l-1.3-.7l.6 1.3l-1.2 1z"/></svg>                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-black">GNU/Linux Avanzado</h3>
                    <time class="block mb-2 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2016</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">CONATEL.</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-[#001b5e] sm:ring-8 dark:ring-[#820000] shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path fill="#ffe62e" d="M32 2C18.9 2 7.8 10.4 3.7 22h56.6C56.2 10.4 45.1 2 32 2z"/><path fill="#ed4c5c" d="M32 62c13.1 0 24.2-8.3 28.3-20H3.7C7.8 53.7 18.9 62 32 62z"/><path fill="#2a5f9e" d="M3.7 22C2.6 25.1 2 28.5 2 32s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10H3.7z"/><path fill="#fff" d="m34.6 27.1l1 1.1l-.2-1.5l1.3-.6l-1.4-.3l-.2-1.4l-.7 1.3l-1.5-.3l1 1.1l-.7 1.3zm-5.4.1l1.3.6l-.7-1.3l1-1.1l-1.5.3l-.7-1.3l-.2 1.5l-1.5.2l1.4.7l-.1 1.4zm-5 1.8l1.5.2l-1.2-1l.5-1.3l-1.3.7l-1.2-1l.5 1.5l-1.3.7l1.5.1l.4 1.5zm-4 3.5l1.5-.4l-1.5-.5v-1.5l-.9 1.2l-1.5-.5l.9 1.2l-.8 1.1l1.4-.4l1 1.2zM17.9 37l1.2-.9l-1.6.1l-.5-1.4l-.4 1.4H15l1.3.8l-.4 1.4l1.2-.9l1.4.8zm28.2-.2l-.5 1.4l1.3-.9l1.2.9l-.4-1.4L49 36h-1.6l-.4-1.3l-.5 1.3h-1.6zm-2.5-4.5l.1 1.4l.9-1.1l1.4.3l-.9-1.1l.9-1.2l-1.4.5l-1-1.1v1.4l-1.4.5zm-4-3.4l.6 1.4l.4-1.5l1.5-.1l-1.3-.7l.4-1.5l-1.2 1l-1.3-.7l.6 1.3l-1.2 1z"/></svg>                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-base font-semibold text-gray-900 dark:text-black">GNU/Linux Intermedio</h3>
                    <time class="block mb-2 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2015</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">CNTI.</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-[#001b5e] sm:ring-8 dark:ring-[#820000] shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path fill="#ffe62e" d="M32 2C18.9 2 7.8 10.4 3.7 22h56.6C56.2 10.4 45.1 2 32 2z"/><path fill="#ed4c5c" d="M32 62c13.1 0 24.2-8.3 28.3-20H3.7C7.8 53.7 18.9 62 32 62z"/><path fill="#2a5f9e" d="M3.7 22C2.6 25.1 2 28.5 2 32s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10H3.7z"/><path fill="#fff" d="m34.6 27.1l1 1.1l-.2-1.5l1.3-.6l-1.4-.3l-.2-1.4l-.7 1.3l-1.5-.3l1 1.1l-.7 1.3zm-5.4.1l1.3.6l-.7-1.3l1-1.1l-1.5.3l-.7-1.3l-.2 1.5l-1.5.2l1.4.7l-.1 1.4zm-5 1.8l1.5.2l-1.2-1l.5-1.3l-1.3.7l-1.2-1l.5 1.5l-1.3.7l1.5.1l.4 1.5zm-4 3.5l1.5-.4l-1.5-.5v-1.5l-.9 1.2l-1.5-.5l.9 1.2l-.8 1.1l1.4-.4l1 1.2zM17.9 37l1.2-.9l-1.6.1l-.5-1.4l-.4 1.4H15l1.3.8l-.4 1.4l1.2-.9l1.4.8zm28.2-.2l-.5 1.4l1.3-.9l1.2.9l-.4-1.4L49 36h-1.6l-.4-1.3l-.5 1.3h-1.6zm-2.5-4.5l.1 1.4l.9-1.1l1.4.3l-.9-1.1l.9-1.2l-1.4.5l-1-1.1v1.4l-1.4.5zm-4-3.4l.6 1.4l.4-1.5l1.5-.1l-1.3-.7l.4-1.5l-1.2 1l-1.3-.7l.6 1.3l-1.2 1z"/></svg>                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-base font-semibold text-gray-900 dark:text-black">GNU/Linux Basico</h3>
                    <time class="block mb-2 mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2015</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">CNTI.</p>
                </div>
            </li>
            
        </ol>

    </div>
    
        

  )
}
