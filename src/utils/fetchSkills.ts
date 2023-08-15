export const fetchSkills = async () => {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/skills`);
  const data = await res.json();
  return data;
};
