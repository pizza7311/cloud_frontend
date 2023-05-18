import SideMenu from "@/components/PageLayout/PageLayout";
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
  return (
    <SideMenu>
      <div>test</div>
    </SideMenu>
  );
};

export default MyDrive;
