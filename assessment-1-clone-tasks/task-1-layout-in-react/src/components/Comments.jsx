const commentsData = [
  {
    id: 1,
    username: "soundseeker92",
    text: "This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?"
  },
  {
    id: 2,
    username: "Ted Baker",
    text: "I've been following the label for years—so glad someone's finally writing about their impact."
  },
  {
    id: 3,
    username: "Queen_of_noise",
    text: "I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories and be and my friends listening together. A bit too poetic for my taste, but still compelling."
  }
];

export default function Comments() {
  return (
    <section className="comments-section">
      <h2>Comments</h2>
      {commentsData.map((c) => (
        <article key={c.id} className="comment-item">
          <strong className="comment-author">{c.username}</strong>
          <p>{c.text}</p>
        </article>
      ))}
    </section>
  );
}