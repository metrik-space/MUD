import Header from "./header";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="bg-cyan">
        {props.children}
      </main>
    </div>
  );
}
