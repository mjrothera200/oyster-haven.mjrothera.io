import { KPI } from './KPI';
import { Chemistry32 } from '@carbon/icons-react';
import { ContinuousColorLegend } from 'react-vis';


class WaterQualityKPI extends KPI {

  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      fieldname: props.fieldname,
      fieldvalue: props.fieldvalue,
      fieldtimestamp: props.fieldtimestamp,
      fieldunits: props.fieldunits,
      fieldextra: props.fieldextra,
      data: props.data,
      error: null,
      starttitle: props.starttitle,
      midtitle: props.midtitle,
      endtitle: props.endtitle,
    };
  }


  getIcon() {
    return <Chemistry32 />
  }

  render() {
    return (
      <div>
        <div className="my-widget-parent">
          <div className="my-widget-top">
            <div className="my-widget-top-left">
              <div className="my-widget-title">
                {this.state.title && <div>{this.state.title}</div>}
              </div>
              <div className="my-widget-value">
                {this.state.fieldvalue && <div>{this.state.fieldvalue}</div>}
                <span className="my-widget-currency">
                  {this.state.fieldunits && <div>{this.state.fieldunits}</div>}
                </span>
              </div>
            </div>
            <div className="my-widget-top-right">
              {this.getIcon()}
            </div>
          </div>
          <div className="my-widget-legend">
            <ContinuousColorLegend
              startTitle={this.state.starttitle}
              midTitle={this.state.midtitle}
              endTitle={this.state.endtitle}
            />
          </div>
          <div className="my-widget-bottom">
            <div className="my-widget-bottom-left">
              {this.state.fieldtimestamp && (
                <div>{this.state.fieldtimestamp}</div>
              )}
            </div>
            <div className="my-widget-bottom-right">
              {this.state.fieldextra && <div>{this.state.fieldextra}</div>}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export { WaterQualityKPI };