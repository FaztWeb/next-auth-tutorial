import { getSession, signOut } from "next-auth/react";
import Image from "next/image";

function IndexPage({ session }) {
  return (
    <main>
      <h1>Dashboard</h1>

      <div>
        {session?.user ? (
          <div>
            <h1>{session.user.name}</h1>

            <p>{session.user.email}</p>
            <Image
              src={session.user.image}
              alt={session.user.name}
              width={30}
              height={30}
            />

            <button onClick={() => signOut()}>Logout</button>
          </div>
        ) : (
          <h1>skeleton</h1>
        )}
      </div>
    </main>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  console.log(session);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default IndexPage;
