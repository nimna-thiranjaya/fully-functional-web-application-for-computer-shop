import React from 'react'

const Paginat = ({ postPerPage, totalPosts, paginate }) => {
   const numberOfPages = []

   for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      numberOfPages.push(i);
   }

   return (
      <div>
         <nav>
            <ul className="pagination">
               {numberOfPages.map((number) => (
                  <li key={number} className="page-item text-color" style={{ paddingLeft: 8 }}>
                     <a onClick={() => paginate(number)} className="page-link">
                        {number}
                     </a>
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   )
}

export default Paginat