import { BlackCrowEventResponse, BlackCrowRequestBody } from './types';

const baseURL = 'https://api.sandbox.blackcrow.ai';

export default async (
  eventName: 'view' | 'purchase',
  body: BlackCrowRequestBody,
): Promise<any> => fetch(
  `${baseURL}/v1/events/${eventName}`,
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  },
);
