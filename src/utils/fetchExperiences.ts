export const fetchExperiences = async () => {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/experience`);
  const data = await res.json();
  return data;
};
