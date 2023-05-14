import Spinner from "@/components/spinner/Spinner";
import useRedirect from "@/hooks/useRedirect";

export default function Home() {
  const { loading } = useRedirect();

  if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }

  return <div>로그인 안됐을때 보여줄 메인페이지</div>;
}
