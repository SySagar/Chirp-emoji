import { type NextPage } from "next";
import Head from "next/head";
import { PageLayout } from "~/components/layout";
import { LoadingPage } from "~/components/loading";
import { api } from "~/utils/api";

const ProfileFeed: NextPage = () => {
  const { data, isLoading } = api.profile.getUserByUsername.useQuery({
    username: "sysagar",
  });

  if (isLoading) return <LoadingPage />;

  if (!data) return <div>User has not posted</div>;

  return (
    <>
      <PageLayout>
        <main className="flex h-screen justify-center">
          <div className=" h-full w-full">{data.username}</div>
        </main>
      </PageLayout>
    </>
  );
};

export default ProfileFeed;
