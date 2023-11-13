import { getServerSession } from "next-auth";
import ProductCard from "./components/ProductCard";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <h1 className="text-[80px]">
        Hello {session && <span>{session.user!.name}</span>}
      </h1>

      <ProductCard />
    </>
  );
}
