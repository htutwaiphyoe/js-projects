import {DOMs} from './Base';

export const getInput = () =>{
    return DOMs.searchInput.value;
}
export const clearInput = () => {
    DOMs.searchInput.value = '';
}
export const clearTableData = () => {
    DOMs.searchTable.innerHTML = '';
}

export const renderSearchCountry = (data,query) => {
 
    const markUp = `
        <tr class="table-back-light">
            <td>1</td>
            <td>${query.toUpperCase()}</td>
            <td>${data.confirmed.value.toLocaleString('en-US')}</td>
            <td>${data.recovered.value.toLocaleString('en-US')}</td>
            <td>${data.deaths.value.toLocaleString('en-US')}</td>
            
        </tr>
    `;

    DOMs.searchTable.insertAdjacentHTML('beforeend',markUp);
}
export const renderDefault = () => {
 
    const markUp = `
        <tr class="table-back-light">
        <td>1</td>
        <td>COUNTRY</td>
        <td>&mdash;</td>
        <td>&mdash;</td>
        <td>&mdash;</td>
            
        </tr>
    `;

    DOMs.searchTable.insertAdjacentHTML('beforeend',markUp);
}