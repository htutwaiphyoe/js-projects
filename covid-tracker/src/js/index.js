import Total from "./models/Total";
import Countries from "./models/Countries";
import Asean from "./models/Asean";
import Search from "./models/Search";

import * as TotalView from "./views/TotalView";
import * as CountriesView from "./views/CountriesView";
import * as AseanView from "./views/AseanView";
import * as SearchView from "./views/SearchView";

import { DOMs } from "./views/Base";
import { load } from "./views/page";

load();
//start
const state = {};
//Global
const controlTotal = async () => {
  state.total = new Total();
  try {
    //get Total
    await state.total.getTotal();

    //show totals

    TotalView.showCasesTotal(state.total.result.data.confirmed.value);
    TotalView.showRecoveredTotal(state.total.result.data.recovered.value);
    TotalView.showDeathsTotal(state.total.result.data.deaths.value);
    TotalView.showLastUpdate(state.total.result.data.lastUpdate);
  } catch (error) {
    console.log(error);
  }
};
controlTotal();

//Countries Total
const controlCountries = async () => {
  state.confirmed = new Countries("confirmed");
  state.recovered = new Countries("recovered");
  state.deaths = new Countries("deaths");
  try {
    await state.confirmed.getCountries();
    await state.recovered.getCountries();
    await state.deaths.getCountries();

    CountriesView.showMyanmar(state.confirmed.result);
    state.confirmedTotal = CountriesView.getConfirmed(state.confirmed.result);
    state.recoveredTotal = CountriesView.getRecovered(state.recovered.result);
    state.deathsTotal = CountriesView.getDeaths(state.deaths.result);
    CountriesView.renderCountry(
      state.confirmedTotal,
      state.recoveredTotal,
      state.deathsTotal
    );
  } catch (error) {
    console.log(error);
  }
};
controlCountries();

const controlSearch = async () => {
  const query = SearchView.getInput();
  if (query) {
    state.search = new Search(query);
    SearchView.clearInput();
    SearchView.clearTableData();

    try {
      await state.search.getSearch();
      SearchView.renderSearchCountry(state.search.result, query);
    } catch (error) {
      SearchView.clearTableData();
      SearchView.renderDefault();
    }
  }
};
DOMs.searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  controlSearch();
});

let prev = DOMs.pagiPrev;
let next = DOMs.pagiNext;
document.querySelector(".pagination").addEventListener("click", (e) => {
  let slide = e.target.dataset.type;
  let count = parseInt(e.target.dataset.count);
  if (slide === "next" && count < 20) {
    prev.dataset.count++;
    next.dataset.count++;
    CountriesView.clearTable();
    CountriesView.renderCountry(
      state.confirmedTotal,
      state.recoveredTotal,
      state.deathsTotal,
      count,
      prev.dataset.count,
      next.dataset.count
    );
  }
  if (slide === "prev" && count > 0) {
    prev.dataset.count--;
    next.dataset.count--;
    CountriesView.clearTable();
    CountriesView.renderCountry(
      state.confirmedTotal,
      state.recoveredTotal,
      state.deathsTotal,
      count,
      prev.dataset.count,
      next.dataset.count
    );
  }
});

const controlAsean = async () => {
  try {
    state.myanmar = new Asean("Burma");
    state.vietnam = new Asean("Vietnam");
    state.thailand = new Asean("Thailand");
    state.brunei = new Asean("Brunei");
    state.cambodia = new Asean("Cambodia");
    state.timor = new Asean("Timor-Leste");
    state.indonesia = new Asean("Indonesia");
    state.laos = new Asean("Laos");
    state.malaysia = new Asean("Malaysia");
    state.philippines = new Asean("Philippines");
    state.singapore = new Asean("Singapore");

    await state.myanmar.getData();
    await state.vietnam.getData();
    await state.thailand.getData();
    await state.brunei.getData();
    await state.cambodia.getData();
    await state.timor.getData();
    await state.indonesia.getData();
    await state.laos.getData();
    await state.malaysia.getData();
    await state.philippines.getData();
    await state.singapore.getData();

    state.asean = [
      state.myanmar,
      state.vietnam,
      state.thailand,
      state.brunei,
      state.cambodia,
      state.timor,
      state.indonesia,
      state.laos,
      state.malaysia,
      state.philippines,
      state.singapore,
    ];
    AseanView.renderAsean(state.asean);
  } catch (error) {
    console.log(error);
  }
};
controlAsean();
