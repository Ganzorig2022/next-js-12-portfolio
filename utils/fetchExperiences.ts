import { Experience, PageInfo, Project, Skill, Social } from '../typings';

export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getExperience`
  );

  const data = await res.json();

  const experiences: Experience[] = data.experiences;

  return experiences;
};
