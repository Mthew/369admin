import { RoleProvider } from "@/context/RoleContext";

const RoleLayout = ({ children }: { children: React.ReactNode }) => {
  return <RoleProvider>{children}</RoleProvider>;
};

export default RoleLayout;
