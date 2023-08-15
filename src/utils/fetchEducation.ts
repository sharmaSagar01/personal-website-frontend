export const fetchEducation = async () => {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/education`);
  const data = await res.json();
  return data;
};
