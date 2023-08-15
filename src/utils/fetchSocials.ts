export const fetchSocials = async () => {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/socials`);
  const data = await res.json();
  return data;
};
