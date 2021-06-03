import { useQuery } from 'graphql-hooks';
import React from 'react';

const HOMEPAGE_QUERY = /* GraphQL */ `
  query {
    comment(id: 1) {
      postId
      id
      email
    }
  }
`;

type Comment = {
  comment: {
    email: string;
    id: number;
    postId: number;
  };
};

const Index: React.FC = () => {
  const gh = useQuery<Comment>(HOMEPAGE_QUERY, {});
  return (
    <section style={{ paddingBottom: 24 }}>
      <span>{gh.loading ? '基础CRUD页面加载中' : gh.data?.comment.email}</span>
    </section>
  );
};

export default Index;
