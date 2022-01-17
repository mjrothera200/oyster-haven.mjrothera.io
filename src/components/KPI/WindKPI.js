
import { KPI } from './KPI';

class WindKPI extends KPI {

    updateFieldValue(obj, value, ago) {

        var direction = ' - '
        var gust = '0'
        const headings = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"]

        if (obj['windd']) {
            const windd = obj['windd'].value       
            const index = Math.round(windd/ 22.5,0)+1
            direction = headings[index]
        }
        if (obj['windgust']) {
            gust = obj['windgust'].value
        }


        const newvalue = `${direction} Gusting at ${gust} mph`
        this.setState({
            fieldvalue: value,
            fieldtimestamp: ago,
            fieldextra: newvalue
        });

    }



}

export { WindKPI };