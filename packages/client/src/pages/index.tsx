import { ClientContext, GraphQLClient } from 'graphql-hooks';
import styles from './index.less';
import Test from './test';

const client = new GraphQLClient({
  url: 'https://jsonplaceholder.ir/graphql',
});

export default function IndexPage() {
  return (
    <div>
      <ClientContext.Provider value={client}>
        <Test />
      </ClientContext.Provider>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
