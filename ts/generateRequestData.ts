import { BlackCrowRequestBody, PageId } from './types';
import { getCart } from './store';

export default (
  siteName: string,
  pageId: PageId,
  visitorId: string,
): BlackCrowRequestBody => ({
  site_name: siteName,
  subscription: false,
  cart: getCart(),
  page_id: pageId,
  visitor_id: visitorId,
});
