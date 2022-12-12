import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';
import { Social } from '../typings';

const query = groq`
    *[_type=='social']
    
`;
export const fetchSocials = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getSocials`
  // );

  const res = await sanityClient.fetch(query);

  const data = await res.json();

  const socials: Social[] = data.socials;

  return socials;
};
