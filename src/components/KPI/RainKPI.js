
import { KPI } from './KPI';
import { Rain32 } from '@carbon/icons-react';
class RainKPI extends KPI {



    getIcon() {
        return <Rain32 />
      }


}

export { RainKPI };