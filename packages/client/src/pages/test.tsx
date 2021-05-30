import { useQuery } from 'graphql-hooks';

const HOMEPAGE_QUERY = /* GraphQL */ `
  query {
    comment(id: 1) {
      postId
      id
      email
    }
  }
`;

const Test: React.FC = (props) => {
  const gh = useQuery(HOMEPAGE_QUERY, {});
  console.log('props:', props);
  console.log('gh:', gh);
  return <h1>123</h1>;
};

export default Test;
