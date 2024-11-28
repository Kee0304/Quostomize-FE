import Nav from "../../components/navigationbar/bottomNav.jsx";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function NavLayout({ children }) {
  const menuItems = [
    {title: "홈", iconName: "home", path: "home"},
    {title: "나의카드", iconName: "credit_card", path: "my-card"},
    {title: "혜택변경", iconName: "price_change", path: "benefit-change"},
    {title: "서비스", iconName: "stars", path: "service"},
    {title: "내정보", iconName: "account_circle", path: "my-page"},
  ]

  return (
    <>
      <div className="w-96 h-[calc(100%-4rem)] bg-white">
        {children}
      </div>
      <Nav menuItems={menuItems}/>
    </>
  );
}
