import { PageInfo } from '../typings';
import { sanityClient } from '../sanity';
import { groq } from 'next-sanity';

const query = groq`
*[_type=='pageInfo'][0]
`;

export const fetchPageInfo = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getPageInfo`
  // );
  const res = await sanityClient.fetch(query);
  const data = await res.json();

  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
