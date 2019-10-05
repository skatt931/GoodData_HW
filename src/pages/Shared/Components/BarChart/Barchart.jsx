
import React from 'react';
import PropTypes from 'prop-types';
import '@gooddata/react-components/styles/css/main.css';

import { ColumnChart } from '@gooddata/react-components';

const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';
const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';

const BarChart = (props) => {
  const {
    headerText,
    aliasText,
    withSelector,
    monthsArray,
  } = props;

  const [state, setState] = React.useState({
    dateFrom: "2016-01-01",
    dateTo: "2016-01-31",
  });

  function getMonthFilter() {
    return {
      absoluteDateFilter: {
        dataSet: {
          uri: dateAttribute,
        },
        from: state.dateFrom,
        to: state.dateTo,
      },
    };
  }

  function getMeasures() {
    return [
      {
        measure: {
          localIdentifier: "m1",
          definition: {
            measureDefinition: {
              item: {
                uri: grossProfitMeasure,
              },
            },
          },
          alias: aliasText,
        },
      },
    ];
  }

  function getViewBy() {
    return {
      visualizationAttribute: {
        displayForm: {
          uri: dateAttributeInMonths,
        },
        localIdentifier: "a1",
      },
    };
  }

  function renderDropdown() {
    function handleDropDownChange(e) {
      setState({
        ...state,
        dateFrom: `2016-${e.target.value}-01`,
        dateTo: `2016-${e.target.value}-31`,
      });
    }
    return (
      <select defaultValue="1" onChange={handleDropDownChange}>
        {monthsArray.map((value, index) => (
          <option key={index} value={index + 1}>{value}</option>
        ))}
      </select>
    );
  }
  
  const projectId = "xms7ga4tf3g3nzucd8380o2bev8oeknp";
  const filters = [getMonthFilter()];
  const measures = getMeasures();
  const viewBy = getViewBy();


  return (
    <div className="bar-chart">
      {withSelector &&
        <div>
          <header>
            <h1>
              {headerText} {renderDropdown()} 2016
            </h1>
          </header>
          <div>
            <ColumnChart
              measures={measures}
              filters={filters}
              projectId={projectId}
            />
          </div>
        </div>
      }
      {!withSelector && 
        <div>
          <header>
            <h1>{headerText}</h1>
          </header>
          <div>
            <ColumnChart
              measures={measures}
              viewBy={viewBy}
              projectId={projectId}
            />
          </div>
        </div>
      }
    </div>
  );

}

BarChart.propTypes = {
  headerText: PropTypes.string.isRequired,
  aliasText: PropTypes.string.isRequired,
  withSelector: PropTypes.bool,
  monthsArray: PropTypes.arrayOf(PropTypes.string),
}

BarChart.defaultProps = {
	withSelector: false,
	monthsArray: [],
};

export default BarChart;