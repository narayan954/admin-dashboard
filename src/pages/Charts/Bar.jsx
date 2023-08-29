import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-gray-100 dark:bg-slate-800 rounded-3xl">
      <Header category="Bar" title="Olympic Medal Counts - RIO" />
      <div className=" w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? 'rgb(30 41 59)' : 'rgb(243 244 246)'}
          legendSettings={{ background: 'rgb(243 244 246)' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;