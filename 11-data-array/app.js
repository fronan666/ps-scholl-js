
function processDates(dateStrings) {
    const validDates = [];
    dateStrings.forEach((dateString => {
        const date = new Date(dateString)

        if(!isNaN(date.getTime())) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2 , '0');
            const day = String(date.getDate()).padStart(2 , '0');
            
            validDates.push(`${month}-${day}-${year}`); 
        }
    }));
    return validDates;
}



console.log(processDates(['10-02-2022', 'тест','11/12/2023','00/13/2022','41/12/2023']));