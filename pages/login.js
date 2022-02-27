import { signIn, useSession } from "next-auth/react";
import { getProviders } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

function LoginPage() {
  const { data } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   (async () => {
  //     const providers = await getProviders();
  //     console.log(providers);
  //   })();
  // }, []);

  useEffect(() => {
    if (data) {
      router.push("/");
    }
  }, [data, router]);

  return (
    <div>
      <button onClick={() => signIn("github")}>Login with Github</button>
      <h1>login</h1>
    </div>
  );
}

export default LoginPage;
