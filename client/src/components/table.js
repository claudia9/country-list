import React, { useState, Fragment} from 'react';
import { EuiInMemoryTable, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import ReactCountryFlag from "react-country-flag"

const Table = ({ data }) => {
    const [query, setQuery] = useState('');
    
    const countries = data?.countries?.map(country => (
        {
            name: country.name,
            isocode: country.code,
            continent: country.continent?.name,
            flag: country.code
        }
    ));

    const continents = data?.continents?.map(continent => (
        {
            code: continent?.code,
            name: continent?.name
        }
    ));

    const columns = [
        {
            field: 'name',
            name: 'Name',
            sortable: true,
            truncateText: true,
            align: "center",
            mobileOptions: {
                header: true,
                width: '49%',
                enlarge: true,
              }
        },
        {
            field: 'isocode',
            name: 'ISOCode',
            sortable: true,
            mobileOptions: {
                header: true,
                width: '49%',
                enlarge: true,
              }
        },
        {
            field: 'continent',
            name: 'Continent',
            sortable: true,
            mobileOptions: {
                header: true,
                width: '49%',
                enlarge: true,
              }
        },
        {
            field: 'flag',
            name: 'Flag',
            render: (flag) => { return <ReactCountryFlag countryCode={flag} svg aria-label={flag} style={{ width: '2em', height: '2em' }} />; },
            sortable: true,
            mobileOptions: {
                header: true,
                width: '49%',
                enlarge: false,
              }
        }
    ];

    const handleOnChange = ({ queryText, error }) => {
        if (!error) {
            setQuery(queryText);
        }
    }

    const search = {
        query,
        onChange: handleOnChange,
        box: {
            schema: true
        },
        filters: [
            {
                type: 'field_value_selection',
                field: 'continent',
                name: 'Continent',
                multiSelect: 'or',
                options: continents?.map((continent) => ({
                    value: continent.name,
                    name: continent.name
                }))
            }
        ]
    }

    const sorting = {
        sort: {
            field: 'name',
            direction: 'asc'
        }
    };

    return (
        <Fragment>
            <EuiFlexGroup>
                <EuiFlexItem grow={3}>
                    <EuiInMemoryTable
                        items={countries}
                        columns={columns}
                        search={search}
                        pagination={true}
                        sorting={sorting}
                        isSelectable={true}
                        isExpandable={true}
                        hasActions={false}
                    />
                </EuiFlexItem>
            </EuiFlexGroup>
        </Fragment>
    );
};

export default Table;