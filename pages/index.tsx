import { InferGetStaticPropsType } from "next";
import Head from "next/head";

import { getPostsList } from "@shared/util";
import Navigation from "@components/navigation";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";

type PostList = string[];

function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navigation />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    {posts.length > 0 && (
                      <tr>
                        {posts.map((slug) => (
                          <th key={slug}>
                            <Link href={`posts/${slug}`}>
                              <a>{slug.split("-").join(" ")}</a>
                            </Link>
                          </th>
                        ))}
                      </tr>
                    )}
                  </thead>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const posts: PostList = getPostsList();
  return {
    props: {
      posts,
    },
  };
};

export default Home;
