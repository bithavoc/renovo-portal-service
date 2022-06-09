import { SelectQueryBuilder } from "typeorm";
import { Page } from "./page";
import { PageRequest } from "./request";

export async function Paginate<T, TPage extends Page<T>>(
  pageRequest: PageRequest | undefined,
  createQuery: () => SelectQueryBuilder<any>,
  pageCreator: () => TPage,
): Promise<TPage> {
  const query = createQuery();
  const page = pageCreator();
  if (pageRequest) {
    if (pageRequest.index > 0) {
      query.skip(pageRequest.index * pageRequest.itemsPerPage)
    }
    query.take(pageRequest.itemsPerPage)
  }
  const [results, total] = await query.getManyAndCount()
  page.totalItems = total;
  if (pageRequest) {
    page.totalPages = Math.ceil(page.totalItems / pageRequest.itemsPerPage);
  } else {
    page.totalPages = 1;
  }
  page.items = results;
  return page;
}