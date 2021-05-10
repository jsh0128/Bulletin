import HeaderContainer from "container/HeaderContainer";

interface DefaultTemplateProps {
  children: React.ReactNode;
}

const DefaultTemplate = ({ children }: DefaultTemplateProps) => {
  return (
    <>
      <HeaderContainer />
      {children}
    </>
  );
};
export default DefaultTemplate;
