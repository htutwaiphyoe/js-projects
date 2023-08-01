export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "872ee20018msh6ad1366acfe5d8fp1e5bc1jsn6296a987632f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";

  const response = await fetch(url, {
    method: "GET",
    headers,
  });

  const result = await response.json();

  return result;
}
