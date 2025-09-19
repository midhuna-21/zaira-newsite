import category_data from '@/data/CategoryData'
import Image from 'next/image'
import Link from 'next/link'

import shape_1 from "@/assets/img/images/categories_shape01.png"
import shape_2 from "@/assets/img/images/categories_shape02.png"

const Category = () => {
   // Override category names
   const customCategories = ["Business", "Investing", "Innovation", "US", "Enterprise"];

   return (
      <section className="categories-area">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6">
                  <div className="section-title section-title-two text-center mb-30">
                     <h2 className="title">Our Top Categories</h2>
                     <p>Browned butter and brown sugar caramelly goodness, crispy edges thick and soft centers and melty little puddles</p>
                  </div>
               </div>
            </div>
            <div className="categories-item-wrap">
               <div className="row justify-content-center">
                  {category_data
                     .filter((items) => items.page === "home_1")
                     .slice(0, customCategories.length) // ensure only 5 items
                     .map((item, index) => (
                        <div key={item.id} className="col-xl-2 col-lg-3 col-md-4 col-6">
                           <div className="categories-item">
                              <div className="categories-img">
                                 <Link href="/blog">
                                    <Image src={item.thumb} alt={customCategories[index]} />
                                 </Link>
                              </div>
                              <div className="categories-content">
                                 <Link href="/blog">{customCategories[index]}</Link>
                              </div>
                           </div>
                        </div>
                  ))}
               </div>
            </div>
         </div>
         <div className="categories-shape-wrap">
            <Image src={shape_1} alt="" />
            <Image src={shape_2} alt="" />
         </div>
      </section>
   )
}

export default Category
