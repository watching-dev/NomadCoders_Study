import React, { useEffect } from "react";
import useUser from "../lib/useUser";
import { useNavigate } from "react-router-dom";

// interface IHostOnlyPageProps {
//   children: React.ReactNode;
// }

// // component 방법
// export default function HostOnlyPage({ children }: IHostOnlyPageProps) {
//   const { user, userLoading } = useUser();
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!userLoading) {
//       if (!user.is_host) {
//         navigate("/");
//       }
//     }
//   }, [userLoading, user, navigate]);
//   return <>{children}</>;
// }

// hook 방법
export default function useHostOnlyPage() {
  const { user, userLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading) {
      if (!user.is_host) {
        navigate("/");
      }
    }
  }, [userLoading, user, navigate]);
  return;
}
