import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Line = () => {
  return (
    <div className='m-7 p-5 rounded-lg bg-white'>
    <ChartComponent
    id="line-chart"
    height="420px"
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{ border: { width: 0 } }}
    tooltip={{ enable: true }}
   
    legendSettings={{ background: 'white' }}
  >
    <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
    <SeriesCollectionDirective>
      {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
    </SeriesCollectionDirective>
  </ChartComponent>
  </div>
  )
}

export default Line