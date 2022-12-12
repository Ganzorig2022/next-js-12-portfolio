//https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Social } from '../../typings';

const query = groq`
    *[_type=='social']
    
`;

type Data = {
  socials: Social[];
};

//http://localhost:3000/api/getSocials dr
// {"socials":[{"_createdAt":"2022-12-09T12:57:40Z",
// "_id":"decfd242-2fba-4eb7-8c34-d9590b2e59ff",
// "_rev":"XGZq7MUHFdqKRzEMZPq6dV",
// "_type":"social",
// "_updatedAt":"2022-12-09T12:57:40Z",
// "title":"Github",
// "url":"https://github.com/Ganzorig2022/"}]}  .......iim response irne.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: Social[] = await sanityClient.fetch(query);
  res.status(200).json({ socials });
}
