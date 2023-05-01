


import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Landing } from "../../constant";

function ContentLanding({ data }: { data: any }) {
  const router = useRouter();

  console.log('router',router, data)

  return (
    <div >
      <h1>{data.title}</h1>
      <img src={data.images.banner} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://apicdn.stag.vimai.io/tenants/odv/contents/${context.query.slug}/detail`
  );
  const data: Landing = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default ContentLanding;