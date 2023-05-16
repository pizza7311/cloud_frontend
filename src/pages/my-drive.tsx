import Spinner from "@/components/spinner/Spinner";
import useRedirect from "@/hooks/useRedirect";

const MyDrive = () => {
  const { loading } = useRedirect(true);
  if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }
  return <div>개인 드라이브 대쉬보드 페이지</div>;
};

export default MyDrive;
