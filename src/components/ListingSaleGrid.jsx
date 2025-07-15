import React from "react";
import ListingSaleCard from "./ListingSaleCard";

const listings = [
  {
    image: "/uploads/sites/7/2019/11/r2-2-768x512.jpg",
    price: "$3,200,000",
    name: "Era square",
    address: "South Figueroa Street",
    area: 1250,
    rooms: 4,
    bathrooms: 3,
    beds: 3,
    featured: true,
  },
  {
    image: "/uploads/sites/7/2019/11/n1-1-768x575.jpg",
    price: "$4,500,000",
    name: "Berlin Complex",
    address: "South Olive Street",
    area: 1170,
    rooms: 3,
    bathrooms: 2,
    beds: 2,
    featured: false,
  },
  {
    image: "/uploads/sites/7/2019/11/n2-2-768x524.jpg",
    price: "$1,800,000",
    name: "Chelsea point",
    address: "Columbia Ave",
    area: 4500,
    rooms: 7,
    bathrooms: 3,
    beds: 12,
    featured: false,
  },
];

const ListingSaleGrid = () => (
  <div className="flex flex-wrap gap-8 justify-center mt-8">
    {listings.map((item, idx) => (
      <ListingSaleCard key={idx} {...item} />
    ))}
  </div>
);

export default ListingSaleGrid; 