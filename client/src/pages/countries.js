import { useQuery, gql } from '@apollo/client';
import Page from '../components/page';
import QueryResult from '../components/query-result.js';

import Table from '../components/table';

export const QUERY = gql`
query CountryListQuery {
  countries {
    name, continent {
      name
    }, code
    emoji
  }
  continents {
    code
    name
  }
}
`;

export const Countries = () => {
    const { loading, error, data } = useQuery(QUERY);

    return <Page>
        <QueryResult error={error} loading={loading} data={data}>
            <Table data={data} />
        </QueryResult>
    </Page>
}