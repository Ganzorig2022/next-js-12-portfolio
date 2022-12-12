import { PageInfo, Project, Skill, Social } from '../typings';

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getPageInfo`
  );

  const data = await res.json();

  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
