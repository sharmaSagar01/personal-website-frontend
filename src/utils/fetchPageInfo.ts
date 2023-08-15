export const fetchPageInfo = async () => {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/pageInfo`);

  // const res = await fetch("http://localhost:5000/pageInfo");
  const data = await res.json();
  return data;
};
