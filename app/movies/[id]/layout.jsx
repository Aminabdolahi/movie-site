

export default function RootLayout({ children }) {
  return (
    <div className=" flex justify-between items-start gap-2 ">
      <main>{children}</main>
      <aside className="w-[20rem]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo magni et officiis pariatur? Placeat ad et, quae, quasi molestias accusamus veniam autem nesciunt saepe ullam culpa error ab atque! Excepturi, repudiandae! Dicta nostrum quaerat eligendi sunt iusto aperiam minima esse aliquid obcaecati quibusdam, 
      </aside>
    </div>
  );
}
