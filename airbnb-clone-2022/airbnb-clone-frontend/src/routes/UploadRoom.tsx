import useHostOnlyPage from "../components/HostOnlyPage";
import HostOnlyPage from "../components/HostOnlyPage";
import ProtectedPage from "../components/ProtectedPage";

export default function UploadRoom() {
  //  component 방법
  //   return (
  //     <ProtectedPage>
  //       <HostOnlyPage>
  //         <h1>upload roommmm</h1>
  //       </HostOnlyPage>
  //     </ProtectedPage>
  //   );

  // hook 방법
  //   useProtectedPage();
  useHostOnlyPage();
  return (
    <ProtectedPage>
      <h1>upload roommmm</h1>
    </ProtectedPage>
  );
}
