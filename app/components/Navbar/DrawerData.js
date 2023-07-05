import React from "react";
import Link from "next/link";
import Button from "@/app/utils/Button/Button";
// import ContactUs from "./ContactUs";

const navigations = [
  { name: "Home", href: "/", current: true },
  { name: "Courses", href: "#courses-section", current: false },
  { name: "Mentors", href: "#mentors-section", current: false },
  { name: "Testimonial", href: "#testimonial-section", current: false },
  { name: "Join", href: "#join-section", current: false },
];
const navigation = [
  {
    id:1,
    name:"HOME",
    href: "#Home",
    current: true

  },
  {
    id:2,
    name:"ABOUT",
     href: "#About",
     current: false

  },
  {
    id:3,
    name:"RESUME",
     href: "#Resume",
     current: false

  },
  {
    id:4,
    name:"WORK",
     href: "#Work",
     current: false

  },
  {
    id:5,
    name:"BLOG",
     href: "#Blog",
     current: false

  },
  {
    id:6,
    name:"CONTACT",
     href: "#Contact",
     current: false

  },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DrawerData = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-purple"
                    : "text-black hover:bg-gray-700 hover:text-purple",
                  "block  py-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            {/* <ContactUs /> */}
            <div className="mt-4"></div>
            <a
            href="https://www.linkedin.com/in/rafiulaanam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button text="Hire me" />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerData;
