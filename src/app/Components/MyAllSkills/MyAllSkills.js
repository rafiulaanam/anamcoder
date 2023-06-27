import React from 'react';
import Title from '../../utils/Title/Title';
import Image from 'next/image';


const MyAllSkills = () => {

  const data =  [
        {
          name: "ReactJS",
          icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
        },
        {
          name: "ExpressJS",
          icon: "https://img.icons8.com/fluency/48/000000/node-js.png"
        },
        {
          name: "NodeJS",
          icon: "https://img.icons8.com/color/48/000000/nodejs.png"
        },
        {
          name: "Redux",
          icon: "https://img.icons8.com/color/48/000000/redux.png"
        },
        {
          name: "Firebase",
          icon: "https://img.icons8.com/color/48/000000/firebase.png"
        },
        {
          name: "Next Js",
          icon: "https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp"
        },
        {
          name: "MaterialUI",
          icon: "https://img.icons8.com/color/48/000000/material-ui.png"
        },
        // {
        //   name: "ChakraUI",
        //   icon: "https://img.icons8.com/color/48/000000/chakra-ui.png"
        // },
        {
          name: "TailwindCSS",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
        },
        {
          name: "Bootstrap",
          icon: "https://img.icons8.com/color/48/000000/bootstrap.png"
        },
        // {
        //   name: "Sass",
        //   icon: "https://img.icons8.com/color/48/000000/sass.png"
        // },
        {
          name: "HTML5",
          icon: "https://img.icons8.com/color/48/000000/html-5--v1.png"
        },
        {
          name: "CSS3",
          icon: "https://img.icons8.com/color/48/000000/css3.png"
        },
        {
          name: "JavaScript",
          icon: "https://img.icons8.com/color/48/000000/javascript--v1.png"
        },
        // {
        //   name: "Java",
        //   icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
        // },
        // {
        //   name: "Kotlin",
        //   icon: "https://img.icons8.com/color/48/000000/kotlin.png"
        // },
        // {
        //   name: "PHP",
        //   icon: "https://img.icons8.com/offices/48/000000/php-logo.png"
        // },
        // {
        //   name: "Python",
        //   icon: "https://img.icons8.com/color/48/000000/python--v1.png"
        // },
        // {
        //   name: "C++",
        //   icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
        // },
        {
          name: "MongoDB",
          icon: "https://img.icons8.com/color/48/000000/mongodb.png"
        },
        // {
        //   name: "MySQL",
        //   icon: "https://img.icons8.com/color/48/000000/mysql-logo.png"
        // },
        // {
        //   name: "PostgreSQL",
        //   icon: "https://img.icons8.com/color/48/000000/postgreesql.png"
        // },
        // {
        //   name: "AWS",
        //   icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png"
        // },
        {
          name: "Heroku",
          icon: "https://img.icons8.com/color/48/000000/heroku.png"
        },
        {
          name: "Netlify",
          icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
        },
        {
          name: "Daisy UI",
          icon: "https://img.icons8.com/emoji/256/blossom.png"
        },
        // {
        //   name: "jQuery",
        //   icon: "https://img.icons8.com/ios-filled/48/1169ae/jquery.png"
        // },
        {
          name: "Git VCS",
          icon: "https://img.icons8.com/color/48/000000/git.png"
        },
        {
          name: "GitHub",
          icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
        },
        // {
        //   name: "WordPress",
        //   icon: "https://img.icons8.com/color/48/000000/wordpress.png"
        // }
      ]


    return (
        <div className='skills'>
            <Title title="skills" mytitle="my skills" /> 

            <div class="container mx-auto bg-[#1c233585] text-white p-5 rounded-3xl mt-10">
      <div class="row grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5" >

       {
        data.map((item,i)=><div
        key={i}
        class="bar bg-slate-900 rounded-xl pb-5 hover:shadow-xl hover:bg-black">
        <div class="info flex flex-col items-center gap-2 mt-5 ">
          <Image src={item.icon} alt="skill" className='w-14' width={200} height={200} />
          <span className='text-2xl'>{item.name}</span>
        </div>
      </div>)
       }

      </div>
    </div>
        </div>
    );
};

export default MyAllSkills;