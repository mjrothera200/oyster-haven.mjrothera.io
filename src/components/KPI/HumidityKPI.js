
import { KPI } from './KPI';
import { Humidity32 } from '@carbon/icons-react';
class HumidityKPI extends KPI {



    getIcon() {
        return <Humidity32 />
      }


}

export { HumidityKPI };