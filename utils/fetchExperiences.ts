import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';
import { Experience } from '../typings';

const query = groq`
*[_type=='experience'] {
  ...,
  technologies[]->
}`;
export const fetchExperiences = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getExperience`
  // );

  const res = await sanityClient.fetch(query);

  // const data = await res.json();

  // const experiences: Experience[] = data.experiences;
  const experiences: Experience[] = res;

  return experiences;
};
