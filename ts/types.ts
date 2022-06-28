export interface CrowItem {
  id: string,
  name: string,
  price: number,
  quantity: number,
  categories: string[],
}

export type PageId = 'home' | 'other';
export interface BlackCrowRequestBody {
  site_name: string,
  page_id: PageId,
  visitor_id: string,
  cart: CrowItem[],
  subscription: boolean,
}

export interface BlackCrowEventResponse {
  message: string,
  request_timestamp: string,
  version: string,
}
