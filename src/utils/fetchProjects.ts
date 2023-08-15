export const fetchProjects = async () => {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/projects`);
  const data = await res.json();

  return data;
};
