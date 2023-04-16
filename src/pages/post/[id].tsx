import { type NextPage } from "next";
import Head from "next/head";
import { PageLayout } from "~/components/layout";
import { PostView } from "~/components/postview";
import { api } from "~/utils/api";


const SinglePostPage: NextPage<{ id: string }> = ({ id }) => {

  const { data } = api.posts.getById.useQuery({
    id,
  });
  if (!data) return <div>404</div>;


  return (
    <>
    <Head>
      <title>{`${data.post.content} - @${data.author.username}`}</title>
    </Head>
    <PageLayout>
      <PostView {...data} />
    </PageLayout>
  </>
  );
};

export default SinglePostPage;
