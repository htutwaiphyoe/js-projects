import {DOMs} from './Base';

export const showCasesTotal = (data) => {
    
    DOMs.casesTotal.textContent = data.toLocaleString('en-US');
}   
export const showRecoveredTotal = (data) => {
    DOMs.recoveredTotal.textContent = data.toLocaleString('en-US');
}   
export const showDeathsTotal = (data) => {
    
    DOMs.deathsTotal.textContent = data.toLocaleString('en-US');
}   
export const showLastUpdate = (data) => {
    
    DOMs.lastUpdate.textContent = "last update: " + data.split('T')[0];
}