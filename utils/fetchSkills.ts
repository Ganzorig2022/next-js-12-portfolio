import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';
import { Skill } from '../typings';

const query = groq`
*[_type=='skill']
`;

export const fetchSkills = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getSkills`
  // );

  const res = await sanityClient.fetch(query);

  // const data = await res.json();

  // const skills: Skill[] = data.skills;
  const skills: Skill[] = res;

  return skills;
};
