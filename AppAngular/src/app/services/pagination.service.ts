import { Injectable } from '@angular/core';
import { Pagination } from '../models/pagination.model';

@Injectable({ providedIn: 'root' })
export class PaginationService {
  getPagination(
    totalItems: number,
    currentPage: number = 1,
    pageSize: number = 10,
  ): Pagination {
    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage: number, endPage: number;

    if (totalPages <= 12) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 7) {
        startPage = 1;
        endPage = 12;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 11;
        endPage = totalPages;
      } else {
        startPage = currentPage - 6;
        endPage = currentPage + 5;
      }
    }

    // calculer l'element de debut et du fin
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // création d'un array de pages à afficher
    let pages = Array.from(
      Array(endPage + 1 - startPage),
      (_, i) => startPage + i,
    );

    let retourPagination: Pagination = new Pagination();
    retourPagination.totalItems = totalItems;
    retourPagination.currentPage = currentPage;
    retourPagination.pageSize = pageSize;
    retourPagination.totalPages = totalPages;
    retourPagination.startPage = startPage;
    retourPagination.endPage = endPage;
    retourPagination.startIndex = startIndex;
    retourPagination.endIndex = endIndex;
    retourPagination.pages = pages;

    return retourPagination;
  }
}
