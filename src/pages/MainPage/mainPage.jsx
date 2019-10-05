// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';

import { BarChart } from '../Shared/Components/BarChart';

import { MAIN_PAGE } from '../../lang/en-EN';

const MainPage = () => {
    return (
        <div className="App">
            <div>
                <BarChart headerText={MAIN_PAGE.FIRST_CHART_TITLE} aliasText={MAIN_PAGE.ALIAS} monthsArray={MAIN_PAGE.MONTHS_NAMES} withSelector />
            </div>
            <div>
                <BarChart headerText={MAIN_PAGE.SECOND_CHART_TITLE} aliasText={MAIN_PAGE.ALIAS} />
            </div>
        </div>
    );
}

export default MainPage;
