import { DOMs } from "./Base";

export const showMyanmar = (data) => {
  const dataMyanmer = data.find((curr) => curr.countryRegion === "Burma");
  DOMs.myanmarCases.textContent = dataMyanmer.confirmed.toLocaleString("en-US");
  DOMs.myanmarRecovered.textContent = dataMyanmer.recovered.toLocaleString(
    "en-US"
  );
  DOMs.myanmarDeaths.textContent = dataMyanmer.deaths.toLocaleString("en-US");
};
const totalOfEachCountry = [];
export const getConfirmed = (data) => {
  // function find_duplicate_in_array(arra1) {
  //   var object = {};
  //   var result = [];

  //   arra1.forEach(function (item) {
  //     if (!object[item]) object[item] = 0;
  //     object[item] += 1;
  //   });

  //   for (var prop in object) {
  //     if (object[prop] >= 2) {
  //       result.push(prop);
  //     }
  //   }

  //   return result;
  // }
  // const countryArr = [];
  // data.forEach((country) => countryArr.push(country.countryRegion));
  // const duplcation = find_duplicate_in_array(data);
  // console.log(countryArr);
  // console.log(find_duplicate_in_array(countryArr));

  // const uniqueArray = Array.from(new Set(countryArr)); // Unique Array ['a', 'b'];
  // console.log(uniqueArray);
  let sortedArr = [];

  let US = [];
  let China = [];
  let UK = [];
  let France = [];
  let Australia = [];
  let Denmark = [];
  let Canada = [];
  let Netherlands = [];
  let Brazil = [];
  let Chile = [];
  let Russia = [];
  let India = [];
  let Peru = [];
  let Pakistan = [];
  let Italy = [];
  let Spain = [];
  let Mexico = [];
  let Germany = [];
  let Colombia = [];
  let Sweden = [];
  let Japan = [];
  let Ukraine = [];
  let Belgium = [];

  let largeStateArr = [];
  let sumArr = [];

  data.forEach((curr) => {
    if (curr.countryRegion === "US") {
      US.push(curr);
    }
    if (curr.countryRegion === "China") {
      China.push(curr);
    }
    if (curr.countryRegion === "Canada") {
      Canada.push(curr);
    }
    if (curr.countryRegion === "Australia") {
      Australia.push(curr);
    }
    if (curr.countryRegion === "United Kingdom") {
      UK.push(curr);
    }
    if (curr.countryRegion === "France") {
      France.push(curr);
    }
    if (curr.countryRegion === "Denmark") {
      Denmark.push(curr);
    }
    if (curr.countryRegion === "Netherlands") {
      Netherlands.push(curr);
    }
    if (curr.countryRegion === "Brazil") {
      Brazil.push(curr);
    }
    if (curr.countryRegion === "Chile") {
      Chile.push(curr);
    }
    if (curr.countryRegion === "Russia") {
      Russia.push(curr);
    }
    if (curr.countryRegion === "India") {
      India.push(curr);
    }
    if (curr.countryRegion === "Peru") {
      Peru.push(curr);
    }
    if (curr.countryRegion === "Pakistan") {
      Pakistan.push(curr);
    }
    if (curr.countryRegion === "Italy") {
      Italy.push(curr);
    }
    if (curr.countryRegion === "Spain") {
      Spain.push(curr);
    }
    if (curr.countryRegion === "Mexico") {
      Mexico.push(curr);
    }
    if (curr.countryRegion === "Germany") {
      Germany.push(curr);
    }
    if (curr.countryRegion === "Colombia") {
      Colombia.push(curr);
    }
    if (curr.countryRegion === "Sweden") {
      Sweden.push(curr);
    }
    if (curr.countryRegion === "Japan") {
      Japan.push(curr);
    }
    if (curr.countryRegion === "Ukraine") {
      Ukraine.push(curr);
    }
    if (curr.countryRegion === "Belgium") {
      Belgium.push(curr);
    }
  });

  const getTotal = (stateArr, state) => {
    let confirmed = 0;
    let active = 0;
    let recovered = 0;
    let deaths = 0;
    stateArr.forEach((curr) => {
      confirmed += curr.confirmed;
    });
    sumArr.push([state, confirmed]);
  };

  getTotal(US, "US");
  getTotal(UK, "United Kingdom");
  getTotal(Australia, "Australia");
  getTotal(Canada, "Canada");
  getTotal(France, "France");
  getTotal(Denmark, "Denmark");
  getTotal(Netherlands, "Netherlands");
  getTotal(China, "China");
  getTotal(Brazil, "Brazil");
  getTotal(Chile, "Chile");
  getTotal(Russia, "Russia");
  getTotal(India, "India");
  getTotal(Peru, "Peru");
  getTotal(Pakistan, "Pakistan");
  getTotal(Italy, "Italy");
  getTotal(Spain, "Spain");
  getTotal(Mexico, "Mexico");
  getTotal(Germany, "Germany");
  getTotal(Colombia, "Colombia");
  getTotal(Sweden, "Sweden");
  getTotal(Japan, "Japan");
  getTotal(Ukraine, "Ukraine");
  getTotal(Belgium, "Belgium");

  // console.log(sumArr);
  data.forEach((curr) => {
    const selectedCountries = [
      "US",
      "China",
      "United Kingdom",
      "Australia",
      "Canada",
      "France",
      "Denmark",
      "Netherlands",
      "Brazil",
      "Chile",
      "Russia",
      "India",
      "Peru",
      "Pakistan",
      "Italy",
      "Spain",
      "Mexico",
      "Germany",
      "Colombia",
      "Sweden",
      "Japan",
      "Ukraine",
      "Belgium",
    ];
    if (selectedCountries.indexOf(curr.countryRegion) === -1) {
      sumArr.push([curr.countryRegion, curr.confirmed]);
    }
  });

  sumArr.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[1] < b[1]) {
      return 1;
    }
  });

  return sumArr;
};

export const getRecovered = (data) => {
  // function find_duplicate_in_array(arra1) {
  //   var object = {};
  //   var result = [];

  //   arra1.forEach(function (item) {
  //     if (!object[item]) object[item] = 0;
  //     object[item] += 1;
  //   });

  //   for (var prop in object) {
  //     if (object[prop] >= 2) {
  //       result.push(prop);
  //     }
  //   }

  //   return result;
  // }
  // const countryArr = [];
  // data.forEach((country) => countryArr.push(country.countryRegion));
  // const duplcation = find_duplicate_in_array(data);
  // console.log(countryArr);
  // console.log(find_duplicate_in_array(countryArr));

  // const uniqueArray = Array.from(new Set(countryArr)); // Unique Array ['a', 'b'];
  // console.log(uniqueArray);
  let China = [];
  let UK = [];
  let France = [];
  let Australia = [];
  let Denmark = [];
  let Netherlands = [];
  let Canada = [];
  let Chile = [];
  let Brazil = [];
  let Russia = [];
  let India = [];
  let Italy = [];
  let Pakistan = [];
  let Germany = [];
  let Mexico = [];
  let Spain = [];
  let Colombia = [];
  let Japan = [];
  let Ukraine = [];
  let Belgium = [];

  let sumArr = [];

  data.forEach((curr) => {
    if (curr.countryRegion === "China") {
      China.push(curr);
    }

    if (curr.countryRegion === "Australia") {
      Australia.push(curr);
    }
    if (curr.countryRegion === "United Kingdom") {
      UK.push(curr);
    }
    if (curr.countryRegion === "France") {
      France.push(curr);
    }
    if (curr.countryRegion === "Denmark") {
      Denmark.push(curr);
    }
    if (curr.countryRegion === "Netherlands") {
      Netherlands.push(curr);
    }
    if (curr.countryRegion === "Canada") {
      Canada.push(curr);
    }
    if (curr.countryRegion === "Chile") {
      Chile.push(curr);
    }
    if (curr.countryRegion === "Brazil") {
      Brazil.push(curr);
    }
    if (curr.countryRegion === "Russia") {
      Russia.push(curr);
    }
    if (curr.countryRegion === "India") {
      India.push(curr);
    }
    if (curr.countryRegion === "Italy") {
      Italy.push(curr);
    }
    if (curr.countryRegion === "Pakistan") {
      Pakistan.push(curr);
    }
    if (curr.countryRegion === "Germany") {
      Germany.push(curr);
    }
    if (curr.countryRegion === "Mexico") {
      Mexico.push(curr);
    }
    if (curr.countryRegion === "Spain") {
      Spain.push(curr);
    }
    if (curr.countryRegion === "Colombia") {
      Colombia.push(curr);
    }
    if (curr.countryRegion === "Japan") {
      Japan.push(curr);
    }
    if (curr.countryRegion === "Ukraine") {
      Ukraine.push(curr);
    }
    if (curr.countryRegion === "Belgium") {
      Belgium.push(curr);
    }
  });

  const getTotal = (stateArr, state) => {
    let recovered = 0;

    stateArr.forEach((curr) => {
      recovered += curr.recovered;
    });
    sumArr.push([state, recovered]);
  };

  getTotal(UK, "United Kingdom");
  getTotal(Australia, "Australia");
  getTotal(France, "France");
  getTotal(Denmark, "Denmark");
  getTotal(Netherlands, "Netherlands");
  getTotal(China, "China");
  getTotal(Canada, "Canada");
  getTotal(Chile, "Chile");
  getTotal(Brazil, "Brazil");
  getTotal(Russia, "Russia");
  getTotal(India, "India");
  getTotal(Italy, "Italy");
  getTotal(Pakistan, "Pakistan");
  getTotal(Germany, "Germany");
  getTotal(Mexico, "Mexico");
  getTotal(Spain, "Spain");
  getTotal(Colombia, "Colombia");
  getTotal(Japan, "Japan");
  getTotal(Ukraine, "Ukraine");
  getTotal(Belgium, "Belgium");

  data.forEach((curr) => {
    const selectedCountries = [
      "China",
      "United Kingdom",
      "Australia",
      "France",
      "Denmark",
      "Netherlands",
      "Canada",
      "Chile",
      "Brazil",
      "Russia",
      "India",
      "Italy",
      "Pakistan",
      "Germany",
      "Mexico",
      "Spain",
      "Colombia",
      "Japan",
      "Ukraine",
      "Belgium",
    ];
    if (selectedCountries.indexOf(curr.countryRegion) === -1) {
      sumArr.push([curr.countryRegion, curr.recovered]);
    }
  });

  //  console.log(sumArr);
  return sumArr;
};

export const getDeaths = (data) => {
  // console.log(data);

  let Brazil = [];
  let Chile = [];
  let Russia = [];
  let India = [];
  let Peru = [];
  let Pakistan = [];
  let Italy = [];
  let Spain = [];
  let Mexico = [];
  let Germany = [];
  let Colombia = [];
  let Sweden = [];
  let Japan = [];
  let Ukraine = [];
  let US = [];
  let China = [];
  let UK = [];
  let France = [];
  let Australia = [];
  let Canada = [];
  let Netherlands = [];

  let sumArr = [];

  data.forEach((curr) => {
    if (curr.countryRegion === "US") {
      US.push(curr);
    }
    if (curr.countryRegion === "China") {
      China.push(curr);
    }
    if (curr.countryRegion === "Canada") {
      Canada.push(curr);
    }
    if (curr.countryRegion === "Australia") {
      Australia.push(curr);
    }
    if (curr.countryRegion === "United Kingdom") {
      UK.push(curr);
    }
    if (curr.countryRegion === "France") {
      France.push(curr);
    }
    if (curr.countryRegion === "Netherlands") {
      Netherlands.push(curr);
    }
    if (curr.countryRegion === "Brazil") {
      Brazil.push(curr);
    }
    if (curr.countryRegion === "Chile") {
      Chile.push(curr);
    }
    if (curr.countryRegion === "Russia") {
      Russia.push(curr);
    }
    if (curr.countryRegion === "India") {
      India.push(curr);
    }
    if (curr.countryRegion === "Peru") {
      Peru.push(curr);
    }
    if (curr.countryRegion === "Pakistan") {
      Pakistan.push(curr);
    }
    if (curr.countryRegion === "Italy") {
      Italy.push(curr);
    }
    if (curr.countryRegion === "Spain") {
      Spain.push(curr);
    }
    if (curr.countryRegion === "Mexico") {
      Mexico.push(curr);
    }
    if (curr.countryRegion === "Germany") {
      Germany.push(curr);
    }
    if (curr.countryRegion === "Colombia") {
      Colombia.push(curr);
    }
    if (curr.countryRegion === "Sweden") {
      Sweden.push(curr);
    }
    if (curr.countryRegion === "Japan") {
      Japan.push(curr);
    }
    if (curr.countryRegion === "Ukraine") {
      Ukraine.push(curr);
    }
  });
  const getTotal = (stateArr, state) => {
    let deaths = 0;

    stateArr.forEach((curr) => {
      deaths += curr.deaths;
    });
    sumArr.push([state, deaths]);
  };

  getTotal(UK, "United Kingdom");
  getTotal(Australia, "Australia");
  getTotal(US, "US");
  getTotal(France, "France");
  getTotal(Canada, "Canada");
  getTotal(Netherlands, "Netherlands");
  getTotal(China, "China");
  getTotal(Brazil, "Brazil");
  getTotal(Chile, "Chile");
  getTotal(Russia, "Russia");
  getTotal(India, "India");
  getTotal(Peru, "Peru");
  getTotal(Pakistan, "Pakistan");
  getTotal(Italy, "Italy");
  getTotal(Spain, "Spain");
  getTotal(Mexico, "Mexico");
  getTotal(Germany, "Germany");
  getTotal(Colombia, "Colombia");
  getTotal(Sweden, "Sweden");
  getTotal(Japan, "Japan");
  getTotal(Ukraine, "Ukraine");

  data.forEach((curr) => {
    const selectedCountries = [
      "China",
      "United Kingdom",
      "Australia",
      "France",
      "Netherlands",
      "US",
      "Canada",
      "Brazil",
      "Chile",
      "Russia",
      "India",
      "Peru",
      "Pakistan",
      "Italy",
      "Spain",
      "Mexico",
      "Germany",
      "Colombia",
      "Sweden",
      "Japan",
      "Ukraine",
    ];
    if (selectedCountries.indexOf(curr.countryRegion) === -1) {
      sumArr.push([curr.countryRegion, curr.deaths]);
    }
  });
  return sumArr;
};
export const clearTable = () => {
  DOMs.totalCaseTable.innerHTML = "";
};
export const renderCountry = (
  confirmed,
  recovered,
  deaths,
  slide = 1,
  prev = 0,
  next = 1
) => {
  let j = [];
  confirmed.forEach((curr, index) => {
    let i = recovered.findIndex((el) => el[0] === curr[0]);

    // curr.push(re)
    if (i !== -1) {
      curr.push(recovered[i][1]);
      // curr[2] = recovered[i][1];
    } else if (i === -1) {
      curr.push("N/A");
    }

    let j = deaths.findIndex((el) => el[0] === curr[0]);
    if (j !== -1) {
      curr.push(deaths[j][1]);
    } else if (j === -1) {
      curr.push("N/A");
    }

    // console.log(curr);
  });

  const countries = confirmed.map((curr, index) => renderMarkUp(curr, index));
  // console.log(countries);
  if (prev >= 0 && next <= 20) {
    countries.slice(prev * 10, next * 10).forEach((cur, index) => {
      DOMs.totalCaseTable.insertAdjacentHTML("beforeend", cur);
    });
  }
};
const renderMarkUp = (country, index) => {
  let markUp;
  if (index % 2 === 1) {
    markUp = `
            <tr>
                <td>${index + 1}</td>
                <td>${country[0]}</td>
                <td>${country[1].toLocaleString("en-US")}</td>
                <td>${country[2].toLocaleString("en-US")}</td>
                <td>${country[3].toLocaleString("en-US")}</td>
            </tr>
            `;
  } else {
    markUp = `
            <tr class="table-back-light">
                <td>${index + 1}</td>
                <td>${country[0]}</td>
                <td>${country[1].toLocaleString("en-US")}</td>
                <td>${country[2].toLocaleString("en-US")}</td>
                <td>${country[3].toLocaleString("en-US")}</td>
            </tr>
            `;
  }

  return markUp;
};
