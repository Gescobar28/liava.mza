import React from "react";

export default function Pagination({
  productsPerPage,
  allProducts,
  pagination,
}) {
  const pageNumbers = []; 

  for (let i = 1; i <= Math.ceil(allProducts/productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav
      aria-label="Page navigation example "
      className="d-flex justify-content-center"
    >
      <ul class="pagination">
        {pageNumbers?.map(el => 
          <li class="page-item">
            <a class="page-link" key={el} onClick={() => pagination(el)}>
              {el}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
