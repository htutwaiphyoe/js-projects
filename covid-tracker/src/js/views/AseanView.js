import {DOMs} from './Base';

export const renderAsean = (data) => {
 
    // console.log(data);
    let aseanCountries = [];
    data.forEach(curr => {
        aseanCountries.push([curr.query,curr.result.confirmed.value,curr.result.recovered.value,curr.result.deaths.value]);
    })

    

    aseanCountries.sort((a,b) => {
        if(a[1] > b[1]){
            return -1;
        }
        if(a[1] < b[1]){
            return 1;
        }
    });
   
    // console.log(aseanCountries);
   
    aseanCountries.forEach((curr,index) => getMarkUp(curr,index));


}
const getMarkUp = (curr,index) => {
    let markup;
    if(curr[0] === 'Burma'){
        curr[0] = "Myanmar";
    }
    if(index % 2 === 0){
         markup = `

        <tr class="table-back-light">
        <td>${index + 1}</td>
        <td>${curr[0]}</td>
        <td>${curr[1].toLocaleString('en-US')}</td>
        <td>${curr[2].toLocaleString('en-US')}</td>
        <td>${curr[3].toLocaleString('en-US')}</td>
       
    </tr>`
    }
    else{
         markup = ` <tr>
         <td>${index + 1}</td>
         <td>${curr[0].toLocaleString('en-US')}</td>
         <td>${curr[1].toLocaleString('en-US')}</td>
         <td>${curr[2].toLocaleString('en-US')}</td>
         <td>${curr[3].toLocaleString('en-US')}</td>
        
    </tr> `;

    }
    
    DOMs.aseanTable.insertAdjacentHTML('beforeend',markup);
}
