import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import styles from "@/styles/parents.module.css";
import React from 'react'

function page() {
  return (
    <>
     <Navbar />
     
       <div className={styles.container}>
         <h1 className={styles.heading}>Parents</h1>
         <div className={styles.contentWrapper}>
           <div className={styles.content}>
             <p className={styles.paragraph}>
               Parents and teachers are the sculptors who have to mould the shape of the students for whom they are
               responsible.
             </p>
     
             <p className={styles.paragraph}>
               If parents and teachers set the right example, the students will automatically blossom into models of
               excellence and bring glory to the nation.
             </p>
     
             <p className={styles.paragraph}>
               The influence of parents on the children's minds is very significant. It is actually the primary and dominant
               influence on the child's personality and behaviour pattern. Parents have the primary responsibility to mould
               the character of the children. Too much freedom should not be given out of excessive affection.
             </p>
     
             <p className={styles.paragraph}>
               Allowing children to go astray at home through misplaced affection is not a good practice.
               The father and the mother must supplement at home the training given by the teacher at school.
             </p>
           </div>

           <div className={styles.imageWrapper}>
             <img
               src="https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
               alt="Parents Image"
               className={styles.parentsImage}
             />
           </div>
         </div>
       </div>
   <Footer/>
    </>
  )
}

export default page
