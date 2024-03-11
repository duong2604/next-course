import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <div>
        <Link href={`/client`}>
          <button className="btn btn-accent">Get Started</button>
        </Link>
      </div>
    </div>
  );
};
export default Homepage;
