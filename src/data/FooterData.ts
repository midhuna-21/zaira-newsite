interface DataType {
   id: number;
   title: string;
   class_name: string;
   footer_link: {
      link: string;
      title: string;
   }[];
}[];

const footer_data: DataType[] = [
   {
      id: 1,
      title: "Company",
      class_name: "col-lg-2 col-md-5",
      footer_link: [
         { link: "/about", title: "About Us" },
         { link: "/contact", title: "Contact" },
         { link: "/editorial-policy", title: "Editorial Policy" },
         { link: "/correction-policy", title: "Correction Policy" },
      ]
   },
   {
      id: 2,
      title: "Categories",
      class_name: "col-lg-3 col-md-4",
      footer_link: [
         { link: "/business", title: "Business" },
         { link: "/us", title: "US" },
         { link: "/enterprise", title: "Enterprise" },
         { link: "/investing", title: "Investing" },
         { link: "/innovation", title: "Innovation" },
      ]
   },
];

export default footer_data;