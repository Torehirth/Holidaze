import { Button } from "../../../shared/components/ui/buttons/Button";
import { useLogout } from "../../auth/hooks/useLogout";

export const ProfilePage = () => {
  const handleLogout = useLogout();
  return (
    <>
      <div className="p-8">
        <h1 className="p-4 pb-4">Profile Page</h1>
        <Button type="button" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};
