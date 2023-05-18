import PageLayout from "@/components/PageLayout/PageLayout";
import Spinner from "@/components/spinner/Spinner";
import useRedirect from "@/hooks/useRedirect";

const MyDrive = () => {
  const { loading } = useRedirect(true);

  //TODO: 내 파일 목록 리스트 표시

  if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }

  return (
    <PageLayout>
      <div>test</div>
    </PageLayout>
  );
};

export default MyDrive;
