import React, { useState } from 'react';
import Select from 'react-select';

import { options } from './constants';

export default function BudboSelect() {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className="mb-2"
        />
    );
}