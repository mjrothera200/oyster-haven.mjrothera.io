import { KPI } from './KPI';
import { Chemistry32 } from '@carbon/icons-react';
class WaterQualityKPI extends KPI {



    getIcon() {
        return <Chemistry32 />
      }


}

export { WaterQualityKPI };